import { getBlogPageData } from "@/lib/fetchBlogPageData";
import { getBlogPosts as getAllBlogPosts } from "@/lib/getBlogPosts";
import IntroSmall from "../components/InstroSmall";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ReactLenis from "lenis/react";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const kontaktData = await getBlogPageData();

  const title = kontaktData?.introHeader || "Strefa Wiedzy – Felga Design";
  const description =
    kontaktData?.introParagraph ||
    "Poznaj naszą Strefę Wiedzy – miejsce, w którym dzielimy się praktycznymi poradami, ciekawostkami z warsztatu oraz przykładami naszych realizacji. Dowiedz się, na czym polega regeneracja felg aluminiowych, jak rozpoznać uszkodzenie, kiedy warto naprawiać, a kiedy wymieniać.";

  const images = kontaktData?.bgImage || "/3.jpeg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://felgadesign.pl/strefa-wiedzy",
      images: [images], // lub inny obraz z Sanity jak masz
    },
    twitter: {
      title,
      description,
      images: [images],
    },
  };
}

export default async function Blog() {
  const intro = await getBlogPageData();
  const posts = await getAllBlogPosts();

  const sorted = posts
    .filter((p) => !!p.slug)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return (
    <>
      <ReactLenis root>
        <IntroSmall data={intro} buttons={false} />

        <section className="py-16 bg-gradient-to-br from-[#1e252a] via-[#0c1015] to-[#dbc87d1a]">
          <div className="max-w-screen-xl mx-auto px-6 md:px-0 grid gap-10">
            {sorted.length >= 3 ? (
              <>
                {/* 2 wyróżnione posty */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sorted.slice(0, 2).map((post, i) => (
                    <Link key={i} href={`/strefa-wiedzy/${post.slug}`}>
                      <div className="group rounded-[4px] overflow-hidden bg-gradient-to-tr from-[#252A30] to-[#181C1F] shadow-xl hover:scale-101 transition">
                        <div className="w-full h-64 relative">
                          <Image
                            src={post.bannerImage}
                            alt={post.bannerAlt}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-white font-semibold mb-2">
                            {post.title}
                          </h3>
                          <p className="text-slate-200 text-sm">
                            {post.description}
                          </p>
                          <p className="mt-2 text-xs text-slate-300">
                            {post.publishedAt
                              ? new Date(post.publishedAt).toLocaleDateString(
                                  "pl-PL"
                                )
                              : "Brak daty"}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Reszta */}
                <div className="grid gap-6">
                  {sorted.slice(2).map((post, i) => (
                    <Link key={i} href={`/strefa-wiedzy/${post.slug}`}>
                      <div className="flex rounded-[4px] overflow-hidden bg-gradient-to-tr from-[#252A30] to-[#181C1F] shadow-xl hover:scale-101 transition">
                        <div className="relative w-1/3 h-48">
                          <Image
                            src={post.bannerImage}
                            alt={post.bannerAlt}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 flex flex-col justify-center w-2/3">
                          <h3 className="text-white font-semibold mb-2">
                            {post.title}
                          </h3>
                          <p className="text-slate-200 text-sm">
                            {post.description}
                          </p>
                          <p className="mt-2 text-xs text-slate-300">
                            {post.publishedAt
                              ? new Date(post.publishedAt).toLocaleDateString(
                                  "pl-PL"
                                )
                              : "Brak daty"}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              // Jeśli mniej niż 3 posty – jeden pod drugim
              <div className="grid gap-6">
                {sorted.map((post, i) => (
                  <Link key={i} href={`/strefa-wiedzy/${post.slug}`}>
                    <div className="flex flex-col md:flex-row rounded-[4px] overflow-hidden bg-gradient-to-tr from-[#252A30] to-[#181C1F] shadow-xl hover:scale-101 transition">
                      <div className="relative w-full md:w-1/3 h-64 md:h-auto">
                        <Image
                          src={post.bannerImage}
                          alt={post.bannerAlt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 flex flex-col justify-center w-full md:w-2/3">
                        <h3 className="text-white font-semibold mb-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-200 text-sm">
                          {post.description}
                        </p>
                        <p className="mt-2 text-xs text-slate-300">
                          {post.publishedAt
                            ? new Date(post.publishedAt).toLocaleDateString(
                                "pl-PL"
                              )
                            : "Brak daty"}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </ReactLenis>
    </>
  );
}
