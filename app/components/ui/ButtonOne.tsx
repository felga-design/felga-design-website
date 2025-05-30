import Link from "next/link";

type ButtonOne = {
  children: string;
  href: string;
  className?: string;
  target?: string;
};

export default function ButtonOne({
  children,
  href,
  className = "",
  target = "",
}: ButtonOne) {
  return (
    <Link
      className={`${className} rounded-[2px] md:rounded-[4px] text-black inline-block  font-bold shadow-xl border-l-white hover:scale-101 hover:-translate-y-1 transition-all px-4 py-1 bg-gold-gradient  hover:bg-black  transform duration-150 active:scale-95`}
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
}
