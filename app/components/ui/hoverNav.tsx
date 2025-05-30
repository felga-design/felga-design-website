"use client";
import { useState, useRef } from "react";
import Link from "next/link";

type HoverNavProps<T> = {
  href: string;
  title: string;
  items: T[];
  labelKey: keyof T;
  slugKey: keyof T;
  baseSlug?: string;
};

export default function HoverNav<T>({
  href,
  title,
  items,
  labelKey,
  slugKey,
  baseSlug,
}: HoverNavProps<T>) {
  const [isOpen2, setIsOpen2] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsOpen2(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsOpen2(false);
    }, 300);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className="pb-2 text-gold-gradient cursor-pointer hover:underline transition"
      >
        {title} {isOpen2 ? "▲" : "▼"}
      </Link>

      <div
        className={`absolute left-0 top-full w-max bg-zinc-900 p-4 rounded-sm shadow z-50 transition-all duration-200 ${
          isOpen2
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i}>
              <Link
                href={`/${baseSlug}/${item[slugKey] as string}`}
                className="text-gold-gradient hover:underline block whitespace-nowrap"
              >
                {item[labelKey] as string}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
