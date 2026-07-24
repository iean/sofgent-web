Perform a complete production-readiness review of this website.

Your objective is not to judge visual beauty alone, but to determine whether the website is complete enough to launch.

Review the running site first when possible. If the site is not running, inspect the source and any static preview artifacts in the repository. State clearly what evidence your review is based on.

Review every page, component, and interaction you can access.

Use this structure:

1. Executive verdict
- Launch decision: Ready, Not ready, or Conditionally ready
- Overall launch score out of 100
- One short paragraph explaining the verdict

2. Findings
- List issues first, ordered by severity: Critical, High, Medium, Low
- For each finding include:
  - Area or page
  - Problem
  - Why it matters
  - Recommended fix
  - Replacement copy when the issue is content-related

3. Review categories
- Overall product completeness
- Design review
- Content review
- User journey for:
  - First-time visitor
  - Potential customer
  - Existing customer
  - Enterprise buyer
- Navigation review
- CTA review
- Feature completeness
- Trust signals
- Forms review
- Empty and error states
- Microinteractions
- Consistency audit
- Performance considerations
- SEO review
- Enterprise readiness
- Missing pages

4. Scores
- Design
- Content
- UX
- Accessibility
- Enterprise readiness
- SEO
- Performance
- Trust
- Production readiness

5. Prioritized action plan
- Top 20 issues to fix first
- Quick wins under 30 minutes
- Medium improvements in 1 to 2 hours
- Major improvements in 1 to 3 days
- Launch blockers
- Prioritized implementation roadmap

Review standard:

- Be brutally honest and evidence-based
- Do not assume a section is complete because it exists
- Treat placeholder copy, weak trust, dead-end navigation, poor CTA clarity, and thin feature explanation as real issues
- If a claim is made on the site, check whether the page actually supports it
- If you could not validate a route, form, or breakpoint, say so explicitly

Project hints:

- Routes are primarily under `app/`
- Shared rendering helpers may be under `lib/`
- Static assets are under `public/`
- Preview HTML files in the repo may represent unfinished or alternative designs
