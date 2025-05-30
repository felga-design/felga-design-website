import Link from "next/link";

type ButtonOne = {
  children: string;
  href: string;
};

export default function ButtonTwo({ children, href }: ButtonOne) {
  return (
    <Link
      className="inline-block bg-[#0000006a] rounded-[2px] md:rounded-[4px] shadow-xl borde  r-l-white hover:scale-101 hover:-translate-y-1 transition-all px-4 py-1 text-white  border-[#f1c836] border-1  hover:bg-[#0000006a]  transform duration-150 active:scale-95"
      href={href}
    >
      {children}
    </Link>
  );
}
