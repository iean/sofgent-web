import test from "node:test";
import assert from "node:assert/strict";
import { DiscoverySchema } from "../lib/schemas/contact.ts";

test("discovery submissions require a reply email", () => {
  const result = DiscoverySchema.safeParse({
    name: "Jane Founder",
    company: "Acme AI",
    timeline: "4 weeks",
    productIdea: "We need an AI workflow for operations and onboarding.",
    website: "",
  });

  assert.equal(result.success, false);
});

test("discovery submissions accept a valid reply email", () => {
  const result = DiscoverySchema.safeParse({
    name: "Jane Founder",
    email: "jane@acme.ai",
    company: "Acme AI",
    timeline: "4 weeks",
    productIdea: "We need an AI workflow for operations and onboarding.",
    website: "",
  });

  assert.equal(result.success, true);
});
