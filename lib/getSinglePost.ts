// lib/getSinglePost.ts
import { sanityClient } from "./sanityClient";

export async function getSinglePost(slug: string) {
  const result = await sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0]{
      title,
      description,
      bannerImage { asset->{url}, alt },
      publishedAt,
      slug,
      body[]{
        ...,
        _type == "image" => {
          ...,
          asset->{url, metadata {lqip}},
        }
      }
    }`,
    { slug }
  );

  return {
    title: result?.title,
    description: result?.description,
    bannerImage: result?.bannerImage?.asset?.url || "",
    bannerAlt: result?.bannerImage?.alt || "",
    publishedAt: result?.publishedAt || "",
    slug: result?.slug?.current || "",
    body: result?.body || [],
  };
}
