"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Gallery from "./ui/Gallery";
import { RealizacjaType } from "@/data/realizacje";

type Props = {
  data: RealizacjaType[];
  title: string;
};

export default function KoloryComp({ data, title }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  // Rozszerz listę obrazków o "Po" jak w Realizacjach
  const images = data.flatMap((item) => [
    {
      src: item.image.src,
      alt: `${item.title} - Przed`,
    },
    {
      src: item.imageAfter?.src ?? item.image.src,
      alt: `${item.title} - Po`,
    },
  ]);

  const openGallery = (index: number) => {
    setInitialIndex(index);
    setIsOpen(true);
  };

  const closeGallery = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeGallery();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  const grouped = data.reduce((acc, item) => {
    if (!acc[item.categorySlug]) {
      acc[item.categorySlug] = {
        categoryName: item.categoryName,
        items: [],
      };
    }
    acc[item.categorySlug].items.push(item);
    return acc;
  }, {} as Record<string, { categoryName: string; items: RealizacjaType[] }>);

  let globalIndex = 0;

  return (
    <section className="inset-0 bg-gradient-to-br from-[#1e252a] via-[#0c1015] to-[#dbc87d1a] text-white">
      <section className="max-w-screen-2xl mx-auto px-6 md:px-0 flex flex-col lg:flex-row gap-8 pt-16 pb-40">
        {/* === ZAWARTOŚĆ WEDŁUG KATEGORII === */}
        <div className="flex flex-col space-y-24 w-full">
          {Object.entries(grouped).map(([slug, group]) => (
            <section key={slug} id={slug}>
              <h1 className="text-3xl font-bold mb-8">{group.categoryName}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((realizacja) => {
                  const currentIndex = globalIndex;
                  globalIndex += 2;

                  return (
                    <div
                      key={`${realizacja.title}-${currentIndex}`}
                      onClick={() => openGallery(currentIndex)}
                      className="cursor-pointer group relative w-full max-w-[380px] mx-auto h-[350px] rounded-[4px] border-[#cfd6e20e] bg-gradient-to-tr from-[#252A30] from-45% to-[#181C1F] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#171b1f] hover:scale-101 hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="relative h-[270px] w-full flex">
                        <Image
                          src={realizacja.image.src}
                          alt={realizacja.image.alt}
                          height={270}
                          width={190}
                          className="object-cover"
                        />
                        <Image
                          src={
                            realizacja.imageAfter?.src ?? realizacja.image.src
                          }
                          alt={
                            realizacja.imageAfter?.alt ?? realizacja.image.alt
                          }
                          height={270}
                          width={190}
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-1">
                          {realizacja.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {realizacja.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* === STICKY MENU === */}
        <nav className="hidden lg:block sticky top-20 h-max bg-[#19191adb] w-[330px] rounded-md shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <ul className="space-y-2 text-sm md:text-base">
            {Object.entries(grouped).map(([slug, group]) => (
              <li key={slug}>
                <a href={`#${slug}`} className="hover:underline block">
                  {group.categoryName}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* === OVERLAY GALERII === */}
      {isOpen && (
        <div
          onClick={closeGallery}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl h-[60vh] bg-black rounded-lg"
          >
            <Gallery images={images} initialIndex={initialIndex} />
            <button
              onClick={closeGallery}
              className="absolute top-4 z-20 bg-[#00000020] p-3 py-1 cursor-pointer right-4 text-white text-3xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
