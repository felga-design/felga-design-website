import { sanityClient } from "@/lib/sanityClient";

export async function getSeoSchemaData() {
  const result = await sanityClient.fetch(`
    *[_type == "homepageSchema"][0]{
      businessName,
      telephone,
      url,
      logo{asset->{url}},
      address,
      faq,
      services
    }
  `);

  return {
    localBusiness: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: result.businessName,
      url: result.url,
      logo: result.logo?.asset?.url,
      telephone: result.telephone,
      address: {
        "@type": "PostalAddress",
        streetAddress: result.address?.street,
        addressLocality: result.address?.addressLocality,
        addressCountry: result.address?.addressCountry,
        postalCode: result.address?.postalCode,
      },
    },
    faqPage: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mainEntity: result.faq?.map((item: any) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    services: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      hasPart: result.services?.map((item: any) => ({
        "@type": "Service",
        name: item.name,
        description: item.description,
      })),
    },
  };
}
