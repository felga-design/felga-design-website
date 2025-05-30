How we structure the app?

Page is fetching data and then rendering them on the page if something does wrong, we provide basic set of data in case there is nothing rendered, or there is error in fetching.

Page is asynchronous and is rendered via SSR, components are mostly client and are reusable

Data to Components are passed from page to Components. Page fetches them from function in lib (sanity connection)

ok great

1. Navbar + Footer
2. Mock Data ( also rendered when there is no data on the page )
3. Most Popular Component

Components

Intro - home,
Services - home / landing ✅
CountUp - home ✅
History - home ✅ - props
BannerMinRight - home ✅ // potestowac
BannerMinLeft - landing, services
Gallery - home, landing ✅ - props
ClientRating - home, landing ✅
BlogPostsHome - home ✅
FAQ - home ✅
JobsCard - Jobs
ShowcaseGallery (gallery element with menu on the right) - Jobs, Colors - Job(element for before and after) - Jobs - ColorsJob - Colors
BlogPostsRecent (2 posts with list of all of them at the bottom) - Blog
BlogPosts (list) - Blog
SpecificJob - JobsSpecific (based on slug)
BlogPost - Blog
Contact - Contact

ui

Button 1
Button 2
Accordion

<!-- Structurre backup data plan -->

✅ Step-by-Step: Fallback from Sanity → Static Data
We’ll create a getHomepageData() function that:

Tries to fetch from Sanity

If that fails or returns null, falls back to local homeData

1. data/homepage.ts (backup default)
   ts
   Copy
   Edit
   // data/homepage.ts
   export type HomePageData = {
   introHeader: string;
   introParagraph: string;
   buttonOne: string;
   buttonOneHref: string;
   buttonTwo: string;
   buttonTwoHref: string;
   bgImage: string;
   };

export const fallbackHomeData: HomePageData = {
introHeader: "Naprawa i renowacja felg",
introParagraph:
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam felis augue...",
buttonOne: "Kontakt",
buttonOneHref: "/kontakt",
buttonTwo: "Usługi",
buttonTwoHref: "/uslugi",
bgImage: "/9.jpg",
}; 2. Create lib/getHomepageData.ts:
ts
Copy
Edit
// lib/getHomepageData.ts
import { client } from "./sanityClient"; // your configured Sanity client
import { fallbackHomeData } from "@/data/homepage";
import { HomePageData } from "@/data/homepage";

export async function getHomepageData(): Promise<HomePageData> {
try {
const sanityData = await client.fetch(`*[_type == "homepage"][0]{
      introHeader,
      introParagraph,
      buttonOne,
      buttonOneHref,
      buttonTwo,
      buttonTwoHref,
      "bgImage": bgImage.asset->url
    }`);

    if (!sanityData || Object.keys(sanityData).length === 0) {
      return fallbackHomeData;
    }

    return sanityData;

} catch (error) {
console.warn("Using fallbackHomeData due to Sanity fetch error:", error);
return fallbackHomeData;
}
} 3. In your app/page.tsx, use the fetch:
tsx
Copy
Edit
// app/page.tsx
import { getHomepageData } from "@/lib/getHomepageData";
import Intro from "./components/Intro";
import ReactLenis from "lenis/react";

export const dynamic = "force-dynamic";

export default async function Home() {
const data = await getHomepageData();

return (
<ReactLenis root>
<Intro data={data} />
</ReactLenis>
);
} 4. Intro.tsx stays the same
tsx
Copy
Edit
// components/Intro.tsx
import { HomePageData } from "@/data/homepage";
import Image from "next/image";
import ButtonOne from "./ui/ButtonOne";
import ButtonTwo from "./ui/ButtonTwo";
import ScrollIndicator from "./ui/ScrollIndicator";

type Props = {
data: HomePageData;
};

export default function Intro({ data }: Props) {
return (

<section className="relative w-full h-screen overflow-hidden">
<Image src={data.bgImage} alt="" fill className="object-cover z-0" priority />
<div className="absolute inset-0 bg-gradient-to-br from-black via-[#000000a4] to-[#ffc1242a] z-10" />
<div className="relative z-20 h-full w-full max-w-screen-xl mx-auto flex flex-col justify-center px-4">
<h1 className="text-3xl md:text-4xl font-normal mb-2 text-gold-gradient">
{data.introHeader}
</h1>
<p className="text-md md:text-lg md:max-w-[60%] mb-6 text-white">
{data.introParagraph}
</p>
<div className="flex space-x-4">
<ButtonOne href={data.buttonOneHref}>{data.buttonOne}</ButtonOne>
<ButtonTwo href={data.buttonTwoHref}>{data.buttonTwo}</ButtonTwo>
</div>
</div>
<ScrollIndicator />
</section>
);
}
✅ Summary
Feature Status
SSR with Sanity data ✅ enabled
Fallback if offline/empty ✅ built-in
Type-safe ✅ via shared HomePageData

Let me know if you also want to cache it or revalidate every X seconds (revalidate: 60) for performance
