import { getLiveProjectBySlug, getLiveProjectSlugs } from "@/lib/sanity/content";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const slugs = await getLiveProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = await getLiveProjectBySlug(slug);

  if (!project) {
    return { title: "Live project | SofGent" };
  }

  const image = project.imageUrl || "/opengraph-image";

  return {
    title: `${project.title} | SofGent live work`,
    description: project.description,
    alternates: { canonical: `https://www.sofgent.com/live-projects/${slug}` },
    openGraph: {
      type: "article",
      url: `https://www.sofgent.com/live-projects/${slug}`,
      title: project.title,
      description: project.description,
      images: [{ url: image, alt: project.imageAlt || project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [image],
    },
  };
}

export default async function LiveProjectDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getLiveProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#f7f8f7] text-[#0c0c0c]">
      <section className="border-b border-[#e6e6e6] bg-white">
        <div className="max-w-[1140px] mx-auto px-6 md:px-8 py-14 md:py-20">
          <Link href="/#live-projects" className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#326d6d] mb-8 hover:opacity-75">
            <span aria-hidden="true">←</span> Live client work
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                <span className="text-[11px] font-bold tracking-[0.09em] uppercase text-[#22a34a]">Live project</span>
                <span className="text-[11px] font-semibold text-[#7a7a7a]">· {project.eyebrow}</span>
              </div>
              <h1 className="font-bold tracking-[-0.045em] leading-[1.03] mb-5" style={{ fontSize: "clamp(36px,5vw,62px)" }}>
                {project.title}
              </h1>
              <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#5f5f5f] mb-7 max-w-[650px]">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {project.websiteUrl ? (
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-[10px] bg-[#326d6d] px-5 py-3 text-[13px] font-bold text-white hover:bg-[#285b5b] transition-colors">
                    Visit live website <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
                <span className="rounded-[10px] border border-[#dedede] bg-white px-4 py-3 text-[12px] font-semibold text-[#5f5f5f]">
                  {project.relationship}
                </span>
              </div>
            </div>
            <div className="rounded-[18px] overflow-hidden border border-[#dedede] bg-[#e9efef] shadow-[0_24px_70px_rgba(22,55,55,0.12)]">
              <img src={project.imageUrl} alt={project.imageAlt || project.title} className="w-full aspect-[16/10] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1140px] mx-auto px-6 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-8">
          <div className="rounded-[16px] border border-[#e2e2e2] bg-white p-7 md:p-9">
            <p className="text-[11px] font-bold tracking-[0.09em] uppercase text-[#326d6d] mb-3">About the live product</p>
            <p className="text-[16px] leading-[1.8] text-[#555]">{project.overview}</p>
          </div>
          <aside className="rounded-[16px] border border-[#d7e5e5] bg-[#eef5f4] p-7 md:p-8">
            <p className="text-[11px] font-bold tracking-[0.09em] uppercase text-[#326d6d] mb-3">SofGent relationship</p>
            <h2 className="text-[20px] font-bold tracking-[-0.02em] mb-3">{project.relationship}</h2>
            {project.supportScope ? <p className="text-[14px] leading-[1.7] text-[#4f6666]">{project.supportScope}</p> : null}
          </aside>
        </div>

        {(project.highlights?.length || project.technologies?.length) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {project.highlights?.length ? (
              <div className="rounded-[16px] border border-[#e2e2e2] bg-white p-7 md:p-8">
                <h2 className="text-[18px] font-bold mb-5">Live proof</h2>
                <div className="flex flex-wrap gap-3">
                  {project.highlights.map((highlight) => (
                    <div key={`${highlight.value}-${highlight.label}`} className="rounded-[10px] border border-[#d7e5e5] bg-[#f4f8f8] px-4 py-3">
                      <div className="text-[16px] font-bold text-[#326d6d]">{highlight.value}</div>
                      <div className="text-[11px] text-[#587070]">{highlight.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            {project.technologies?.length ? (
              <div className="rounded-[16px] border border-[#e2e2e2] bg-white p-7 md:p-8">
                <h2 className="text-[18px] font-bold mb-5">Technology and capabilities</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-[#e2e2e2] bg-[#f7f7f7] px-3 py-1.5 text-[12px] font-medium text-[#5f5f5f]">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </section>
    </main>
  );
}
