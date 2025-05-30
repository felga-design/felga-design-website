import Image from "next/image";
import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";

export const portableComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?.url) return null;

      return (
        <div className="my-6">
          <Image
            src={value.asset.url}
            alt={value.alt || "Zdjęcie"}
            width={1200}
            height={700}
            className="rounded-[4px] shadow-xl w-full h-auto object-cover"
            priority
            // placeholder="blur"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold my-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold my-5">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold my-4">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold my-3">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-medium my-2">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-medium my-2">{children}</h6>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-[#f1c836] pl-4 italic text-slate-300 my-4">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="my-4 text-base">{children}</p>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    link: ({ children, value }) => (
      <Link
        href={value.href}
        className="underline text-[#f1c836] hover:text-yellow-500 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
};
