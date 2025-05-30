"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type GalleryImageType = {
  src: string;
  alt: string;
};

type Props = {
  images: GalleryImageType[];
  initialIndex?: number;
};

export default function Gallery({ images, initialIndex }: Props) {
  return (
    <div className="relative h-full w-full">
      <Swiper
        initialSlide={typeof initialIndex === "number" ? initialIndex : 0}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass:
            "swiper-pagination-bullet-active custom-bullet-active",
        }}
        mousewheel
        keyboard
        loop
        className="h-full w-full"
        style={{ height: "100%" }}
      >
        {images.map((el, i) => (
          <SwiperSlide key={i} className="relative">
            <Image
              alt={el.alt}
              src={el.src || "/placeholder.svg"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200">
        <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-black" />
      </button>
      <button className="custom-next absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200">
        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-black" />
      </button>

      <style jsx global>{`
        .custom-bullet {
          width: 8px !important;
          height: 8px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          border-radius: 50% !important;
          margin: 0 4px !important;
          transition: all 0.3s ease !important;
        }

        .custom-bullet-active {
          background: white !important;
          transform: scale(1.2) !important;
        }

        .swiper-pagination {
          bottom: 16px !important;
        }

        @media (max-width: 768px) {
          .custom-bullet {
            width: 6px !important;
            height: 6px !important;
            margin: 0 3px !important;
          }
        }
      `}</style>
    </div>
  );
}
