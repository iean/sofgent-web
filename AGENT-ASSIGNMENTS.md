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
| wdy2xgxgdn | [S0] Replace fabricated case-study outcome metrics | Claude Code | DONE | Sanity `production` → 3 `caseStudy` docs patched+published (outcomes now factual capability statements, thumbnails → `/images/case-studies/*.svg`). Verified: "3x/55%/78%" absent site-wide + source. Scope unlocked. Codex completion review: no remaining implementation work. | 2026-08-05 10:47 |
| wdy2xgxgd1 | [S0] Remove tracked secrets and rotate credentials | Codex Desktop / primary-blockers | BLOCKED | Accepted post-launch risk per user on 2026-08-05; not a release blocker. Local safeguard complete. External credential rotation and optional Git-history purge remain required after launch. | 2026-08-05 12:08 |
| wdy2xgxgd0 | [S0] Upgrade vulnerable production dependencies | Codex Desktop / primary-blockers | DONE | Dependency and compatibility changes verified. Scope unlocked. ClickUp closure pending because the connector is rate-limited and the browser session requires interactive authentication. @Claude: no remaining implementation work. | 2026-08-05 10:47 |
| wdy2xgxgd2 | [S0] Verify production contact delivery | Codex Desktop / primary-blockers | BLOCKED | Accepted post-launch risk per user on 2026-08-05; not a release blocker. Local validation complete. Production credentials and an inbox-confirmed submission remain required after launch. | 2026-08-05 12:08 |
| wdy2xgxgd4 | [S0] Fix broken Custom Software destinations | Codex Desktop / primary-blockers | DONE | `app/(pages)/custom-software/page.tsx`; 28-link production crawl passed. Scope unlocked. ClickUp closure pending because the connector is rate-limited and the browser session requires interactive authentication. @Claude: no remaining implementation work. | 2026-08-05 10:47 |
| wdy2xgxgd3 | [S0] Split Projects into live work and case studies | Codex Desktop / primary-blockers | DONE | `app/(pages)/projects/page.tsx`, read-only Sanity project collections; implementation verified and scope unlocked. ClickUp closure pending because the connector is rate-limited and the browser session requires interactive authentication. @Claude: no remaining implementation work. | 2026-08-05 10:47 |
| TASK-WLR-003 | [Critical] Resolve robots.txt conflict | Codex Desktop / launch-readiness | DONE | Removed duplicate `app/robots.txt`; retained canonical `public/robots.txt`. Production `/robots.txt` and `/sitemap.xml` return 200. Scope unlocked. | 2026-08-05 08:59 |
| TASK-WLR-004 | [High] Add OG/Twitter images to core routes | Codex Desktop / launch-readiness | DONE | Added generated preview fallback plus content-specific live/blog images. 11 routes emit OG+Twitter images; `/opengraph-image` returns 200 PNG. Scope unlocked. | 2026-08-05 09:05 |
| TASK-WLR-006 | [High] Normalize project detail metadata | Codex Desktop / launch-readiness | DONE | Eight project routes verified with unique route-specific titles, non-empty descriptions ≤160 characters, canonical URLs, and OG/Twitter images. Scope unlocked. | 2026-08-05 09:07 |
| wdy2xgxgda | [S1] Protect /admin + prevent Studio indexing | Claude Code | DONE | `app/(pages)/admin/page.tsx` robots noindex + `next.config.mjs` X-Robots-Tag for /admin + /studio/*. Verified: `/admin` returns `X-Robots-Tag: noindex, nofollow`. Scope unlocked. (Access-auth via middleware left as follow-up — needs credential decision.) | 2026-08-05 09:32 |
| wdy2xgxgd5 | [S1] Production security headers + remove framework disclosure | Claude Code | DONE | `next.config.mjs` headers() (nosniff, X-Frame-Options SAMEORIGIN, Referrer-Policy, HSTS, Permissions-Policy) + poweredByHeader:false. Verified live: headers present, X-Powered-By gone. No CSP added (avoids breaking GTM/Studio — separate task). Scope unlocked. | 2026-08-05 09:32 |
| wdy2xgxgde | [S1] Add live-project pages to dynamic sitemap | Claude Code | DONE | `app/sitemap.ts` adds `/live-projects/{slug}` from getLiveProjectSlugs. Verified: 3 live-project URLs in `/sitemap.xml`. Scope unlocked. | 2026-08-05 09:32 |
| wdy2xgxgd7 | [S1] Make header navigation keyboard + screen-reader accessible | Claude Code | DONE | `Header.tsx`: dropdowns now button-toggle with aria-haspopup/expanded/controls, role=menu + menuitem, ArrowDown-open/Escape-close+refocus, blur-close; mobile toggle + section buttons get aria-expanded/controls; desktop `<nav aria-label="Primary">`. Verified live: click opens (aria-expanded true, 3 menuitems). Scope unlocked. | 2026-08-05 09:48 |
| wdy2xgxgd8 | [S1] Make contact form accessible + improve validation UX | Claude Code | DONE | `ContactFormModern.tsx`: every field now id+htmlFor associated, autoComplete (given-name/family-name/email/tel/organization), required fields aria-required + visual `*`, error is role=alert + aria-live, success is role=status and receives focus. Verified live: 8/8 fields labeled. Scope unlocked. | 2026-08-05 09:56 |
| LOCAL-RUNTIME | Local Next.js `.next` directory and server | Codex Desktop / production-release | WIP | Preparing the production build and Vercel release. `.next` and deployment workflow are locked to Codex until completion. | 2026-08-05 12:08 |
| TASK-WLR-007 | [High] Inventory and classify hard trust claims | Codex Desktop / launch-readiness | DONE | Claim families classified as keep, soften, prove, or remove with locations and rewrite priorities in the evidence document. Scope unlocked. | 2026-08-05 09:07 |
| TASK-WLR-008 | [High] Rewrite unsupported homepage claims | Codex Desktop / launch-readiness | DONE | Removed zero-bug guarantee, unsupported accuracy/manual-review claims, and competitor assertions. Replaced with testable delivery controls and bounded 4–6 week wording. TypeScript and rendered-copy checks pass. Scope unlocked. | 2026-08-05 09:07 |
| TASK-LOGO-001 | Add official live-project logos to homepage | Codex Desktop / project-logos | DONE | Three optimized official logos rendered and linked. Desktop/mobile visual checks, TypeScript, alt/link assertions, route checks, and console checks pass. Scope unlocked. | 2026-08-05 09:20 |
| TASK-EASYKT-001 | Update SofGent public EasyKT positioning from current product reality | Codex Desktop / easykt-public-site | REVIEW | `lib/sanity/content.ts`, `studio-app/scripts/upsert-live-projects.mjs`, `lib/content/serviceCatalog.ts`, `app/data/meta.json`, service markdown copy. EasyKT messaging updated around source sync, onboarding, knowledge search, and training-draft workflows. Awaiting normal build/deploy pass once `LOCAL-RUNTIME` is released. | 2026-08-05 10:46 |
| EMAIL-RECIPIENT (coord w/ wdy2xgxgd2) | Change all site email addresses support@→contact@ | Claude Code | DONE | Per user instruction, swapped every `support@sofgent.com` → `contact@sofgent.com` across 9 files: contact-form recipient (`route.ts:164`), all mailto links (Topbar/Footer/contact page/contact index), Org JSON-LD email (`layout.tsx`), form error text, and privacy/terms pages. Verified: 0 `support@` remain. @Codex: route.ts change is destination string only — your wdy2xgxgd2 prod-cred/delivery work is untouched. Scope unlocked. | 2026-08-05 10:52 |
| TASK-LEGAL-001 | Add production-ready Privacy Policy and Terms of Service pages | Codex Desktop / legal-pages | DONE | Replaced generic generator copy with SofGent-specific privacy and website terms, added responsive legal-page styling and updated Terms metadata. TypeScript, ESLint, and scoped diff checks pass. Scope unlocked. Counsel review is recommended before launch. | 2026-08-05 11:01 |
| EMAIL-SMTP (coord w/ wdy2xgxgd2) | Make contact SMTP provider-agnostic (Microsoft 365) | Claude Code | DONE | `route.ts` transporter now host/port from env (SMTP_HOST/SMTP_PORT/SMTP_SECURE), default smtp.office365.com:587 STARTTLS + requireTLS, since mailbox is Microsoft 365. @Codex (wdy2xgxgd2): PREREQ for delivery — tenant must enable Authenticated SMTP for the mailbox + app password (Security Defaults block basic-auth SMTP by default). Please add SMTP_HOST/SMTP_PORT/SMTP_SECURE to `.env.example` (your scope). Scope unlocked. | 2026-08-05 11:08 |
| DESIGN-SERVICEDETAIL | Fix congested service-detail hero layout | Claude Code | DONE | `app/(pages)/services/[slug]/page.tsx`: hero highlight card changed from cramped `sm:grid-cols-2` (text wrapped to 8 narrow lines) → single full-width column; `buildHighlights` de-duplicated (dropped `service.description` which repeated the hero subtitle) + fixed awkward auto-generated eyebrow sentence → now proof + 2 concise delivery lines. Verified live on /services/advanced-ai-solutions. Presentation only. Scope unlocked. | 2026-08-05 11:24 |
| FIX-ADDON-LINKS | Homepage addon cards link to hubs, not service pages | Claude Code | DONE | `app/page.tsx` 3 `addons[].href` repointed from hub pages (/ai-product-studio, /custom-software) → real service detail pages: Training Data Pipelines→/services/advanced-ai-solutions, Product Design & UX→/services/custom-software-development, MLOps & Deployment→/services/system-integration. All 3 verified 200. (Cards were never broken — they navigated, just to hubs; the topical slugs like /services/product-design-ux 404 since those pages don't exist.) Scope unlocked. | 2026-08-05 12:14 |
| DESIGN-SERVICEDETAIL-2 | Service-detail body → full-width content + cards beneath | Claude Code | DONE | `app/(pages)/services/[slug]/page.tsx`: removed 2-col `<aside>` sidebar → content now full-width; section bodies use `md:columns-2` (fills width, fixes sparse look); supporting cards (Technology stack / Related services / How we work) moved to a full-width 3-col row beneath; full-width dark "Next step" CTA at bottom. Dropped redundant "On this page" ToC + duplicate teal CTA. Verified via DOM (no aside, columns=2, 3 support cards), no console errors. Scope unlocked. | 2026-08-05 12:26 |
| DESIGN-PROJECT-CARDS | Fix live-project card highlight labels wrapping to 2 lines | Claude Code | DONE | `app/page.tsx` (homepage live cards, `flex gap-2`→`flex flex-col`) + `app/(pages)/projects/page.tsx` (`grid grid-cols-2`→`flex flex-col`) — highlight boxes now render value+label INLINE on one line (value shrink-0, label min-w-0 truncate), vertically stacked → no 2-line wrap, consistent for 2 or 3 highlights. Edits confirmed in source; visual check pending (Codex has dev server down for the release build). @Codex(release): please include these 2 files in the pending build. Scope unlocked. | 2026-08-05 12:44 |

## Newly created tickets (this session)
- wdy2xgxgdn — [S0] Replace fabricated case-study outcome metrics (**CRITICAL**)
- wdy2xgxgdp — [S1] Add UK/US contact number and business location
- wdy2xgxgdq — [S2] Consolidate overlapping services pages + IA
- (pending, ClickUp rate-limited) [S3] Convert card `<img>` tags to `next/image` for LCP

## Process documents
- Coordination spec: `docs/superpowers/specs/2026-08-05-agent-work-coordination.md`
- Operating plan: `docs/superpowers/plans/2026-08-05-agent-work-coordination.md`
- Assignment history: `docs/superpowers/backlog/2026-08-05-agent-work-assignments.md`
