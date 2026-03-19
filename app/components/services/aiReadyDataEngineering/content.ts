import type { LucideIcon } from "lucide-react";
import {
   BarChart3,
   Bot,
   BrainCircuit,
   Clock3,
   Database,
   FileText,
   Files,
   Layers3,
   Rocket,
   Search,
   Sparkles,
   Webhook,
   Workflow,
} from "lucide-react";

export interface IconCardItem {
   title: string;
   description: string;
   icon: LucideIcon;
}

export interface ProcessStepItem extends IconCardItem {
   step: string;
}

export const problemPoints: IconCardItem[] = [
   {
      title: "Data scattered across tools",
      description:
         "Customer records, spreadsheets, documents, and app events live in separate systems with no dependable source of truth.",
      icon: Files,
   },
   {
      title: "No structure for AI",
      description:
         "Messy schemas, missing metadata, and inconsistent fields make your data difficult to search, retrieve, or reason over with AI.",
      icon: Layers3,
   },
   {
      title: "Manual reporting",
      description:
         "Teams keep exporting CSVs, cleaning data by hand, and rebuilding the same dashboards every reporting cycle.",
      icon: FileText,
   },
   {
      title: "Poor decision making",
      description:
         "Leadership ends up working from delayed or conflicting numbers, which slows execution and creates avoidable risk.",
      icon: BarChart3,
   },
];

export const processSteps: ProcessStepItem[] = [
   {
      step: "01",
      title: "Data Audit",
      description:
         "We map your current sources, data quality issues, reporting gaps, and the business questions the system needs to support.",
      icon: Search,
   },
   {
      step: "02",
      title: "Data Structuring & Schema Design",
      description:
         "We normalize entities, define schemas, add metadata, and shape the data model around analytics, automation, and AI use cases.",
      icon: Layers3,
   },
   {
      step: "03",
      title: "Pipeline & Storage Setup",
      description:
         "We implement ingestion, transformations, and storage across relational databases, warehouses, and vector infrastructure where needed.",
      icon: Database,
   },
   {
      step: "04",
      title: "AI Readiness Layer",
      description:
         "We add APIs, retrieval patterns, and documentation so your data can power assistants, automation flows, and AI products.",
      icon: Sparkles,
   },
];

export const deliverables: IconCardItem[] = [
   {
      title: "Clean structured datasets",
      description:
         "Normalized records, mapped entities, and metadata your team can actually trust.",
      icon: Layers3,
   },
   {
      title: "Data pipelines",
      description:
         "Reliable ingestion and transformation flows across files, apps, and databases.",
      icon: Workflow,
   },
   {
      title: "APIs",
      description:
         "Consistent access layers for products, dashboards, internal tools, and integrations.",
      icon: Webhook,
   },
   {
      title: "AI-ready storage",
      description:
         "Relational and vector-ready storage designed for retrieval, search, and automation.",
      icon: Database,
   },
   {
      title: "Documentation",
      description:
         "Schemas, data dictionaries, and implementation notes that reduce future confusion.",
      icon: FileText,
   },
];

export const useCases: IconCardItem[] = [
   {
      title: "Analytics dashboards",
      description:
         "Build reporting on top of a structured data backbone instead of fragile spreadsheet workflows.",
      icon: BarChart3,
   },
   {
      title: "AI assistants",
      description:
         "Give internal or customer-facing assistants access to clean, queryable business data.",
      icon: Bot,
   },
   {
      title: "Automation systems",
      description:
         "Trigger routing, decisions, and workflows from structured data instead of manual handoffs.",
      icon: Workflow,
   },
   {
      title: "Reporting systems",
      description:
         "Generate recurring reports faster, with less cleanup and fewer conflicting numbers.",
      icon: FileText,
   },
];

export const differentiators: IconCardItem[] = [
   {
      title: "AI-first approach",
      description:
         "We do not stop at tidy databases. We shape the data foundation around how AI systems will actually use it.",
      icon: BrainCircuit,
   },
   {
      title: "MVP to production pipeline",
      description:
         "We build the first usable version fast, then harden the architecture so it can support real growth.",
      icon: Rocket,
   },
   {
      title: "Deep experience in document + structured data",
      description:
         "SofGent brings hands-on experience across document processing, knowledge systems, and structured operational data.",
      icon: Files,
   },
   {
      title: "Fast delivery",
      description:
         "We focus on the shortest path to a reliable data foundation, without dragging the project into months of overengineering.",
      icon: Clock3,
   },
];
