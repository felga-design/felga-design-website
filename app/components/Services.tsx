import Image from "next/image";
import ButtonOne from "./ui/ButtonOne";
import Link from "next/link";
import { UslugiDataTypes } from "@/data/types";

type servicesDataHomeTypes = {
  servicesHeader: string;
  servicesParagraph: string;
  // servicesButtonHref: string;
  servicesButtonText: string;
  servicesImage: string;
  servicesImageAlt: string;
};

type Props = {
  uslugiData: UslugiDataTypes[];
  data: servicesDataHomeTypes;
};

export default function Services({ uslugiData, data }: Props) {
  return (
    // inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#131313] to-[#dbc87d1a] opacity-100
    // <section className=" bg-gradient-to-tr from-[#1e252a] to-[#0c1015]">
    <section className="inset-0 bg-gradient-to-br from-[#1e252a] via-[#0c1015] to-[#dbc87d1a] opacity-100 ">
      {/* // <section className="bg-[url(/1.jpeg)] bg-fixed "> */}
      <section className=" mt-0  text-white px-6 md:px-0 max-w-screen-2xl mx-auto  ">
        <div className=" md:min-h-fit py-12 flex w-full md:w-[60%]    text-white z-20">
          <div className=" flex justify-center flex-col max-w-screen-xl w-full mx-auto">
            <h1 className=" capitalize font-bold text-3xl md:text-4xl mb-2 text-gold-gradient">
              {data.servicesHeader}
            </h1>
            <p className=" text-md md:text-lg font-light mb-6 text-gray-200">
              {data.servicesParagraph}
            </p>
            <div className="flex space-x-5">
              <ButtonOne className="" href="/uslugi">
                {data.servicesButtonText}
              </ButtonOne>
            </div>
          </div>
        </div>

        <div className="max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 mx-auto relative">
          <div className="relative h-full">
            <div className="sticky top-20 bottom-20 h-[300px] mx-1 md:mx-0 md:h-[600px] shadow-2xl shadow-[#181C1F] mb-4 md:mb-40">
              <Image
                fill
                className="object-cover"
                alt={data.servicesImageAlt}
                src={data.servicesImage}
              />
            </div>
          </div>

          <div className="py-0 ml-0 md:ml-4 pb-8 md:pb-40">
            <div className="flex flex-col space-y-10">
              {uslugiData.slice(0, 6).map((el, i) => (
                <Link key={i} href={`/uslugi/${el.slug}`}>
                  <div className="md:ml-4 hover border-b-2 hover:border-l-2 pl-2 hover:pl-4 border-[#dbc87d73] hover:bg-gradient-to-tr from-[#dbc87d17] via-65% via-[#00000000] transition-all duration-400">
                    <p className="w-12 h-12 rounded-full my-2 flex items-center justify-center ">
                      <Image
                        src={el.icon}
                        width={20}
                        height={20}
                        alt={el.job}
                        className="w-8 h-8 filter brightness-0 invert sepia hue-rotate-[20deg] saturate-[500%]"
                      />
                    </p>

                    <p className="text-xl font-mono font-semibold mb-1 text-gold-gradient tracking-tight">
                      {el.job}
                    </p>
                    <p className="mb-3 text-sm md:text-base text-gray-300">
                      {el.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
