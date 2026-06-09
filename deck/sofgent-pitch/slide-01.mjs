import {
  addBackground,
  addBody,
  addChip,
  addEyebrow,
  addFooterBand,
  addHeadline,
  addLogo,
  addMetricCard,
  addCard,
  addCaption,
  deckAssets,
  palette,
} from "./shared.mjs";

export async function slide01(presentation, ctx) {
  const slide = presentation.slides.add();

  addBackground(ctx, slide, "left");
  await addLogo(ctx, slide);
  addEyebrow(ctx, slide, "SOFGENT AI PRODUCT STUDIO", { y: 134, w: 236 });
  addHeadline(ctx, slide, "Build AI systems, SaaS MVPs, and delivery capacity fast.", {
    y: 186,
    w: 530,
    h: 170,
    fontSize: 34,
  });
  addBody(
    ctx,
    slide,
    "SofGent helps startups and SMEs ship AI-powered services, production-ready MVPs, and embedded engineering support without long vendor cycles or fragile builds.",
    { y: 354, w: 520, h: 92, fontSize: 17 },
  );

  addChip(ctx, slide, "AI Services", { x: 72, y: 458, w: 124 });
  addChip(ctx, slide, "SaaS MVP Delivery", { x: 206, y: 458, w: 164 });
  addChip(ctx, slide, "Augmented Teams", { x: 380, y: 458, w: 158 });

  addMetricCard(ctx, slide, { value: "2-6 weeks", label: "typical first delivery window" }, { x: 72, y: 512 });
  addMetricCard(ctx, slide, { value: "Weekly", label: "working demos and sprint feedback" }, { x: 250, y: 512 });
  addMetricCard(
    ctx,
    slide,
    { value: "Arch-first", label: "scope, data, and deployment planned early" },
    { x: 428, y: 512, w: 186, valueFontSize: 22 },
  );

  addCard(ctx, slide, {
    x: 690,
    y: 104,
    w: 520,
    h: 488,
    fill: "#0C162A",
    border: palette.whiteBorder,
  });
  await ctx.addImage(slide, {
    path: deckAssets.heroDashboard,
    x: 706,
    y: 120,
    w: 488,
    h: 456,
    fit: "cover",
    alt: "SofGent AI product studio dashboard",
  });
  addCaption(ctx, slide, "AI services, product workflows, and delivery operations in one execution model.", {
    x: 724,
    y: 536,
    w: 438,
  });

  addFooterBand(ctx, slide, {
    title: "Free consultation",
    body: "AI workflow audit, MVP scoping, and delivery recommendation.",
    cta: "support@sofgent.com  |  calendly.com/sofgent",
  });

  return slide;
}
