# Agent Work Coordination

Multiple AI agents (Claude Code, Codex) and humans share the ClickUp **Website** list
(`https://app.clickup.com/9014723084/v/l/li/901414626818`) and this repo. Use this file as the
**live claim board** so two agents never work the same ticket or touch the same files at once.

## Protocol (read before starting any ticket)
1. **Check this table first.** If a ticket has an active owner with status `WIP`, do not start it.
2. **Claim before you work:** add/update a row here (ticket id, agent, status `WIP`, file scope, UTC time) and commit it as its own commit before editing code.
3. **Also mirror to ClickUp when possible:** set the ticket Assignee, move status to *in progress*, and post a comment `🤖 <agent> — WIP`. (ClickUp writes were rate-limited 2026-08-05; mirror once the limit clears.)
4. **Release on done:** set status `DONE` here and move the ClickUp ticket to *in review*.
5. **Shared production resources** (Sanity `production` dataset, Vercel, GitHub secrets): only ONE agent writes at a time. Announce in the row's `scope` and coordinate before writing.
6. **Local runtime:** claim `LOCAL-RUNTIME` before running `next dev`, `next build`, or `next start` because all three mutate `.next`. Only one may run at a time.

## Statuses
- `WIP` — actively being changed; the listed scope is locked to that agent.
- `BLOCKED` — ownership is retained, but an external action or decision is required.
- `REVIEW` — implementation is finished locally; do not edit the scope until it is reviewed or handed back.
- `DONE` — verified and released; the scope is unlocked.

When handing work to another agent, change the owner and timestamp in the same edit and add a short
handoff note to the scope. Agents should use a unique label such as `Codex Desktop / primary-blockers`
instead of the shared ClickUp account name.

## Identity
Both agents may authenticate to ClickUp/Sanity as "Masud Alam", so the board's Assignee field
cannot distinguish agents. **This file's `agent` column is the source of truth for who is doing what.**

