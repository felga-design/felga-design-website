import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: false,
});
