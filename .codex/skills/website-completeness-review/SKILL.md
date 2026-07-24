---
name: website-completeness-review
description: Use when reviewing whether a website or web app is complete enough to launch, especially for design, content, UX, trust, CTA, SEO, accessibility, responsiveness, and production-readiness audits. Apply when the user asks for a completeness review, launch-readiness review, brutal website critique, design-and-content audit, or production-readiness assessment.
---

# Website Completeness Review

Review the site as a launch decision, not as a style exercise. The goal is to determine whether the website is complete enough to ship, where it is incomplete, and what must change before launch.

For this project, prefer reviewing the running site first. If a local app is available, use it. If not, inspect the source under `app/`, `public/`, and any static preview artifacts in the repo.

## Review Standard

Be direct and evidence-based.

- Do not assume a section is complete because it exists.
- Do not stop at visual impressions; verify content, navigation, CTAs, and flows.
- Treat placeholder copy, weak trust signals, dead-end navigation, broken responsiveness, and thin feature explanation as real product issues.
- If a claim is made on the site, check whether the page actually supports it.
- If you cannot validate a behavior because the app was not run, say so explicitly.

## Review Workflow

1. Identify what can be reviewed.
   - Prefer the running site at its local URL.
   - If the site is not running, inspect the route structure and key page files.
   - Note whether the audit is based on live behavior, static code inspection, screenshots, or preview HTML files.
2. Map the visible surface area.
   - Home page
   - Primary navigation routes
   - Footer links
   - Contact, pricing, FAQ, docs, about, legal, or trust pages if present
   - Forms, modals, drawers, tables, and empty states
3. Walk the site as multiple personas.
   - First-time visitor
   - Potential customer
   - Existing customer
   - Enterprise buyer
4. Review the categories below and collect concrete evidence.
5. Report findings first, ordered by severity, then scores, then roadmap.

## Categories To Review

### 1. Overall Product Completeness

Check:

- Does the site feel finished?
- Are obvious sections missing?
- Is the core offering understandable?
- Does the user journey make sense?
- Does the site feel credible enough to launch?

Score out of 10.

### 2. Design Review

Check:

- Visual hierarchy
- Layout consistency
- Spacing system
- Typography quality and consistency
- Color usage and contrast
- Icon consistency
- Button and card consistency
- Form quality
- Navigation clarity
- Mobile responsiveness
- Accessibility issues visible from the UI
- Overall professionalism and enterprise readiness

Look specifically for:

- Inconsistent padding or margins
- Alignment drift
- Crowded sections
- Unused empty space
- Broken layouts
- Weak emphasis around primary actions
- Components that look unfinished or generic

### 3. Content Review

Review every meaningful copy block.

Check whether:

- Headlines communicate actual value
- Subheadings explain why the user should care
- CTAs are specific and persuasive
- Features are understandable
- Benefits are obvious
- Copy is repetitive, generic, overly technical, or AI-sounding
- Grammar, spelling, or placeholder text is present
- Important explanations are missing

When copy is weak, provide:

- Current issue
- Why it matters
- Suggested replacement copy

### 4. User Journey

For each persona, verify whether the site answers:

- What is this?
- Why should I care?
- Why is it different?
- Why should I trust it?
- What should I do next?

Call out every friction point and dead end.

### 5. Navigation Review

Check:

- Header
- Footer
- Menus
- Internal links
- Breadcrumbs if present
- Broken routes
- Missing pages
- Loops, dead ends, or confusing information architecture

### 6. CTA Review

Review every primary and secondary CTA.

Check:

- Visibility
- Wording quality
- Placement
- Relevance of destination
- Whether a stronger CTA should exist

### 7. Feature Completeness

For each promoted feature or capability, ask:

- Is it actually demonstrated?
- Is it explained clearly?
- Is there enough detail for a serious buyer?
- Is there proof, screenshot, workflow, or example?

### 8. Trust Signals

Check whether the site includes, or should include:

