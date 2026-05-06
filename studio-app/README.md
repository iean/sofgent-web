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

## Seeding case studies

The website can read case studies from Sanity first and fall back to local JSON.

To import the current local case studies into Sanity:

```bash
cd studio-app
npm run seed:case-studies
```

This command:

- reads `../app/data/case-studies/case-studies.json`
- uploads any referenced local images from `../public`
- upserts `caseStudy.*` documents in Sanity

To test the import without writing:

```bash
cd studio-app
npm run seed:case-studies:dry
```

## Seeding services

The website can read service detail pages from Sanity first and fall back to local JSON.

To import the current service catalog into Sanity:

```bash
cd studio-app
npm run seed:services
```

This command:

- reads `../app/data/services/services.json`
- uploads any referenced local hero images from `../public`
- upserts `service.*` documents in Sanity

To test the import without writing:

```bash
cd studio-app
npm run seed:services:dry
```

## Seeding FAQs

The website can read FAQs from Sanity first and fall back to local JSON.

To import the current shared and service-specific FAQs into Sanity:

```bash
cd studio-app
npm run seed:faqs
```

To test the import without writing:

```bash
cd studio-app
npm run seed:faqs:dry
```
