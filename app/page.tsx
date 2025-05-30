import ReactLenis from "lenis/react";
// import { servicesData } from "@/data/uslugi";
import Intro from "./components/Intro";
import CountUpComp from "./components/CountUpComp";
import Services from "./components/Services";
import BannerMinRight from "./components/BannerMinRight";
import History from "./components/History";
import GalleryComp from "./components/GalleryComp";
import BlogPostsHome from "./components/BlogPostsHome";
import OpinionComp from "./components/OpinionComp";
import FaqComp from "./components/FaqComp";

import { getHomepageData } from "@/lib/fetchHomeData";
import { getServicesPageData } from "@/lib/fetchUslugiData";
import JsonLd from "./components/JsonLd";
import { getSeoSchemaData } from "@/lib/getSeoSchemaData";

export const dynamic = "force-dynamic";

export default async function Home() {
  const schemaData = await getSeoSchemaData();
  const {
    homeData,
    servicesDataHome,
    countUpData,
    historyData,
    bannerDataHome,
    galleryData,
    BlogData,
    OpinionData,
    faqData,
  } = await getHomepageData();

  const { services } = await getServicesPageData();

  return (
    <ReactLenis root>
      <JsonLd data={schemaData} />
      <Intro data={homeData} />
      <Services uslugiData={services} data={servicesDataHome} />
      <CountUpComp
        years={countUpData.years}
        jobs={countUpData.jobs}
        clients={countUpData.clients}
      />
      <History data={historyData} />
      <BannerMinRight
        data={{
          header: bannerDataHome.bannerParagraph,
          image: bannerDataHome.bannerImage,
          alt: bannerDataHome.bannerImageAlt,
        }}
      />

      <GalleryComp data={galleryData} />
      <BlogPostsHome data={BlogData} />
      <OpinionComp data={OpinionData} />
      <FaqComp data={faqData} />
    </ReactLenis>
  );
}
