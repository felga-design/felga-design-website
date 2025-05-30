import ReactLenis from "lenis/react";
import IntroSmall from "@/app/components/InstroSmall";
import CountUpComp from "@/app/components/CountUpComp";
import FaqComp from "@/app/components/FaqComp";
import Services from "@/app/components/Services";
import GalleryComp from "@/app/components/GalleryComp";
import OpinionComp from "@/app/components/OpinionComp";
import JsonLd from "@/app/components/JsonLd";

import { getSeoSchemaData } from "@/lib/getSeoSchemaData";
import { getLocalPageData } from "@/lib/getLocalPageData";
import { getHomepageData } from "@/lib/fetchHomeData";
import { getServicesPageData } from "@/lib/fetchUslugiData";
import Image from "next/image";
import ButtonOne from "../components/ui/ButtonOne";
import ButtonTwo from "../components/ui/ButtonTwo";

import { Metadata } from "next";

export const dynamic = "force-dynamic";

// 🧠 Metadane dla danej lokalizacji
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getLocalPageData(slug);

  return {
    title: page?.metaTitle,
    description: page?.metaDescription,
    openGraph: {
      title: page?.metaTitle,
      description: page?.metaDescription,
      images: [page?.metaImage],
      url: `https://felgadesign.pl/${slug}`,
    },
  };
}

// 🧠 Strona lokalna (np. /lokalizacja/zabrze)
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const localPage = await getLocalPageData(slug);
  const schemaData = await getSeoSchemaData();
  const { services } = await getServicesPageData();
  const { servicesDataHome, galleryData, OpinionData } =
    await getHomepageData();

  if (!localPage) return null;

  return (
    <ReactLenis root>
      <JsonLd data={schemaData} />

      {/* 🔸 Sekcja lokalna: intro */}
      <IntroSmall
        buttons={true}
        data={{
          bgImage: localPage.bgImage,
          introHeader: localPage.introHeader,
          bgAlt: localPage.bgAlt,
          introParagraph: localPage.introParagraph,
        }}
      />

      {/* 🔸 Sekcja globalna: usługi */}
      <Services uslugiData={services} data={servicesDataHome} />

      {/* 🔸 Sekcja lokalna: licznik */}
      <CountUpComp
        years={localPage.countUpData?.years}
        jobs={localPage.countUpData?.jobs}
        clients={localPage.countUpData?.clients}
      />

      {/* 🔸 Sekcja globalna: galeria i opinie */}
      <GalleryComp data={galleryData} />
      <OpinionComp data={OpinionData} />
      <div className="relative w-full h-44 overflow-hidden">
        <div className="bg-gradient-to-b from-[#000000c0] to-[#0000] absolute w-full h-full z-5" />

        <div className="relative w-full h-44 overflow-hidden flex">
          <div className="w-1/2 absolute h-full">
            <Image
              src="/1.jpeg"
              alt="tło felgi"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-[70%] right-0 absolute z-20 bg-gold-gradient-horizon h-full clip-diagonal-2 text-white flex flex-col justify-center items-center px-4 md:px-10 text-center">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              Chcesz zobaczyć efekty?
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <ButtonOne href="/kontakt">Umów Wycene</ButtonOne>
              <ButtonTwo href="/realizacje">Zobacz Nasze Realizacje</ButtonTwo>
            </div>
          </div>
        </div>
      </div>

      <FaqComp data={localPage.faqData} />
    </ReactLenis>
  );
}