## Active claims
| Ticket | Title | Agent | Status | File / resource scope | Updated (UTC) |
|--------|-------|-------|--------|-----------------------|---------------|
| wdy2xgxgdn | [S0] Replace fabricated case-study outcome metrics | Claude Code | DONE | Sanity `production` → 3 `caseStudy` docs patched+published (outcomes now factual capability statements, thumbnails → `/images/case-studies/*.svg`). Verified: "3x/55%/78%" absent site-wide + source. Scope unlocked. NOTE: homepage/projects case-study card rendering is being restructured by Codex under wdy2xgxgd3 — honest data flows through once that lands. | 2026-08-05 08:10 |
| wdy2xgxgd1 | [S0] Remove tracked secrets and rotate credentials | Codex Desktop / primary-blockers | BLOCKED | `.env`, `.env.example`, `.gitignore`; local safeguard complete, external credential rotation and optional Git-history purge required | 2026-08-05 07:53 |
| wdy2xgxgd0 | [S0] Upgrade vulnerable production dependencies | Codex Desktop / primary-blockers | REVIEW | `package.json`, `pnpm-lock.yaml`, `lib/sanity/client.ts`, dynamic Next.js route typing, `tsconfig.json` | 2026-08-05 07:53 |
| wdy2xgxgd2 | [S0] Verify production contact delivery | Codex Desktop / primary-blockers | BLOCKED | `app/api/contact/route.ts`, production email environment and inbox; local validation complete, real production credentials/test required | 2026-08-05 07:53 |
| wdy2xgxgd4 | [S0] Fix broken Custom Software destinations | Codex Desktop / primary-blockers | REVIEW | `app/(pages)/custom-software/page.tsx`; 28-link production crawl passed | 2026-08-05 07:53 |
| wdy2xgxgd3 | [S0] Split Projects into live work and case studies | Codex Desktop / primary-blockers | REVIEW | `app/(pages)/projects/page.tsx`, read-only Sanity project collections | 2026-08-05 07:53 |
| TASK-WLR-003 | [Critical] Resolve robots.txt conflict | Codex Desktop / launch-readiness | DONE | Removed duplicate `app/robots.txt`; retained canonical `public/robots.txt`. Production `/robots.txt` and `/sitemap.xml` return 200. Scope unlocked. | 2026-08-05 08:59 |
| TASK-WLR-004 | [High] Add OG/Twitter images to core routes | Codex Desktop / launch-readiness | DONE | Added generated preview fallback plus content-specific live/blog images. 11 routes emit OG+Twitter images; `/opengraph-image` returns 200 PNG. Scope unlocked. | 2026-08-05 09:05 |
| TASK-WLR-006 | [High] Normalize project detail metadata | Codex Desktop / launch-readiness | DONE | Eight project routes verified with unique route-specific titles, non-empty descriptions ≤160 characters, canonical URLs, and OG/Twitter images. Scope unlocked. | 2026-08-05 09:07 |
| wdy2xgxgda | [S1] Protect /admin + prevent Studio indexing | Claude Code | DONE | `app/(pages)/admin/page.tsx` robots noindex + `next.config.mjs` X-Robots-Tag for /admin + /studio/*. Verified: `/admin` returns `X-Robots-Tag: noindex, nofollow`. Scope unlocked. (Access-auth via middleware left as follow-up — needs credential decision.) | 2026-08-05 09:32 |
| wdy2xgxgd5 | [S1] Production security headers + remove framework disclosure | Claude Code | DONE | `next.config.mjs` headers() (nosniff, X-Frame-Options SAMEORIGIN, Referrer-Policy, HSTS, Permissions-Policy) + poweredByHeader:false. Verified live: headers present, X-Powered-By gone. No CSP added (avoids breaking GTM/Studio — separate task). Scope unlocked. | 2026-08-05 09:32 |
| wdy2xgxgde | [S1] Add live-project pages to dynamic sitemap | Claude Code | DONE | `app/sitemap.ts` adds `/live-projects/{slug}` from getLiveProjectSlugs. Verified: 3 live-project URLs in `/sitemap.xml`. Scope unlocked. | 2026-08-05 09:32 |
| wdy2xgxgd7 | [S1] Make header navigation keyboard + screen-reader accessible | Claude Code | DONE | `Header.tsx`: dropdowns now button-toggle with aria-haspopup/expanded/controls, role=menu + menuitem, ArrowDown-open/Escape-close+refocus, blur-close; mobile toggle + section buttons get aria-expanded/controls; desktop `<nav aria-label="Primary">`. Verified live: click opens (aria-expanded true, 3 menuitems). Scope unlocked. | 2026-08-05 09:48 |
| wdy2xgxgd8 | [S1] Make contact form accessible + improve validation UX | Claude Code | DONE | `ContactFormModern.tsx`: every field now id+htmlFor associated, autoComplete (given-name/family-name/email/tel/organization), required fields aria-required + visual `*`, error is role=alert + aria-live, success is role=status and receives focus. Verified live: 8/8 fields labeled. Scope unlocked. | 2026-08-05 09:56 |
| LOCAL-RUNTIME | Local Next.js `.next` directory and server | Claude Code | WIP | Observed `next dev` owned by Claude.app on port 55155. No other agent may run dev/build/start until released. | 2026-08-05 09:07 |
| TASK-WLR-007 | [High] Inventory and classify hard trust claims | Codex Desktop / launch-readiness | DONE | Claim families classified as keep, soften, prove, or remove with locations and rewrite priorities in the evidence document. Scope unlocked. | 2026-08-05 09:07 |
| TASK-WLR-008 | [High] Rewrite unsupported homepage claims | Codex Desktop / launch-readiness | DONE | Removed zero-bug guarantee, unsupported accuracy/manual-review claims, and competitor assertions. Replaced with testable delivery controls and bounded 4–6 week wording. TypeScript and rendered-copy checks pass. Scope unlocked. | 2026-08-05 09:07 |
| TASK-LOGO-001 | Add official live-project logos to homepage | Codex Desktop / project-logos | DONE | Three optimized official logos rendered and linked. Desktop/mobile visual checks, TypeScript, alt/link assertions, route checks, and console checks pass. Scope unlocked. | 2026-08-05 09:20 |
| TASK-EASYKT-001 | Update SofGent public EasyKT positioning from current product reality | Codex Desktop / easykt-public-site | WIP | `app/page.tsx`, `studio-app/scripts/upsert-live-projects.mjs`, optional Sanity `production` doc `liveProject.easykt`; refresh homepage/live-project copy around current EasyKT features and positioning | 2026-08-05 10:35 |

## Newly created tickets (this session)
- wdy2xgxgdn — [S0] Replace fabricated case-study outcome metrics (**CRITICAL**)
- wdy2xgxgdp — [S1] Add UK/US contact number and business location
- wdy2xgxgdq — [S2] Consolidate overlapping services pages + IA
- (pending, ClickUp rate-limited) [S3] Convert card `<img>` tags to `next/image` for LCP

## Process documents
- Coordination spec: `docs/superpowers/specs/2026-08-05-agent-work-coordination.md`
- Operating plan: `docs/superpowers/plans/2026-08-05-agent-work-coordination.md`
- Assignment history: `docs/superpowers/backlog/2026-08-05-agent-work-assignments.md`
