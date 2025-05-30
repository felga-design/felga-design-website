// lib/fetchBlogPageData.ts
import { sanityClient } from "./sanityClient";

export async function getBlogPageData() {
  const result = await sanityClient.fetch(`
    *[_type == "blogPage"][0]{
      introHeader,
      introParagraph,
      bgImage { asset->{url} },
      bgAlt
    }
  `);

  return {
    introHeader: result?.introHeader || "Strefa Wiedzy",
    introParagraph:
      result?.introParagraph ||
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    bgImage: result?.bgImage?.asset?.url || "/9.jpeg",
    bgAlt: result?.bgAlt || "",
  };
}
