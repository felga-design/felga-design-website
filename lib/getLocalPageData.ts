// lib/fetchLocalPageData.ts
import { sanityClient as client } from "./sanityClient";

export async function getLocalPageData(slug: string) {
  const query = `
    *[_type == "localPage" && slug.current == $slug][0]{
      title,
      slug,
      metaTitle,
      metaDescription,
      metaImage{asset->{url}},
      introHeader,
      introParagraph,
      bgImage{asset->{url}},
      bgAlt,
      countUpData,
      faqData{
        faqHeader,
        faqParagraph,
        faqs
      }
    }
  `;

  const data = await client.fetch(query, { slug });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sanitize = (obj: any) => {
    if (!obj) return obj;
    const newObj = JSON.parse(JSON.stringify(obj));
    for (const key in newObj) {
      if (newObj[key]?.asset?.url) newObj[key] = newObj[key].asset.url;
      else if (typeof newObj[key] === "object")
        newObj[key] = sanitize(newObj[key]);
    }
    return newObj;
  };

  return sanitize(data);
}
