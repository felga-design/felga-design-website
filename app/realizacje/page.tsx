import { realizacjeDataPage } from "@/data/realizacje";
import RealizacjeComp from "../components/RealizacjeComp";
import { realizacjeData } from "@/data/realizacje";
import ReactLenis from "lenis/react";
import IntroSmall from "../components/InstroSmall";
import { Metadata } from "next";

import { sanityClient } from "@/lib/sanityClient";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const result = await sanityClient.fetch(`
      *[_type == "realizacjePage"][0]{
        introHeader,
        introParagraph,
        bgImage {
          asset->{url}
        }
      }
    `);

    const title =
      result?.introHeader || "Realizacje – Przed i Po | Felga Design";
    const description =
      result?.introParagraph ||
      "Zobacz efekty naszej pracy. Renowacja felg i inne realizacje – zdjęcia przed i po.";
    const image = result?.bgImage?.asset?.url || "/1.jpeg";

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: "https://felgadesign.pl/realizacje",
        images: [image],
      },
      twitter: {
        title,
        description,
        images: [image],
      },
    };
  } catch (err) {
    console.warn("Sanity fetch error in generateMetadata:", err);
    return {
      title: "Realizacje – Felga Design",
      description: "Zobacz nasze realizacje przed i po regeneracji felg.",
      openGraph: {
        title: "Realizacje – Felga Design",
        description: "Zobacz nasze realizacje przed i po regeneracji felg.",
        url: "https://felgadesign.pl/realizacje",
        images: ["/1.jpeg"],
      },
      twitter: {
        title: "Realizacje – Felga Design",
        description: "Zobacz nasze realizacje przed i po regeneracji felg.",
        images: ["/1.jpeg"],
      },
    };
  }
}

export const dynamic = "force-dynamic";

export default async function Kolory() {
  let sanityPageData = null;

  try {
    const result = await sanityClient.fetch(`
      *[_type == "realizacjePage"][0]{
        introHeader,
        introParagraph,
        bgImage {
          asset->{url}
        },
        bgAlt,
        colors[] {
          title,
          description,
          image {
            "src": asset->url,
            "alt": coalesce(@.alt, "")
          },
          imageAfter {
            "src": asset->url,
            "alt": coalesce(@.alt, "")
          },
          category-> {
            title,
            slug
          }
        }
      }
    `);

    if (result) {
      sanityPageData = {
        introHeader: result.introHeader,
        introParagraph: result.introParagraph,
        bgImage: result.bgImage?.asset?.url || "/2.jpeg",
        bgAlt: result.bgAlt,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        colors: result.colors?.map((el: any) => ({
          title: el.title,
          description: el.description,
          image: {
            src: el.image?.src || "/2.jpeg",
            alt: el.image?.alt || "",
          },
          imageAfter: {
            src: el.imageAfter?.src || "/2.jpeg",
            alt: el.imageAfter?.alt || "",
          },
          categorySlug: el.category?.slug?.current || "brak-kategorii",
          categoryName: el.category?.title || "Brak kategorii",
        })),
      };
    }
  } catch (err) {
    console.warn("Sanity fetch failed:", err);
  }

  const pageData = sanityPageData
    ? {
        introHeader: sanityPageData.introHeader,
        introParagraph: sanityPageData.introParagraph,
        bgImage: sanityPageData.bgImage,
        bgAlt: sanityPageData.bgAlt,
      }
    : realizacjeDataPage;

  const colors = sanityPageData?.colors?.length
    ? sanityPageData.colors
    : realizacjeData;

  return (
    <ReactLenis root>
      <IntroSmall data={pageData} buttons={true} />
      <RealizacjeComp title="Realizacje" data={colors} />
    </ReactLenis>
  );
}
