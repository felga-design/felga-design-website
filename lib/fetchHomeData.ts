import { sanityClient as client } from "./sanityClient";
import {
  BlogData as BlogDataLocal,
  faqData as faqDataLocal,
  homeData as homeDataLocal,
  OpinionData as OpinionDataLocal,
  servicesDataHome as servicesDataHomeLocal,
  countUpData as countUpDataLocal,
  historyData as historyDataLocal,
  galleryData as galleryDataLocal,
} from "@/data/homepage";

export async function getHomepageData() {
  try {
    const sanityData = await client.fetch(`
      *[_type == "homepage"][0]{
        homeData{
          metaTitle,
          metaDesc,
          metaImage{asset->{url}},
          introHeader,
          introParagraph,
          buttonOne,
          buttonOneHref,
          buttonTwo,
          buttonTwoHref,
          bgImages[]{
            alt,
            src{asset->{url}}
          }
        },
        servicesDataHome{
          servicesHeader,
          servicesParagraph,
          servicesButtonText,
          servicesImage{asset->{url}},
          servicesImageAlt
        },
        countUpData{
          years,
          jobs,
          clients
        },
        historyData{
          historyHeader,
          historyImage{asset->{url}},
          historyImageAlt,
          historyImage2{asset->{url}},
          historyImage2Alt,
          yearsData[]{
            id,
            year,
            paragraph
          }
        },
         bannerDataHome{
          bannerParagraph,
          bannerImage{asset->{url}},
          bannerImageAlt
        },
        galleryData{
          galleryHeader,
          galleryParagraph,
          galleryButtonText,
          galleryImage[]{
            alt,
            src{asset->{url}}
          }
        },
        BlogData{
          blogHeader,
          blogParagraph,
          blogButtonText
        },
        OpinionData{
          opinionHeader,
          opinionParagraph
        },
        faqData{
          faqHeader,
          faqParagraph,
          faqs[]{
            question,
            answer
          }
        }
      }
    `);

    return {
      homeData: sanitizeImages(sanityData?.homeData) || homeDataLocal,
      servicesDataHome:
        sanitizeImages(sanityData?.servicesDataHome) || servicesDataHomeLocal,
      countUpData: sanityData?.countUpData || countUpDataLocal,
      historyData: sanitizeImages(sanityData?.historyData) || historyDataLocal,
      bannerDataHome: sanitizeImages(sanityData?.bannerDataHome || ""),
      galleryData: sanitizeImages(sanityData?.galleryData) || galleryDataLocal,
      BlogData: sanityData?.BlogData || BlogDataLocal,
      OpinionData: sanityData?.OpinionData || OpinionDataLocal,
      faqData: sanityData?.faqData || faqDataLocal,
    };
  } catch (err) {
    console.error("Błąd pobierania danych z Sanity:", err);
    return {
      homeData: homeDataLocal,
      servicesDataHome: servicesDataHomeLocal,
      countUpData: countUpDataLocal,
      historyData: historyDataLocal,
      galleryData: galleryDataLocal,
      BlogData: BlogDataLocal,
      OpinionData: OpinionDataLocal,
      faqData: faqDataLocal,
    };
  }
}

// Zamiana src.asset.url na src + alt → żeby komponenty mogły działać tak samo jak z lokalnych danych
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sanitizeImages(obj: any): any {
  if (!obj) return obj;
  const newObj = JSON.parse(JSON.stringify(obj));
  for (const key in newObj) {
    if (Array.isArray(newObj[key])) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      newObj[key] = newObj[key].map((el: any) => sanitizeImages(el));
    } else if (typeof newObj[key] === "object" && newObj[key]?.asset?.url) {
      newObj[key] = newObj[key].asset.url;
    } else if (typeof newObj[key] === "object") {
      newObj[key] = sanitizeImages(newObj[key]);
    }
  }
  return newObj;
}
