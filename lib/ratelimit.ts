import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

type RateLimitResult = {
  success: boolean;
  reset?: number;
};

const upstashEnabled =
  Boolean(process.env.UPSTASH_REDIS_REST_URL) &&
  Boolean(process.env.UPSTASH_REDIS_REST_TOKEN);

const upstashRateLimit = upstashEnabled
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, "1 h"),
      analytics: true,
    })
  : null;

const localHits = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;

function limitWithLocalStore(identifier: string): RateLimitResult {
  const now = Date.now();
  const recent = (localHits.get(identifier) || []).filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );

  if (recent.length >= MAX_REQUESTS) {
    return {
      success: false,
      reset: recent[0] + WINDOW_MS,
    };
  }

  recent.push(now);
  localHits.set(identifier, recent);

  return {
    success: true,
    reset: now + WINDOW_MS,
  };
}

export async function limitContactSubmissions(
  identifier: string
): Promise<RateLimitResult> {
  if (!upstashRateLimit) {
    return limitWithLocalStore(identifier);
  }

  const result = await upstashRateLimit.limit(identifier);

  return {
    success: result.success,
    reset: result.reset,
  };
}
