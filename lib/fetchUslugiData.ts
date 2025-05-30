// --- FETCH + fallback: lib/getServicesPageData.ts ---
import { sanityClient as client } from "./sanityClient";
import { servicesData as localServicesData, uslugiData } from "@/data/uslugi";
// import { uslugiData } from "@/data/uslugi";

export type ServiceGalleryImage = {
  src: string;
  alt: string;
};

export type ServicesPageData = {
  introHeader: string;
  introParagraph: string;
  bgImage: string;
  bgAlt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  services: ServiceData[] | any;
};

export type ServiceData = {
  job: string;
  desc: string;
  introHeader: string;
  slug: string;
  icon: string;
  iconAlt: string;
  img: string;
  bgImgAlt: string;
  bgImage: string;
  bgAlt: string;
  how: string;
  howLong: string;
  howMuch: string;
  galleryImage: ServiceGalleryImage[];
};

export async function getServicesPageData(): Promise<ServicesPageData> {
  try {
    const result = await client.fetch(`
      *[_type == "servicesPage"][0]{
        introHeader,
        introParagraph,
        bgImage { asset->{url} },
        bgAlt,
        services[] {
          job,
          desc,
          introHeader,
          slug,
          icon { asset->{url} },
          iconAlt,
          img { asset->{url} },
          bgImage { asset->{url} },
          bgImgAlt,
          bgAlt,
          how,
          howLong,
          howMuch,
          galleryImage[] {
            asset->{url},
            alt
          }
        }
      }
    `);

    if (!result) throw new Error("Brak danych z Sanity");

    return {
      introHeader: result?.introHeader || uslugiData.introHeader,
      introParagraph: result?.introParagraph || uslugiData.introParagraph,
      bgImage: result?.bgImage?.asset?.url || uslugiData.bgImage,
      bgAlt: result?.bgAlt || uslugiData.bgAlt,
      services: (result?.services || localServicesData).map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (s: any, i: any) => {
          const fallback = localServicesData[i] || {};
          return {
            job: s.job || fallback.job || "",
            desc: s.desc || fallback.desc || "",
            introHeader: s.introHeader || fallback.introHeader || "",
            slug: s.slug?.current || fallback.slug || "",
            icon: s.icon?.asset?.url || fallback.icon || "",
            iconAlt: s.iconAlt || fallback.iconAlt || "",
            img: s.img?.asset?.url || fallback.img || "",
            bgImage: s.bgImage?.asset?.url || fallback.bgImage || "",
            bgImgAlt: s.bgImgAlt || fallback.bgImgAlt || "",
            bgAlt: s.bgAlt || fallback.bgAlt || "",
            how: s.how || fallback.how || "",
            howLong: s.howLong || fallback.howLong || "",
            howMuch: s.howMuch || fallback.howMuch || "",
            galleryImage: (s.galleryImage || fallback.galleryImage || []).map(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (img: any) => ({
                src: img.asset?.url || img.src || "",
                alt: img.alt || "",
              })
            ),
          };
        }
      ),
    };
  } catch (err) {
    console.warn("Sanity fetch failed, użyto danych lokalnych:", err);
    return {
      introHeader: uslugiData.introHeader,
      introParagraph: uslugiData.introParagraph,
      bgImage: uslugiData.bgImage,
      bgAlt: uslugiData.bgAlt,
      services: localServicesData,
    };
  }
}
