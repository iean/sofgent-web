import {
  addBackground,
  addBody,
  addBulletList,
  addCard,
  addCaption,
  addEyebrow,
  addFooterBand,
  addSectionTitle,
  addSmallLabel,
  deckAssets,
  palette,
} from "./shared.mjs";

const augmentedTeamBullets = [
  "Unblock architecture, integrations, or AI implementation without hiring a full internal squad first.",
  "Embed with founders, CTOs, or product teams for 30-90 day delivery pushes.",
  "Own sprint execution, weekly demos, and handoff so internal teams do not inherit chaos.",
];

const podCards = [
  ["Tech lead / architect", "System boundaries, solution design, delivery direction"],
  ["Full-stack engineer", "App surface, APIs, auth, billing, and product workflows"],
  ["AI / integration engineer", "Automation, OCR, RAG, partner APIs, and orchestration"],
  ["QA / DevOps support", "Release checks, environments, observability, and stabilization"],
];

export async function slide03(presentation, ctx) {
  const slide = presentation.slides.add();

  addBackground(ctx, slide, "green");
  addEyebrow(ctx, slide, "AUGMENTED TEAMS", { x: 72, y: 56, w: 164, fill: "#0E2A28", color: palette.emerald });
  addSectionTitle(ctx, slide, "Augmented teams for delivery spikes, modernization work, and AI execution capacity.", {
    x: 72,
    y: 106,
    w: 680,
    h: 88,
    fontSize: 29,
  });
  addBody(
    ctx,
    slide,
    "When your internal team needs senior execution without the overhead of full-time hiring, SofGent can operate as an embedded build pod focused on speed, architecture quality, and dependable handoff.",
    { x: 72, y: 192, w: 620, h: 72, fontSize: 15 },
  );

  addCard(ctx, slide, { x: 72, y: 286, w: 470, h: 274, fill: palette.panel, border: palette.whiteBorder });
  addSmallLabel(ctx, slide, "When to use us", { x: 96, y: 308, w: 140, color: palette.emerald });
  addBulletList(ctx, slide, augmentedTeamBullets, {
    x: 96,
    y: 344,
    w: 410,
    itemGap: 66,
    bulletColor: palette.emerald,
  });

  addCard(ctx, slide, { x: 566, y: 286, w: 642, h: 274, fill: "#0F1930", border: palette.whiteBorder });
  addSmallLabel(ctx, slide, "Typical delivery pod", { x: 592, y: 308, w: 150 });
  podCards.forEach(([title, body], index) => {
    const cardX = 592 + (index % 2) * 298;
    const cardY = 338 + Math.floor(index / 2) * 102;
    addCard(ctx, slide, { x: cardX, y: cardY, w: 274, h: 84, fill: palette.panelSoft, border: palette.border });
    ctx.addText(slide, {
      text: title,
      x: cardX + 16,
      y: cardY + 14,
      w: 236,
      h: 18,
      fontSize: 13,
      color: palette.text,
      bold: true,
      face: ctx.fonts.body,
    });
    ctx.addText(slide, {
      text: body,
      x: cardX + 16,
      y: cardY + 38,
      w: 236,
      h: 30,
      fontSize: 10,
      color: palette.muted,
      face: ctx.fonts.body,
    });
  });

  await ctx.addImage(slide, {
    path: deckAssets.strategyWorksheet,
    x: 72,
    y: 584,
    w: 218,
    h: 46,
    fit: "cover",
    alt: "SofGent strategy and architecture call worksheet",
  });
  addCaption(ctx, slide, "Embedded delivery works best when architecture, build, and operating constraints are reviewed together.", {
    x: 306,
    y: 592,
    w: 410,
  });

  addCard(ctx, slide, { x: 760, y: 578, w: 448, h: 58, fill: "#0E1930", border: palette.whiteBorder });
  ctx.addText(slide, {
    text: "2-5 contributors",
    x: 786,
    y: 592,
    w: 150,
    h: 22,
    fontSize: 24,
    color: palette.text,
    bold: true,
    face: ctx.fonts.title,
  });
  ctx.addText(slide, {
    text: "Typical embedded pod size depending on architecture, AI, frontend, and integration scope.",
    x: 786,
    y: 614,
    w: 188,
    h: 16,
    fontSize: 10,
    color: palette.muted,
    face: ctx.fonts.body,
  });
  ctx.addText(slide, {
    text: "30-90 day sprints",
    x: 1000,
    y: 592,
    w: 150,
    h: 22,
    fontSize: 24,
    color: palette.text,
    bold: true,
    face: ctx.fonts.title,
  });
  ctx.addText(slide, {
    text: "Weekly demos, direct Slack coordination, and a handoff plan when the sprint ends.",
    x: 1000,
    y: 614,
    w: 178,
    h: 16,
    fontSize: 10,
    color: palette.muted,
    face: ctx.fonts.body,
  });

  addFooterBand(ctx, slide, {
    title: "Next step",
    body: "Start with a free architecture review, AI workflow audit, or MVP scoping call.",
    cta: "support@sofgent.com  |  sofgent.com/contact",
  });

  return slide;
}
