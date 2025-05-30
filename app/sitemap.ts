import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/getBlogPosts";
import { getServicesPageData } from "@/lib/fetchUslugiData";
import { getAllLocalPages } from "@/lib/getAllLocalPages";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  const { services } = await getServicesPageData();
  const localPages = await getAllLocalPages();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://felgadesign.pl",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://felgadesign.pl/uslugi",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://felgadesign.pl/realizacje",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://felgadesign.pl/kolory",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://felgadesign.pl/strefa-wiedzy",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blogRoutes = posts.map((post: any) => ({
    url: `https://felgadesign.pl/strefa-wiedzy/${post.slug.current}`,
    lastModified: post._updatedAt
      ? new Date(post._updatedAt).toISOString()
      : new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const serviceRoutes = services.map((service: any) => ({
    url: `https://felgadesign.pl/uslugi/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const localRoutes = localPages.map((page: any) => ({
    url: `https://felgadesign.pl/${page.slug.current}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes, ...serviceRoutes, ...localRoutes];
}
