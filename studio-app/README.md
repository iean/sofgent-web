# SofGent standalone Studio

This app is the dedicated Sanity Studio deployment for `studio.sofgent.com`.

## Local development

1. Copy `.env.example` values into a local env file.
2. Run `npm install`.
3. Run `npm run dev`.

## Deployment

- Deploy this folder as its own Vercel project.
- Set the root directory to `studio-app`.
- Attach `studio.sofgent.com` to that dedicated project.
- Keep the website project separate so production site behavior is unchanged.