- Testimonials
- Case studies
- Customer logos
- FAQ
- Pricing or clear contact path
- Security or privacy messaging
- Privacy policy
- Terms
- Contact information
- Company or founder information
- Support information
- Documentation
- Social proof or proof of execution

### 9. Forms Review

For every form, check:

- Labels
- Validation
- Required field clarity
- Placeholder quality
- Error messages
- Success states
- Loading states
- Accessibility and keyboard usability

### 10. Empty and Error States

Look for:

- Empty tables or blank screens
- Missing no-data states
- Missing loading indicators or skeletons
- Weak error handling
- 404 and 500 page quality if visible

### 11. Microinteractions

Review:

- Hover states
- Button feedback
- Transitions and animation restraint
- Loading indicators
- Notifications
- Tooltips
- Dropdowns
- Modals and drawers
- Success and error messages

### 12. Consistency Audit

Check whether:

- Buttons match
- Cards match
- Radius, shadows, and borders are consistent
- Fonts and colors follow a system
- Forms and dialogs feel related

### 13. Performance Considerations

Flag likely issues such as:

- Oversized images
- Heavy sections above the fold
- Layout shifts
- Excessive animation
- Missing lazy loading
- Unnecessary complexity in initial screens

### 14. SEO Review

Check:

- Page titles
- Meta descriptions
- Heading hierarchy
- Image alt text
- Open Graph metadata
- Canonical URLs
- Internal linking

### 15. Enterprise Readiness

Decide whether an enterprise buyer would feel comfortable proceeding.

Review:

- Professionalism
- Clarity of offer
- Security/compliance messaging
- Support availability
- Documentation maturity
- Delivery confidence

### 16. Missing Pages

Identify missing but likely necessary pages, such as:

- Pricing
- About
- FAQ
- Privacy
- Terms
- Documentation
- Support
- Contact
- Security
- Integrations
- API docs
- Changelog or updates

## Severity Model

Use these buckets:

- `Critical`
  - Launch blocker, major credibility break, broken core flow, or severe content/UX gap that prevents real-world use.
- `High`
  - Important issue that materially weakens trust, conversion, clarity, or usability.
- `Medium`
  - Noticeable quality issue that should be fixed soon but does not by itself block launch.
- `Low`
  - Polish item or localized inconsistency.

## Output Format

Start with findings, not compliments.

### 1. Executive Verdict

- `Launch decision`: Ready / Not ready / Conditionally ready
- `Overall launch score`: out of 100
- One short paragraph explaining the decision

### 2. Findings

List issues ordered by severity. For each finding include:

- `Severity`
- `Area/Page`
- `Problem`
- `Why it matters`
- `Recommended fix`

Include file or route references when possible.

### 3. Category Scores

Provide scores for:

- Design
- Content
- UX
- Accessibility
- Enterprise readiness
- SEO
- Performance
- Trust
- Production readiness

### 4. Top Priorities

Provide:

- Top 20 issues to fix first
- Quick wins under 30 minutes
- Medium improvements in 1 to 2 hours
- Major improvements in 1 to 3 days
- Launch blockers

### 5. Implementation Roadmap

Give a prioritized roadmap grouped into:

- Immediate
- Short term
- Before launch

## Project-Specific Notes

This repository appears to be a Next.js website with routes under `app/`. When source inspection is required, start with:

- `app/` for pages, layouts, and route-level UI
- `public/` for imagery and social assets
- `lib/` for shared helpers that affect rendering or metadata
- preview HTML files in the repo when they represent alternative designs or incomplete work

If the site can be run locally, prefer validating:

- Desktop and mobile layouts
- Navigation paths
- Form states
- CTA destinations
- Metadata and social preview behavior when available

## Review Discipline

- Be brutally honest, but specific.
- Avoid vague statements like "needs polish" without evidence.
- Do not invent missing business requirements; infer only from what the site claims.
- If you could not inspect a route, form, or breakpoint, say so.
- If you did not run automated checks, say so.
