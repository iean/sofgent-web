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

const aiServiceBullets = [
  "AI implementation inside the systems your team already runs",
  "Document intelligence: OCR, extraction, validation, and review flows",
  "Workflow automation across CRM, ERP, payments, and internal tools",
  "AI integrations, knowledge systems, and internal business software",
];

const mvpSteps = [
  { step: "01", title: "Discovery", body: "Define the smallest valuable wedge and the operating constraint it solves." },
  { step: "02", title: "Architecture", body: "Set tenancy, auth, data model, integrations, and deployment path up front." },
  { step: "03", title: "Build", body: "Ship the customer-facing surface, admin workflow, and core API in focused sprints." },
  { step: "04", title: "Launch", body: "Deploy with monitoring, QA, and a handover path your team can own." },
];

export async function slide02(presentation, ctx) {
  const slide = presentation.slides.add();

  addBackground(ctx, slide, "right");
  addEyebrow(ctx, slide, "AI SERVICES + MVP DELIVERY", { x: 72, y: 56, w: 220 });
  addSectionTitle(ctx, slide, "AI service delivery built around operations, with MVP execution that can survive growth.", {
    x: 72,
    y: 102,
    w: 742,
    h: 88,
    fontSize: 29,
  });
  addBody(
    ctx,
    slide,
    "We focus on the systems that remove operating friction, ship product value fast, and give founders a production path instead of a rewrite path.",
    { x: 72, y: 186, w: 690, h: 58, fontSize: 15 },
  );

  addCard(ctx, slide, { x: 72, y: 258, w: 560, h: 290, fill: palette.panel, border: palette.whiteBorder });
  addSmallLabel(ctx, slide, "AI service scope", { x: 94, y: 280, w: 180 });
  addBulletList(ctx, slide, aiServiceBullets, { x: 96, y: 316, w: 500, itemGap: 54 });

  addCard(ctx, slide, { x: 658, y: 258, w: 550, h: 290, fill: "#0F1930", border: palette.whiteBorder });
  await ctx.addImage(slide, {
    path: deckAssets.studioBoard,
    x: 676,
    y: 276,
    w: 254,
    h: 216,
    fit: "cover",
    alt: "SofGent architecture planning board",
  });
  addSmallLabel(ctx, slide, "30-day MVP launch model", { x: 952, y: 280, w: 160 });

  mvpSteps.forEach((step, index) => {
    const y = 314 + index * 52;
    ctx.addText(slide, {
      text: step.step,
      x: 952,
      y,
      w: 36,
      h: 20,
      fontSize: 13,
      color: palette.cyan,
      bold: true,
      face: ctx.fonts.body,
    });
    ctx.addText(slide, {
      text: step.title,
      x: 992,
      y: y - 1,
      w: 130,
      h: 18,
      fontSize: 14,
      color: palette.text,
      bold: true,
      face: ctx.fonts.body,
    });
    ctx.addText(slide, {
      text: step.body,
      x: 992,
      y: y + 18,
      w: 186,
      h: 32,
      fontSize: 10,
      color: palette.muted,
      face: ctx.fonts.body,
    });
  });

  addCard(ctx, slide, { x: 72, y: 568, w: 1136, h: 76, fill: "#0E1930", border: palette.whiteBorder });
  const proof = [
    ["4 weeks", "first production AI workflow"],
    ["78%", "less manual document handling in sanitized delivery work"],
    ["Multi-tenant", "MVP architecture designed from day one"],
  ];
  proof.forEach(([value, label], index) => {
    const x = 104 + index * 352;
    ctx.addText(slide, {
      text: value,
      x,
      y: 588,
      w: 160,
      h: 22,
      fontSize: 22,
      color: palette.text,
      bold: true,
      face: ctx.fonts.title,
    });
    ctx.addText(slide, {
      text: label,
      x,
      y: 613,
      w: 248,
      h: 16,
      fontSize: 11,
      color: palette.muted,
      face: ctx.fonts.body,
    });
  });

  addFooterBand(ctx, slide, {
    y: 654,
    h: 46,
    title: "Best fit",
    body: "Startups, SMEs, and ops-heavy teams that need real software outcomes fast.",
    cta: "View case studies  |  sofgent.com/case-studies",
  });

  return slide;
}
