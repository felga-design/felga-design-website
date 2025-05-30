import Script from "next/script";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function JsonLd({ data }: { data: any }) {
  return (
    <>
      <Script
        id="ld-local"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.localBusiness) }}
      />
      <Script
        id="ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.faqPage) }}
      />
      <Script
        id="ld-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.services) }}
      />
    </>
  );
}
