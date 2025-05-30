import ButtonOne from "./ui/ButtonOne";
import Link from "next/link";
import Image from "next/image";
import { getKontaktData } from "@/lib/fetchKontaktData";
import { Facebook } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { getServicesPageData } from "@/lib/fetchUslugiData";
import { getAllLocalPages } from "@/lib/getAllLocalPages";

export default async function Footer() {
  const { services } = await getServicesPageData();
  const localPages = await getAllLocalPages();
  const kontaktData = await getKontaktData();
  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 mt-12">
        <Image src="/logo-svg-1.svg" width={100} height={100} alt="" />
      </div>
      <Image
        src="/1.jpeg"
        alt="bg"
        fill
        className="absolute inset-0 object-cover opacity-20 z-0"
      />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-16">
        {/* Desktop layout */}
        <div className="grid-cols-1 grid md:grid-cols-4 gap-12">
          <div>
            <p className="text-lg font-semibold">{kontaktData.footerHeader}</p>
            <ul className="space-y-2 mt-8 mb-4 text-zinc-300 font-bold">
              <li className="hover:underline">
                <Link href="/">Strona główna</Link>
              </li>
              <li className="hover:underline">
                <Link href="/realizacje">Realizacje</Link>
              </li>
              <li className="hover:underline">
                <Link href="/uslugi">Usługi</Link>
              </li>
              <li className="hover:underline">
                <Link href="kolory">Kolory</Link>
              </li>
              <li className="hover:underline">
                <Link href="/strefa-wiedzy">Strefa Wiedzy</Link>
              </li>
              <li className="hover:underline">
                <Link href="/kontakt">Kontakt</Link>
              </li>
              <li>
                <hr />
              </li>
              <li className="hover:underline">
                <a href={`tel:${kontaktData.kontaktNumber}`}>
                  {kontaktData.kontaktNumber}
                </a>
              </li>
            </ul>
            <ul className="flex text-gray-300 space-x-2">
              <li className="hover:underline">
                <a
                  href={`tel:${kontaktData.kontaktNumber}`}
                  className="hover:underline flex items-center hover:-translate-y-[2px] transition-all"
                >
                  {/* ===== /// Uzupelnic /// =====*/}
                  <FaWhatsapp size={25} />
                  <span className="ml-2">WhatsApp</span>
                </a>
              </li>
              <li className="hover:underline">
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

          <div>
            <p className="text-lg font-semibold">Usługi</p>
            <ul className="space-y-2 mt-8 text-zinc-300">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {services.map((el: any, i: any) => (
                <li key={i}>
                  <Link className="hover:underline" href={`/uslugi/${el.slug}`}>
                    {el.job}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold">Działamy na terenie</p>
            <ul className="space-y-2 mt-8 text-zinc-300">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {localPages.map((el: any, i: any) => (
                <li key={i}>
                  <Link
                    className="hover:underline"
                    href={`/${el.slug.current}`}
                  >
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-2xl font-semibold">Znajdziesz nas tutaj!</p>
            <ul className="space-y-2 mt-6 text-zinc-300">
              <li>{kontaktData.kontaktAdress}</li>
              {/* <li className="hover:underline">
                 <a
                  className="hover:undeline"
                  href={`tel:${kontaktData.kontaktNumber}`}
                >
                  {kontaktData.kontaktNumber}
                </a> 
              </li> */}
              <li className="my-4">
                <ButtonOne
                  href="https://www.google.com/maps?rlz=1C5CHFA_enPL1074PL1074&um=1&ie=UTF-8&fb=1&gl=pl&sa=X&geocode=KbPsat5tMhFHMQR6K6GUAiQD&daddr=Paw%C5%82a+Stalmacha+7,+41-800+Zabrze"
                  target="_blank"
                  className=""
                >
                  {kontaktData.mapsText}
                </ButtonOne>
              </li>
            </ul>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2548.1904339278776!2d18.78808407707836!3d50.30703817156514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711326dde6aecb3%3A0x3240294a12b7a04!2sFelga%20Design!5e0!3m2!1spl!2spl!4v1747828640562!5m2!1spl!2spl"
              width="100%"
              height="200"
              className="mt-4 border-none"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
