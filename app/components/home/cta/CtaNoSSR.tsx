import dynamic from "next/dynamic";

export const CtaNoSSR = dynamic(() => import("@components/home/cta"), {
  ssr: false,
});
