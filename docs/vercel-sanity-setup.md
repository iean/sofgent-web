# Vercel and Sanity setup

This project is designed to keep `main` as the production branch while allowing a redesign branch such as `new-design` to deploy as a preview without affecting the live site.

## Branch strategy

- Keep `main` mapped to Production in Vercel.
- Push the redesign work to a long-lived branch such as `new-design`.
- Let Vercel create Preview deployments from that branch automatically.
- Merge into `main` only after the redesign preview is approved.

## Shared CMS strategy

- Use one Sanity project and one dataset as the shared source of truth across branches.
- Set the same `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` values in both Production and Preview environments in Vercel.
- This keeps blog posts, FAQ items, and optional page content consistent across both branches.

## Required environment variables

Add these variables in Vercel for both `Production` and `Preview`:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

Optional:

- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_REVALIDATE_SECRET` if you later add webhook-driven revalidation

## Preview safety

- The app treats missing Sanity configuration as a non-fatal condition.
- Blog listing pages render a safe empty state instead of crashing.
- FAQ content falls back to the shared local JSON layer when CMS content is unavailable.

## Recommended rollout

1. Add the Sanity environment variables to Vercel Preview and Production.
2. Push this branch to a remote branch named `new-design`.
3. Verify the generated Vercel preview deployment.
4. Populate Sanity content.
5. Merge to `main` when the preview is approved.
