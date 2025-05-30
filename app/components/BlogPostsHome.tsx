import { getBlogPosts as getAllBlogPosts } from "@/lib/getBlogPosts";
import ButtonOne from "./ui/ButtonOne";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  data: {
    blogHeader: string;
    blogParagraph: string;
    blogButtonText: string;
    publishedAt: string;
  };
};

export const dynamic = "force-dynamic";

export default async function BlogPostsHome({ data }: Props) {
  const posts = await getAllBlogPosts();
  const latest3 = posts
    .filter((p) => !!p.slug)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 3);

  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="px-8 min-h-[150px] md:min-h-[35vh] py-12 flex max-w-screen-xl mx-auto">
        <div className="flex justify-center flex-col z-20 max-w-screen-xl w-full mx-auto">
          <h1 className="capitalize font-bold  text-3xl md:text-4xl mb-2 text-gold-gradient">
            {data.blogHeader}
          </h1>
          <p className="text-md md:text-lg md:max-w-[100%] mb-6 text-gray-200 font-light">
            {data.blogParagraph}
          </p>

          <div className="flex space-x-5">
            <ButtonOne className="" href="/strefa-wiedzy">
              {data.blogButtonText}
            </ButtonOne>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full">
        {latest3.map((post, index) => (
          <Link key={index} href={`/strefa-wiedzy/${post.slug}`}>
            <div className="group relative w-[94%] mx-auto h-[420px] md:w-[400px] md:h-[520px] rounded-[2px] overflow-hidden shadow-lg">
              <Image
                src={post.bannerImage}
                alt={post.bannerAlt}
                fill
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 bg-gradient-to-tr from-black/60 via-black/50 to-[#dbc87d41]" />

              <div className="absolute bottom-0 left-0 w-full opacity-0 translate-y-[20px] group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-20 will-change-transform bg-gradient-to-tr from-[#18191b] via-[#121617] to-[#dbc87d33] px-6 py-6 backdrop-blur-md">
                <h3 className="text-xl flex items-center font-semibold text-white mb-2">
                  <ArrowRight size={34} className="pr-2" />
                  {post.title}
                </h3>
                <p className="text-slate-200 text-sm">{post.description}</p>
                <p className="text-slate-300 text-xs pt-1">
                  Data publikacji:{" "}
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString("pl-PL")
                    : "Brak daty"}
                </p>
              </div>

              <div className="absolute z-10 bg-gradient-to-t from-[#00000099] pointer-events-none w-full h-full text-white" />

              <div className="absolute bottom-6 left-6 z-30 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-white text-sm">{post.description}</p>
                <p className="text-slate-300 text-xs pt-1">
                  Data publikacji:{" "}
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString("pl-PL")
                    : "Brak daty"}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
