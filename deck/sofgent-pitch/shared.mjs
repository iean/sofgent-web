import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const ROOT_DIR = path.resolve(__dirname, "..", "..");

export const deckAssets = {
  logoWhite: path.join(ROOT_DIR, "app/assets/images/sofgent-logo-white.svg"),
  heroDashboard: path.join(ROOT_DIR, "public/images/home/sofgent-hero-dashboard.png"),
  studioBoard: path.join(ROOT_DIR, "public/images/about/studio-delivery-board.png"),
  strategyWorksheet: path.join(ROOT_DIR, "public/images/contact/strategy-call-worksheet.png"),
};

export const palette = {
  ink: "#050B18",
  panel: "#0B1324",
  panelSoft: "#111B31",
  panelAlt: "#15223B",
  text: "#F8FAFC",
  muted: "#A9B7D0",
  faint: "#6B7A92",
  cyan: "#22D3EE",
  teal: "#2DD4BF",
  emerald: "#34D399",
  border: "#20304E",
  whiteBorder: "#29405F",
};

export function addBackground(ctx, slide, accent = "left") {
  ctx.addShape(slide, {
    x: 0,
    y: 0,
    w: ctx.W,
    h: ctx.H,
    fill: palette.ink,
    line: ctx.line(palette.ink, 0),
  });

  ctx.addShape(slide, {
    x: accent === "right" ? 860 : 0,
    y: accent === "bottom" ? 320 : 0,
    w: accent === "right" ? 420 : 400,
    h: accent === "right" ? 420 : 400,
    geometry: "ellipse",
    fill: accent === "green" ? "#0D3A36" : "#0C3750",
    line: ctx.line("#0C3750", 0),
  });

  ctx.addShape(slide, {
    x: accent === "right" ? 760 : 780,
    y: accent === "bottom" ? 396 : 400,
    w: 380,
    h: 380,
    geometry: "ellipse",
    fill: "#0A233A",
    line: ctx.line("#0A233A", 0),
  });

  for (let x = 60; x < ctx.W; x += 96) {
    ctx.addShape(slide, {
      x,
      y: 0,
      w: 1,
      h: ctx.H,
      fill: "#12203A",
      line: ctx.line("#12203A", 0),
    });
  }

  for (let y = 48; y < ctx.H; y += 96) {
    ctx.addShape(slide, {
      x: 0,
      y,
      w: ctx.W,
      h: 1,
      fill: "#12203A",
      line: ctx.line("#12203A", 0),
    });
  }
}

export async function addLogo(ctx, slide, options = {}) {
  const { x = 72, y = 56, w = 220, h = 54 } = options;
  return ctx.addImage(slide, {
    path: deckAssets.logoWhite,
    x,
    y,
    w,
    h,
    fit: "contain",
    alt: "SofGent logo",
  });
}

export function addEyebrow(ctx, slide, text, options = {}) {
  const {
    x = 72,
    y = 128,
    w = 220,
    h = 28,
    fill = "#10233A",
    color = palette.cyan,
    border = palette.border,
  } = options;

  ctx.addShape(slide, {
    x,
    y,
    w,
    h,
    geometry: "roundRect",
    fill,
    line: ctx.line(border, 1.2),
  });

  ctx.addText(slide, {
    text,
    x: x + 14,
    y: y + 6,
    w: w - 28,
    h: h - 12,
    fontSize: 12,
    color,
    bold: true,
    face: ctx.fonts.body,
    valign: "mid",
  });
}

export function addHeadline(ctx, slide, text, options = {}) {
  const { x = 72, y = 176, w = 540, h = 170, fontSize = 30 } = options;
  ctx.addText(slide, {
    text,
    x,
    y,
    w,
    h,
    fontSize,
    color: palette.text,
    bold: true,
    face: ctx.fonts.title,
  });
}

export function addBody(ctx, slide, text, options = {}) {
  const { x = 72, y = 328, w = 520, h = 110, fontSize = 16, color = palette.muted } = options;
  ctx.addText(slide, {
    text,
    x,
    y,
    w,
    h,
    fontSize,
    color,
    face: ctx.fonts.body,
  });
}

