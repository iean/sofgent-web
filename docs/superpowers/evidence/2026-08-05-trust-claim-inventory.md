# Trust Claim Inventory

**Task:** `TASK-WLR-007`  
**Spec:** `SPEC-WLR-003`  
**Date:** `2026-08-05`  
**Status:** `Complete`

This inventory covers public marketing claims, not statutory language in the privacy policy or terms.
`Prove` means the claim should not remain as written without publishable evidence. `Soften` means the
underlying offer can remain with bounded language. `Remove` means the statement creates unnecessary
risk without adding credible value.

| Claim family | Representative locations | Classification | Required treatment |
|---|---|---|---|
| “0 critical launch bugs,” “zero-critical-bug guarantee,” “zero-bug launch guarantee” | `app/page.tsx`, `app/(pages)/projects/page.tsx`, `app/(pages)/how-we-build-saas/page.tsx`, `app/components/home/HeroSlider.tsx`, `app/components/services/ServicesHero.tsx` | Remove | Replace with a concrete launch-quality process: acceptance testing, monitored release, and post-launch defect response. |
| “>98% field-level accuracy” and “eliminates manual review” | `app/page.tsx` | Prove or soften | Publish a named benchmark, dataset, and measurement method; otherwise use “confidence-scored extraction with human review for exceptions.” |
| “Always production-grade,” “no tech debt,” and “no rewrite later” | `app/page.tsx` | Remove or soften | Describe included engineering controls instead of guaranteeing an unknowable future state. |
| Competitor comparison claims such as “often a demo,” “eventually,” and guaranteed superiority | `app/page.tsx` | Remove | Keep a factual comparison of engagement models only if each row is objectively defined and supportable. |
| “4–6 weeks” delivery | Site-wide metadata, homepage, services, product pages, header/footer | Soften | Present as a typical duration for tightly scoped engagements, not a universal delivery promise. Add dependency/scope qualification near the first prominent use. |
| “Fixed scope, fixed price” and “no surprise invoices” | Homepage, services, about, process pages | Keep with framing | Keep as the engagement model if reflected in contracts; clarify that approved scope changes are re-estimated before work continues. |
| “Written scope/timeline/price within 48 hours” | Metadata, services, contact, blog CTAs | Keep only as operational SLA | Confirm the team can meet it consistently; otherwise change to “typically within two business days.” |
| “100% client-owned code/IP,” “your repos and cloud,” “no lock-in” | Homepage FAQ, about, product development, custom software | Keep if contractual | Verify the services agreement covers full transfer after payment and clearly excludes third-party/open-source licenses. |
| “Senior team” and direct access to builders | About, homepage, services | Prove or soften | Add named team profiles/credentials, or use “lean delivery team with direct access to the people building the product.” |
| “Production-grade” | Site-wide | Keep with concrete framing | Pair with verifiable controls such as tests, monitoring, error handling, access controls, deployment ownership, and documentation. |
| “Measurable outcomes,” hours saved, or revenue unlocked | About and Projects | Prove | Link to approved case-study evidence; avoid implying a quantified outcome where the case study contains only capability statements. |

## Priority rewrite set

1. Remove every zero-bug/guarantee claim from the homepage, Projects, process page, and service hero.
2. Replace the homepage comparison table’s unsupported competitor assertions.
3. Replace the `>98%`/“eliminates manual review” pair with confidence-scored, human-in-the-loop language.
4. Qualify the first prominent `4–6 weeks` claim as a typical scoped engagement.
5. Confirm the 48-hour response promise and IP-transfer terms with the business owner before launch.

## Verification query

After rewrite work, search public code for:

```text
guarantee|guaranteed|zero.?bug|0 critical|>98%|eliminates manual|no tech debt|no rewrite|✓ Always
```

Any remaining match must either be non-marketing/legal context or linked to approved evidence.
