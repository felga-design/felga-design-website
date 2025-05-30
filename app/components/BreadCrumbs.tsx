"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BreadCrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean); // filer boolean throws away empty resoults

  const crumbs = pathSegments.map((segment, i) => {
    const href = "/" + pathSegments.slice(0, i + 1).join("/");

    return (
      <span key={href} className="capitalize">
        <span>{" > "}</span>
        <Link href={href}>
          {decodeURIComponent(segment).replace(/-/g, " ")}
        </Link>
      </span>
    );
  });

  return (
    <div className="absolute text-zinc-300 font-light text-xs z-100 mt-24  w-full ">
      <div className="max-w-screen-xl mx-auto">
        <Link href="/">{" > "} Główna</Link>
        {crumbs}
      </div>
    </div>
  );
}
