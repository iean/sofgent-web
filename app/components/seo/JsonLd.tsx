/**
 * Server-rendered JSON-LD.
 *
 * Do NOT use `next/script` for structured data: it injects the tag after
 * hydration, so it is missing from the raw HTML that GPTBot, ClaudeBot and
 * PerplexityBot read. A plain <script> in a server component is emitted in
 * the initial HTML response.
 */
type JsonLdProps = {
  id?: string;
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function JsonLd({ id, data }: JsonLdProps) {
  // Escape "<" so content can never close the script tag early.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
