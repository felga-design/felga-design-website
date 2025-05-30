import { sanityClient } from "./sanityClient";

export type BlogPostItem = {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  bannerImage: string;
  bannerAlt: string;
};

export async function getBlogPosts(): Promise<BlogPostItem[]> {
  const query = `
    *[_type == "blogPost"] | order(publishedAt desc) {
      title,
      description,
      slug,
      publishedAt,
      bannerImage {
        asset->{url}
      },
      bannerAlt
    }
  `;

  const results = await sanityClient.fetch(query);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return results.map((post: any) => ({
    title: post.title,
    description: post.description,
    slug: post.slug?.current,
    publishedAt: post.publishedAt,
    bannerImage: post.bannerImage?.asset?.url || "/placeholder.jpg",
    bannerAlt: post.bannerAlt || "",
  }));
}
