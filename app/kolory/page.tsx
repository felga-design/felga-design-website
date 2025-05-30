import IntroSmall from "../components/InstroSmall";
// import { historyData } from "@/data/homepage";

import { KoloryData } from "@/data/kolory";
import { koloryPageData } from "@/data/kolory";
import KoloryComp from "../components/KoloryComp";
import ReactLenis from "lenis/react";
import { Metadata } from "next";

import { sanityClient } from "@/lib/sanityClient";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const result = await sanityClient.fetch(`
      *[_type == "koloryPage"][0]{
        introHeader,
        introParagraph,
        bgImage {
          asset->{url}
        }
      }
    `);

    const title = result?.introHeader || "Dostępne kolory felg – Felga Design";
    const description =
      result?.introParagraph ||
      "Sprawdź dostępne kolory i wykończenia felg w naszej ofercie. Wybierz idealny styl dla swojego auta.";
    const image = result?.bgImage?.asset?.url || "/2.jpeg";

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: "https://felgadesign.pl/kolory",
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
      title: "Dostępne kolory felg – Felga Design",
      description:
        "Sprawdź dostępne kolory i wykończenia felg w naszej ofercie. Wybierz idealny styl dla swojego auta.",
      openGraph: {
        title: "Dostępne kolory felg – Felga Design",
        description:
          "Sprawdź dostępne kolory i wykończenia felg w naszej ofercie. Wybierz idealny styl dla swojego auta.",
        url: "https://felgadesign.pl/kolory",
        images: ["/2.jpeg"],
      },
      twitter: {
        title: "Dostępne kolory felg – Felga Design",
        description:
          "Sprawdź dostępne kolory i wykończenia felg w naszej ofercie. Wybierz idealny styl dla swojego auta.",
        images: ["/2.jpeg"],
      },
    };
  }
}

export default async function Kolory() {
  let sanityPageData = null;

  try {
    const result = await sanityClient.fetch(`
      *[_type == "koloryPage"][0]{
        introHeader,
        introParagraph,
        bgImage{
          asset->{url}
        },
        bgAlt,
        colors[] {
          title,
          description,
          slug,
          image {
            asset->{url},
            alt
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
        bgImage: result.bgImage?.asset?.url || "/fallback.jpg",
        bgAlt: result.bgAlt,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        colors: result.colors?.map((el: any) => ({
          title: el.title,
          description: el.description,
          slug: el.slug,
          image: {
            src: el.image?.asset?.url || "/fallback.jpg",
            alt: el.image?.alt || "",
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
    : koloryPageData;

  const colors = sanityPageData?.colors?.length
    ? sanityPageData.colors
    : KoloryData;

  return (
    <ReactLenis root>
      <IntroSmall data={pageData} buttons={true} />
      <KoloryComp title="Kolory" data={colors} />
    </ReactLenis>
  );
}
