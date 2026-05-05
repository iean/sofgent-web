import { NextResponse, type NextRequest } from "next/server";
import { getDeploymentDiagnostics } from "@/lib/runtime/deployment";

export function middleware(request: NextRequest) {
  const diagnostics = getDeploymentDiagnostics(
    request.headers.get("x-forwarded-host") || request.headers.get("host"),
  );

  const isHtmlRequest =
    request.headers.get("accept")?.includes("text/html") ?? false;

  const response = NextResponse.next();

  if (diagnostics.isPreview) {
    response.headers.set("x-sofgent-environment", diagnostics.environment);
    response.headers.set("x-sofgent-host", diagnostics.host || "unknown");

    if (diagnostics.gitBranch) {
      response.headers.set("x-sofgent-branch", diagnostics.gitBranch);
    }

    if (isHtmlRequest) {
      console.info(
        `[sofgent:deployment] ${JSON.stringify({
          environment: diagnostics.environment,
          host: diagnostics.host,
          path: request.nextUrl.pathname,
          branch: diagnostics.gitBranch || null,
        })}`,
      );
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
