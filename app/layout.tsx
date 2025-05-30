import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getHomepageData } from "@/lib/fetchHomeData";
import Head from "./head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export async function generateMetadata(): Promise<Metadata> {
  const { homeData } = await getHomepageData();

  const title = homeData?.metaTitle || "Felga Design";
  const description =
    homeData?.metaDesc ||
    "Nowoczesne strony internetowe dla firm w Zabrzu i okolicach.";
  const image = homeData?.metaImage || "/og-image.jpg";

  return {
    title: {
      default: title,
      template: `%s – Felga Design`,
    },
    description,
    openGraph: {
      title,
      description,
      url: "https://felgadesign.pl",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
// export const metadata: Metadata = {
//   title: {
//     default: "Felga Design",
//     template: "%s – Felga Design",
//   },
//   description: "Nowoczesne strony internetowe dla firm w Zabrzu i okolicach.",
//   openGraph: {
//     title: "Felga Design",
//     description: "Projektuję strony www, które sprzedają.",
//     url: "https://felgadesign.pl",
//     images: ["/og-image.jpg"],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Felga Design",
//     description: "Projektuję strony www, które sprzedają.",
//     images: ["/og-image.jpg"],
//   },
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <Head />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