export function addChip(ctx, slide, text, options = {}) {
  const { x, y, w = 154, h = 32, fill = palette.panelSoft, color = palette.text } = options;
  ctx.addShape(slide, {
    x,
    y,
    w,
    h,
    geometry: "roundRect",
    fill,
    line: ctx.line(palette.border, 1),
  });
  ctx.addText(slide, {
    text,
    x: x + 14,
    y: y + 8,
    w: w - 28,
    h: h - 16,
    fontSize: 12,
    color,
    bold: true,
    valign: "mid",
  });
}

export function addCard(ctx, slide, options = {}) {
  const {
    x,
    y,
    w,
    h,
    fill = palette.panel,
    border = palette.border,
  } = options;
  ctx.addShape(slide, {
    x,
    y,
    w,
    h,
    geometry: "roundRect",
    fill,
    line: ctx.line(border, 1.2),
  });
}

export function addMetricCard(ctx, slide, metric, options = {}) {
  const { x, y, w = 166, h = 92, valueFontSize = 26 } = options;
  addCard(ctx, slide, { x, y, w, h, fill: palette.panelSoft, border: palette.whiteBorder });
  ctx.addText(slide, {
    text: metric.value,
    x: x + 16,
    y: y + 18,
    w: w - 32,
    h: 34,
    fontSize: valueFontSize,
    color: palette.text,
    bold: true,
    face: ctx.fonts.title,
  });
  ctx.addText(slide, {
    text: metric.label,
    x: x + 16,
    y: y + 54,
    w: w - 32,
    h: 24,
    fontSize: 11,
    color: palette.muted,
    face: ctx.fonts.body,
  });
}

export function addBulletList(ctx, slide, items, options = {}) {
  const { x, y, w = 460, itemGap = 46, bulletColor = palette.cyan, textColor = palette.text } = options;
  items.forEach((item, index) => {
    const rowY = y + index * itemGap;
    ctx.addShape(slide, {
      x,
      y: rowY + 4,
      w: 10,
      h: 10,
      geometry: "ellipse",
      fill: bulletColor,
      line: ctx.line(bulletColor, 0),
    });
    ctx.addText(slide, {
      text: item,
      x: x + 22,
      y: rowY - 1,
      w: w - 22,
      h: 28,
      fontSize: 16,
      color: textColor,
      bold: true,
      face: ctx.fonts.body,
    });
  });
}

export function addCaption(ctx, slide, text, options = {}) {
  const { x, y, w, h = 24, color = palette.faint } = options;
  ctx.addText(slide, {
    text,
    x,
    y,
    w,
    h,
    fontSize: 11,
    color,
    bold: true,
    face: ctx.fonts.body,
  });
}

export function addFooterBand(ctx, slide, options = {}) {
  const { title, body, cta, x = 72, y = 626, w = 1136, h = 62 } = options;
  addCard(ctx, slide, {
    x,
    y,
    w,
    h,
    fill: "#0E1930",
    border: palette.whiteBorder,
  });
  ctx.addText(slide, {
    text: title,
    x: x + 22,
    y: y + 10,
    w: 420,
    h: 20,
    fontSize: 15,
    color: palette.text,
    bold: true,
    face: ctx.fonts.body,
  });
  ctx.addText(slide, {
    text: body,
    x: x + 22,
    y: y + 31,
    w: 650,
    h: 18,
    fontSize: 11,
    color: palette.muted,
    face: ctx.fonts.body,
  });
  ctx.addText(slide, {
    text: cta,
    x: x + 840,
    y: y + 16,
    w: 270,
    h: 22,
    fontSize: 13,
    color: palette.cyan,
    bold: true,
    face: ctx.fonts.body,
    align: "right",
  });
}

export function addSectionTitle(ctx, slide, title, options = {}) {
  const { x = 72, y = 96, w = 680, h = 60, fontSize = 28 } = options;
  ctx.addText(slide, {
    text: title,
    x,
    y,
    w,
    h,
    fontSize,
    color: palette.text,
    bold: true,
    face: ctx.fonts.title,
  });
}

export function addSmallLabel(ctx, slide, text, options = {}) {
  const { x, y, w = 160, h = 22, color = palette.cyan } = options;
  ctx.addText(slide, {
    text,
    x,
    y,
    w,
    h,
    fontSize: 11,
    color,
    bold: true,
    face: ctx.fonts.body,
  });
}
