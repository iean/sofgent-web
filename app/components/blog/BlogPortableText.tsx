import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import type { PortableTextBlock } from "sanity";
import { urlFor } from "@/lib/sanity/image";

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 text-3xl font-bold tracking-tight text-slate-950">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 text-2xl font-semibold tracking-tight text-slate-900">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mt-5 text-lg leading-8 text-slate-700">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-8 rounded-[1.5rem] border border-cyan-100 bg-cyan-50/70 px-6 py-5 text-lg italic text-slate-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-6 list-decimal space-y-3 pl-6 text-lg leading-8 text-slate-700">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const external = href.startsWith("http");

      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="font-semibold text-cyan-700 underline decoration-cyan-300 underline-offset-4 transition-colors hover:text-cyan-600"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-950">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="rounded-md bg-slate-100 px-2 py-1 text-[0.95em] text-slate-900">
        {children}
      </code>
    ),
  },
  types: {
    image: ({ value }) => {
      const imageUrl = value ? urlFor(value).width(1600).fit("max").url() : "";

      if (!imageUrl) {
        return null;
      }

      return (
        <figure className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
          <Image
            src={imageUrl}
            alt={value?.alt || "Blog illustration"}
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
          />
          {value?.caption ? (
            <figcaption className="px-5 py-4 text-sm text-slate-500">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
};

export default function BlogPortableText({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return <PortableText value={value} components={portableTextComponents} />;
}
