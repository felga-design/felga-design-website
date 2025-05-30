// components/Intro.tsx
import { IntroSmallTypes } from "@/data/types";
import Image from "next/image";
import ButtonOne from "./ui/ButtonOne";
import ButtonTwo from "./ui/ButtonTwo";
import ScrollIndicator from "./ui/ScrollIndicator";

type Props = {
  data: IntroSmallTypes;
  buttons: boolean;
};

export default function IntroSmall({ data, buttons = true }: Props) {
  return (
    <section className="relative w-full h-[50vh] min-h-[500px] overflow-hidden">
      <Image
        src={data.bgImage}
        alt={data.bgAlt}
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#000000a4] to-[#ffc1242a] z-10" />
      <div className="relative z-20 h-full w-full max-w-screen-xl mx-auto flex flex-col justify-center px-6 md:px-0 mt-10">
        <h1 className="text-4xl md:text-5xl font-bold pb-2 text-gold-gradient">
          {data.introHeader}
        </h1>
        <p className="text-md md:text-lg md:max-w-[60%] font-light mb-6 text-gray-100">
          {data.introParagraph}
        </p>

        {buttons && (
          <div className="flex space-x-4">
            <ButtonOne className="" href="/kontakt">
              Wycena
            </ButtonOne>
            <ButtonTwo href="/uslugi">Usługi</ButtonTwo>
          </div>
        )}
      </div>
      <ScrollIndicator />
    </section>
  );
}
