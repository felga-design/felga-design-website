"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";
import ButtonOne from "./ui/ButtonOne";
import ButtonTwo from "./ui/ButtonTwo";
import ScrollIndicator from "./ui/ScrollIndicator";

type Props = {
  data: {
    introHeader: string;
    introParagraph: string;
    buttonOne: string;
    buttonOneHref: string;
    buttonTwo: string;
    buttonTwoHref: string;
    bgImages: { src: string; alt: string }[];
  };
};

export default function HeroSection({ data }: Props) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* === BACKGROUND SLIDESHOW === */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          effect="fade"
          loop
          className="h-full"
        >
          {data.bgImages.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* === GRADIENT OVERLAY (UNCHANGED) === */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#000000a4] to-[#ffc1242a] z-10" />

      {/* === CONTENT (TEXT + BUTTONS) === */}
      <div className="relative z-20 h-full w-full max-w-screen-xl mx-auto flex flex-col justify-center px-6 md:px-0">
        <h1 className="text-4xl md:text-5xl font-bold pb-2 text-gold-gradient">
          {data.introHeader}
        </h1>
        <p className="text-md md:text-lg md:max-w-[60%] font-light mb-6 text-gray-100">
          {data.introParagraph}
        </p>
        <div className="flex space-x-4">
          <ButtonOne className="" href={data.buttonOneHref}>
            {data.buttonOne}
          </ButtonOne>
          <ButtonTwo href={data.buttonTwoHref}>{data.buttonTwo}</ButtonTwo>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
