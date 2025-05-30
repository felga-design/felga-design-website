import { sanityClient as client } from "./sanityClient";
import { kontaktData as kontaktDataLocal } from "@/data/kontaktpage";

export async function getKontaktData() {
  try {
    const sanityData = await client.fetch(`
      *[_type == "kontaktPage"][0]{
      footerHeader,
        introHeader,
        introParagraph,
        bgImage {
          asset->{url}
        },
        bgAlt,
        kontaktHeader,
        kontaktParagraph,
        kontaktNumber,
        kontaktMail,
        kontaktNip,
        kontaktAdress,
        kontaktName,
        whatsapp,
        facebook,
        mapsText
      }
    `);

    return {
      footerHeader: sanityData?.footerHeader || "Felga Design",
      introHeader: sanityData?.introHeader || kontaktDataLocal.introHeader,
      introParagraph:
        sanityData?.introParagraph || kontaktDataLocal.introParagraph,
      bgImage: sanityData?.bgImage?.asset?.url || kontaktDataLocal.bgImage,
      bgAlt: sanityData?.bgAlt || kontaktDataLocal.bgAlt,
      kontaktHeader:
        sanityData?.kontaktHeader || kontaktDataLocal.kontaktHeader,
      kontaktParagraph:
        sanityData?.kontaktParagraph || kontaktDataLocal.kontaktParagraph,
      kontaktNumber:
        sanityData?.kontaktNumber || kontaktDataLocal.kontaktNumber,
      kontaktMail: sanityData?.kontaktMail || kontaktDataLocal.kontaktMail,
      kontaktNip: sanityData?.kontaktNip || kontaktDataLocal.kontaktNip,
      kontaktAdress:
        sanityData?.kontaktAdress || kontaktDataLocal.kontaktAdress,
      kontaktName: sanityData?.kontaktName || kontaktDataLocal.kontaktName,
      whatsapp: sanityData?.whatsapp || kontaktDataLocal.whatsapp,
      facebook: sanityData?.facebook || kontaktDataLocal.facebook,
      mapsText: sanityData?.mapsText || kontaktDataLocal.mapsText,
    };
  } catch (err) {
    console.error("Błąd pobierania danych z Sanity (kontaktPage):", err);
    return kontaktDataLocal;
  }
}
