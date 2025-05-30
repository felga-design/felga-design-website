import { getBlogPosts } from "@/lib/getBlogPosts";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await getBlogPosts();
  const sliced = posts
    .filter((p) => !!p.slug)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 6);

  return NextResponse.json(sliced);
}
