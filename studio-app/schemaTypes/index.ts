import { blogPostType } from "./documents/blogPost";
import { caseStudyType } from "./documents/caseStudy";
import { faqType } from "./documents/faq";
import { liveProjectType } from "./documents/liveProject";
import { pageType } from "./documents/page";
import { projectEntryType } from "./documents/projectEntry";
import { serviceType } from "./documents/service";
import { serviceCatalogPlacementType } from "./objects/serviceCatalogPlacement";

export const schemaTypes = [
  blogPostType,
  faqType,
  pageType,
  serviceCatalogPlacementType,
  serviceType,
  liveProjectType,
  projectEntryType,
  caseStudyType,
];
