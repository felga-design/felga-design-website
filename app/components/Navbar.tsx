"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu } from "lucide-react";

import BreadCrumbs from "./BreadCrumbs";
import HoverNav from "./ui/hoverNav";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesData, setServicesData] = useState([]);

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/blogposts");
        const data = await res.json();
        setBlogPosts(data);
      } catch (err) {
        console.error("Błąd pobierania postów:", err);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/services");
        const data = await res.json();
        setServicesData(data);
      } catch (err) {
        console.error("Błąd pobierania usług:", err);
      }
    };
    fetchServices();
  }, []);

  return (
    <>
      <nav>
        <div className="fixed lg:absolute px-4 lg:px-0 flex w-full max-w-screen h-18 md:h-24 bg-[#00000020] lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none  z-100">
          <div className="mx-auto w-full max-w-screen-xl flex items-center justify-between">
            <Link href="/">
              <Image src="/logo-svg-1.svg" width={70} height={70} alt="hej" />
            </Link>
            <button className="text-white block lg:hidden active:scale-95">
              <Menu size={30} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </button>
            <ul className="hidden lg:flex space-x-10">
              <li className="hover:scale-103 transition-all text-gold-gradient">
                <Link href="/">Główna</Link>
              </li>
              <li className="hover:scale-103 transition-all text-gold-gradient">
                <Link href="/realizacje">Realizacje</Link>
              </li>
              <li className="hover:scale-103 transition-all">
                <HoverNav
                  href="/uslugi"
                  title={"Usługi"}
                  items={servicesData}
                  labelKey="job"
                  slugKey="slug"
                  baseSlug="uslugi"
                />
              </li>
              <li className=" hover:scale-103 transition-all text-gold-gradient">
                <Link href="/kolory">Kolory</Link>
              </li>
              <li className="hover:scale-103 transition-all">
                <HoverNav
                  href="/strefa-wiedzy"
                  title={"Strefa Wiedzy"}
                  items={blogPosts}
                  labelKey="title"
                  slugKey="slug"
                  baseSlug="strefa-wiedzy"
                />
              </li>
              <li className=" hover:scale-103 transition-all text-gold-gradient">
                <Link href="/kontakt">Kontakt</Link>
              </li>
              <li className="hover:scale-102 transition-all font-semibold text-gold-gradient">
                <a href="tel+48618203566">+48 618 203 566</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={`${
          isMenuOpen
            ? "opacity-100 scale-100 translate-x-0  pointer-events-auto"
            : "opacity-0 scale-95 translate-x-20  pointer-events-none"
        } transform lg:hidden fixed transition-all duration-200 z-100 max-w-screen overflow-hidden h-screen flex flex-col items-center justify-center w-full bg-zinc-900 text-white`}
      >
        <div className="absolute top-0 px-4 w-full">
          <BreadCrumbs />
        </div>
        <div className="absolute top-0 flex w-full justify-between px-4 pt-4">
          <Image src="/logo-svg-1.svg" width={70} height={70} alt="hej" />
          <X
            size={30}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${
              isMenuOpen ? "rotate-0" : "rotate-45"
            } transition-all duration-300`}
          />
        </div>

        <ul className="space-y-4 text-lg">
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="/">Główna</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="/realizacje">Realizacje</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="/uslugi">Usługi</Link>
            {/* <ul className="pl-4">
              {servicesData.map((el, i) => (
                <li key={i}>
                  <Link href={`/uslugi/${el.slug}`}>{el.job}</Link>
                </li>
              ))}
            </ul> */}
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="/kolory">Kolory</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="/strefa-wiedzy">Strefa Wiedzy</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <Link href="/kontakt">Kontakt</Link>
          </li>
          <li onClick={() => setIsMenuOpen(false)} className="mt-4">
            <a href="tel:+48 606 997 704">+48 606 997 704</a>
          </li>
        </ul>
      </nav>

      {/* BreadCrumbs stable */}
      <div className="hidden lg:block">
        <BreadCrumbs />
      </div>
    </>
  );
}
