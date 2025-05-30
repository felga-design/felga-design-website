import { sanityClient as client } from "@/lib/sanityClient";

export const getWebsiteData = async () => {
  const koloryPage = await client.fetch(`*[_type == "koloryPage"][0]`);
  const realizacjePage = await client.fetch(`*[_type == "realizacjePage"][0]`);

  return {
    koloryPage,
    realizacjePage,
  };
};
