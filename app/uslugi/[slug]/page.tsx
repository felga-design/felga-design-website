import IntroSmall from "@/app/components/InstroSmall";
import Gallery from "@/app/components/ui/Gallery";
import { getServicesPageData } from "@/lib/fetchUslugiData";
import { notFound } from "next/navigation";
import Image from "next/image";
import ButtonOne from "@/app/components/ui/ButtonOne";
import ButtonTwo from "@/app/components/ui/ButtonTwo";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { services } = await getServicesPageData();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const service = services.find((el: any) => el.slug === slug);

  if (!service) {
    return {
      title: "Usługa nie znaleziona – Felga Design",
      description: "Wybrana usługa nie istnieje lub została usunięta.",
    };
  }

  return {
    title: service.job || "Usługa – Felga Design",
    description: service.desc || "Szczegóły naszej usługi.",
    openGraph: {
      title: service.job,
      description: service.desc,
      url: `https://felgadesign.pl/uslugi/${service.slug}`,
      images: [service.bannerImage || service.img || "/og-image.jpg"],
    },
    twitter: {
      title: service.job,
      description: service.desc,
      images: [service.bannerImage || service.img || "/og-image.jpg"],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { services } = await getServicesPageData();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const service = services.find((el: any) => el.slug === slug);

  if (!service) return notFound();

  return (
    <>
      <IntroSmall
        data={{
          introHeader: service.job,
          introParagraph: service.desc,
          bgImage: service.bgImage || service.img,
          bgAlt: service.bgAlt,
        }}
        buttons={true}
      />

      <main className="py-6 max-w-screen-xl mx-auto justify-center w-full flex flex-col text-white md:flex-row overflow-hidden  min-h-screen md:min-h-[70vh]">
        <div className="px-6 w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Jak to robimy?</h1>
          <p className="mb-6 text-gray-300 text-md md:text-sm font-light">
            {service.how}
          </p>
          <h2 className="text-3xl font-bold mb-4">Ile trwa realizacja?</h2>
          <p className="mb-6 text-gray-300 text-md md:text-sm font-light">
            {service.howLong}
          </p>
          <h3 className="text-3xl font-bold mb-4">Ile to kosztuje?</h3>
          <p className="mb-6 text-gray-300 text-md md:text-sm font-light">
            {service.howMuch}
          </p>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-[4px] shadow-xl overflow-hidden">
            <Gallery images={service.galleryImage} />
          </div>
        </div>
      </main>

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
    </>
  );
}

// generateStaticParams remains the same
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const { services } = await getServicesPageData();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return services.map((service: any) => ({
    slug: service.slug,
  }));
}
