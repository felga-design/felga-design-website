import IntroSmall from "../components/InstroSmall";
// import { kontaktData } from "@/data/kontaktpage";
import { getKontaktData } from "@/lib/fetchKontaktData";
import { Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Metadata } from "next";
import ReactLenis from "lenis/react";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const kontaktData = await getKontaktData();

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
      url: "https://felgadesign.pl/kontakt",
      images: [images], // lub inny obraz z Sanity jak masz
    },
    twitter: {
      title,
      description,
      images: [images],
    },
  };
}

export default async function Kontakt() {
  const kontaktData = await getKontaktData();

  return (
    <>
      <ReactLenis root>
        <IntroSmall data={kontaktData} buttons={true} />
        <section className="relative w-full bg-[#0b0b0b] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#131313] to-[#dbc87d1a] opacity-100 z-0" />

          <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-semibold text-white border-b-[1px] border-[#dbc87d] inline-block pb-2">
                {kontaktData.kontaktHeader}
              </h2>
              <p className="text-gray-200 max-w-lg">
                {kontaktData.kontaktParagraph}
              </p>
              <ul className="text-lg text-gray-300 space-y-2 font-light">
                <li>{kontaktData.kontaktNumber}</li>
                <li>{kontaktData.kontaktMail}</li>
                <li>{kontaktData.kontaktAdress}</li>
                <li>{kontaktData.kontaktNip}</li>
                <li className="pt-2">{kontaktData.kontaktName}</li>
              </ul>
              <ul className="flex text-gray-300 space-x-2">
                <li className="">
                  <a
                    href={`tel:${kontaktData.kontaktNumber}`}
                    className="hover:underline flex items-center hover:-translate-y-[2px] transition-all"
                  >
                    {/* ===== /// Uzupelnic /// =====*/}
                    <FaWhatsapp size={25} />
                    <span className="ml-2">WhatsApp</span>
                  </a>
                </li>
                <li className="">
                  <a
                    href={kontaktData.facebook}
                    target="_blank"
                    className="hover:underline flex items-center hover:-translate-y-[2px] transition-all"
                  >
                    <Facebook size={25} />
                    <span className="ml-2">Facebook</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="relative  rounded-[2px] p-6 ">
              <h3 className="text-xl font-medium text-[#dbc87d] text-gold-gradient mb-4 mx-auto md:text-center w-full">
                {kontaktData.mapsText}
              </h3>
              <div className="overflow-hidden rounded-[2px] border border-[#dbc87d33]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.1904339278776!2d18.78808407707836!3d50.30703817156514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711326dde6aecb3%3A0x3240294a12b7a04!2sFelga%20Design!5e0!3m2!1spl!2spl!4v1747828640562!5m2!1spl!2spl"
                  width="100%"
                  height="300"
                  className="w-full h-[350px] border-none"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </ReactLenis>
    </>
  );
}
