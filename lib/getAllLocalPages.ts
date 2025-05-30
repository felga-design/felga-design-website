import { sanityClient as client } from "./sanityClient";

export async function getAllLocalPages() {
  const query = `*[_type == "localPage"]{
    _id,
    title,
    slug
  }`;
  return await client.fetch(query);
}
