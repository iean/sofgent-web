import type { LucideIcon } from "lucide-react";
import {
   BadgeCheck,
   Banknote,
   BookText,
   BrainCircuit,
   Braces,
   FileImage,
   FileJson,
   FileSearch,
   FileUp,
   LayoutDashboard,
   ScanSearch,
   ShieldCheck,
   Workflow,
} from "lucide-react";

export interface IconCardItem {
   title: string;
   description: string;
   icon: LucideIcon;
}

export interface PipelineStepItem extends IconCardItem {
   step: string;
}

export const problemPoints: IconCardItem[] = [
   {
      title: "Manual data entry",
      description:
         "Teams keep retyping document fields into internal systems, which slows operations and creates avoidable cost.",
      icon: FileUp,
   },
   {
      title: "PDFs and images not usable",
      description:
         "Critical business information is trapped in scans, PDFs, photos, and attachments that applications cannot directly work with.",
      icon: FileImage,
   },
   {
      title: "Errors in processing",
      description:
         "Inconsistent extraction, missing fields, and human mistakes create unreliable downstream workflows.",
      icon: ShieldCheck,
   },
   {
      title: "Slow workflows",
      description:
         "Approval flows, onboarding, reporting, and verification processes all stall when documents need manual review at every step.",
      icon: Workflow,
   },
];

export const pipelineSteps: PipelineStepItem[] = [
   {
      step: "01",
      title: "Document Upload",
      description:
         "Ingest PDFs, images, scans, forms, and multi-page files from user uploads, inboxes, or internal systems.",
      icon: FileUp,
   },
   {
      step: "02",
      title: "OCR Processing",
      description:
         "Convert image-based and scanned documents into machine-readable text with layout-aware OCR pipelines.",
      icon: ScanSearch,
   },
   {
      step: "03",
      title: "AI Extraction",
      description:
         "Extract target fields, entities, line items, and business attributes using rules plus AI-assisted parsing.",
      icon: BrainCircuit,
   },
   {
      step: "04",
      title: "Validation Layer",
      description:
         "Apply confidence scoring, business rules, and review workflows before data is accepted downstream.",
      icon: BadgeCheck,
   },
   {
      step: "05",
      title: "Structured Output",
      description:
         "Deliver clean JSON, API responses, or database-ready records that can feed operations and products.",
      icon: FileJson,
   },
];

export const features: IconCardItem[] = [
   {
      title: "OCR across multiple formats",
      description:
         "Support scanned PDFs, images, forms, and mixed-format document inputs in one workflow.",
      icon: ScanSearch,
   },
   {
      title: "Data extraction for real documents",
      description:
         "Extract fields from forms, invoices, KYC documents, and business paperwork with production-minded pipelines.",
      icon: FileSearch,
   },
   {
      title: "Validation rules",
      description:
         "Use schema checks, business rules, and confidence thresholds to reduce bad outputs before they hit your systems.",
      icon: ShieldCheck,
   },
   {
      title: "Workflow automation",
      description:
         "Route documents, trigger actions, and move data into downstream systems without manual handoffs.",
      icon: Workflow,
   },
];

export const deliverables: IconCardItem[] = [
   {
      title: "Structured JSON output",
      description:
         "Normalized extracted data your applications, dashboards, and automations can consume immediately.",
      icon: FileJson,
   },
   {
      title: "Admin dashboard",
      description:
         "A review layer for monitoring extraction quality, validating edge cases, and managing workflows.",
      icon: LayoutDashboard,
   },
   {
      title: "APIs",
      description:
         "Reliable endpoints for document ingestion, extraction results, and system integration.",
      icon: Braces,
   },
   {
      title: "Automation workflows",
      description:
         "Rules and routing logic that move documents through processing, validation, and business actions.",
      icon: Workflow,
   },
];

export const useCases: IconCardItem[] = [
   {
      title: "Bank documents",
      description:
         "Extract and structure fields from statements, forms, and financial onboarding documents.",
      icon: Banknote,
   },
   {
      title: "KYC verification",
      description:
         "Process IDs, proofs, and verification documents faster with extraction and review workflows.",
      icon: BadgeCheck,
   },
   {
      title: "Invoice processing",
      description:
         "Capture line items, totals, vendors, and dates without manual re-entry.",
      icon: FileSearch,
   },
   {
      title: "Internal document systems",
      description:
         "Turn operational documents into searchable, structured records for internal teams and products.",
      icon: BookText,
   },
];

export const differentiators: IconCardItem[] = [
   {
      title: "Already built real OCR systems",
      description:
         "SofGent has shipped document processing systems where extraction quality and operational reliability actually matter.",
      icon: ScanSearch,
   },
   {
      title: "Production-grade pipelines",
      description:
         "We build processing, validation, and review layers that work in real workflows, not shallow demos.",
      icon: Workflow,
   },
   {
      title: "Handles scale and edge cases",
      description:
         "From messy scans to confidence thresholds and exception handling, we design for operational reality from day one.",
      icon: ShieldCheck,
   },
];
