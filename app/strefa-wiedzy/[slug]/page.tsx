import { notFound } from "next/navigation";
import { getSinglePost } from "@/lib/getSinglePost";
import { PortableText } from "@portabletext/react";
import { portableComponents } from "./PortableComponents";
import ReactLenis from "lenis/react";

import IntroSmall from "@/app/components/InstroSmall";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getSinglePost(slug);
  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: post?.title,
      description: post?.description,
      images: [post?.bannerImage],
      url: `https://felgadeisng.pl/strefa-wiedzy/${post?.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getSinglePost(slug);
  if (!post) return notFound();

  return (
    <>
      <ReactLenis root>
        <IntroSmall
          data={{
            introHeader: post.title,
            introParagraph: post.description,
            bgImage: post.bannerImage,
            bgAlt: post.bannerAlt,
          }}
          buttons={false}
        />

        <div className="max-w-screen-xl mx-auto px-6 md:px-0 py-12 text-white prose prose-invert prose-headings:text-white prose-strong:text-white">
          <PortableText value={post.body} components={portableComponents} />
        </div>
      </ReactLenis>
    </>
  );
}
