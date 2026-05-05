export interface SharedFaqItem {
  section: string;
  order: number;
  question: string;
  answer: string;
}

export type HomeServiceIconKey = "database" | "layers" | "workflow";

export interface SharedHomeServiceItem {
  iconKey: HomeServiceIconKey;
  title: string;
  pitch: string;
  description: string;
  proof: string;
  tags: string[];
}

export interface SharedPortfolioItem {
  title: string;
  category: string;
  desc: string;
}

export interface SharedProcessItem {
  week: string;
  title: string;
  desc: string;
}

export interface SharedHomeSections {
  services: SharedHomeServiceItem[];
  portfolio: SharedPortfolioItem[];
  process: SharedProcessItem[];
}
