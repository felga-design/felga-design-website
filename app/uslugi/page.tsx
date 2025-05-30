import IntroSmall from "../components/InstroSmall";
// import Gallery from "../components/ui/Gallery";
import { getServicesPageData } from "@/lib/fetchUslugiData";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ReactLenis from "lenis/react";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const kontaktData = await getServicesPageData();

  const title = kontaktData?.introHeader || "Kontakt – Felga Design";
  const description =
    kontaktData?.introParagraph ||
    "Skontaktuj się z nami – regeneracja felg, naprawy i więcej. Felga Design.";

  const images = kontaktData?.bgImage || "/3.jpeg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://felgadesign.pl/uslugi",
      images: [images], // lub inny obraz z Sanity jak masz
    },
    twitter: {
      title,
      description,
      images: [images],
    },
  };
}

export default async function Uslugi() {
  const { introHeader, introParagraph, bgImage, bgAlt, services } =
    await getServicesPageData();

  return (
    <>
      <ReactLenis root>
        <IntroSmall
          data={{
            introHeader,
            introParagraph,
            bgImage,
            bgAlt,
          }}
          buttons={true}
        />

        <section className="inset-0 bg-gradient-to-br from-[#1e252a] via-[#0c1015] to-[#dbc87d1a] py-16">
          <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {services.map((el: any, i: any) => (
              <Link href={`/uslugi/${el.slug}`} key={i}>
                <div className="group relative w-full h-[420px] md:h-[420px] rounded-[2px] overflow-hidden shadow-lg">
                  <Image
                    src={el.img}
                    alt={el.bgImgAlt}
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 bg-gradient-to-tr from-black/60 via-black/50 to-[#dbc87d41]" />

                  <div className="absolute bottom-0 left-0 w-full opacity-0 translate-y-[20px] group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-20 bg-gradient-to-tr from-[#18191b] via-[#1e1e1e] to-[#dbc87d66] px-6 py-5 backdrop-blur-md">
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                      <ArrowRight size={20} /> {el.job}
                    </h3>
                  </div>

                  <div className="absolute z-10 bg-gradient-to-t from-[#00000099] pointer-events-none w-full h-full text-white" />

                  <div
                    style={{
                      clipPath: "polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%)",
                    }}
                    className="absolute bg-gold-gradient-horizon pl-6 pt-10 pb-6 pr-6 left-0 w-full bottom-0 z-30 group-hover:opacity-0 transition-opacity duration-300"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                      <Image
                        src={el.icon}
                        alt={el.iconAlt}
                        width={20}
                        height={20}
                        className="w-8 h-8 filter brightness-0 invert sepia hue-rotate-[20deg] saturate-[500%]"
                      />
                      {el.job}
                    </h3>
                    <p className="text-white text-sm">{el.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </ReactLenis>
    </>
  );
}

// import IntroSmall from "../components/InstroSmall";
// import { uslugiData } from "@/data/uslugi";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import Link from "next/link";
// import { servicesData } from "@/data/uslugi";
// import ReactLenis from "lenis/react";

// export const dynamic = "force-dynamic";

// export default async function Uslugi() {
//   return (
//     <>
//       <ReactLenis root>
//         <IntroSmall data={uslugiData} buttons={true} />
//         <section className="inset-0 bg-gradient-to-br from-[#1e252a] via-[#0c1015] to-[#dbc87d1a] py-16">
//           <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {servicesData.map((el, i) => (
//               <Link href={`/uslugi/${el.slug}`} key={i}>
//                 <div className="group relative w-full h-[420px] md:h-[420px] rounded-[2px] overflow-hidden shadow-lg">
//                   <Image
//                     src={el.img}
//                     alt={el.bgImgAlt}
//                     fill
//                     className="absolute inset-0 w-full h-full object-cover"
//                   />

//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10
//               bg-gradient-to-tr from-black/60 via-black/50 to-[#dbc87d41]"
//                   />

//                   <div
//                     className="absolute bottom-0 left-0 w-full opacity-0 translate-y-[20px] group-hover:translate-y-0 group-hover:opacity-100
//     transition-all duration-300 ease-in-out z-20 will-change-transform
//     bg-gradient-to-tr from-[#18191b] via-[#1e1e1e] to-[#dbc87d66] px-6 py-5 backdrop-blur-md"
//                   >
//                     <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
//                       {/* <Image
//                     src={el.icon}
//                     alt="icon"
//                     width={20}
//                     height={20}
//                     className="w-6 h-6"
//                   /> */}
//                       <ArrowRight size={20} /> {el.job}
//                     </h3>
//                   </div>

//                   <div className="absolute z-10 bg-gradient-to-t from-[#00000099] pointer-events-none w-full h-full text-white" />

//                   <div
//                     style={{
//                       clipPath: "polygon(0% 0%, 100% 20%, 100% 100%, 0% 100%)",
//                     }}
//                     className="absolute bg-gold-gradient pl-6 pt-10 pb-6 left-0 w-full bottom-0 z-30 group-hover:opacity-0 transition-opacity duration-300"
//                   >
//                     <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
//                       <Image
//                         src={el.icon}
//                         alt={el.iconAlt}
//                         width={20}
//                         height={20}
//                         className="w-8 h-8 filter brightness-0 invert sepia hue-rotate-[20deg] saturate-[500%]"
//                       />
//                       {el.job}
//                     </h3>
//                     <p className="text-white text-sm">{el.desc}</p>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </section>
//       </ReactLenis>
//     </>
//   );
// }
