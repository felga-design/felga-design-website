export const realizacjeDataPage = {
  introHeader: "Realizacje",
  introParagraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam felis augue, rutrum et diam a, hendrerit dapibus lectus. Integer scelerisque ut augue at pulvinar.",
  bgImage: "/9.jpeg",
  bgAlt: "hej",
};

export type RealizacjaType = {
  title: string; // np. "Malowanie proszkowe - Audi RS3"
  description: string; // np. "Custom orange", lub szerszy opis
  categorySlug: string; // np. "malowanie-proszkowe"
  categoryName: string; // np. "Malowanie proszkowe"
  image: {
    src: string;
    alt: string;
  };
  imageAfter: {
    src: string;
    alt: string;
  };
  // slug: string; // np. "malowanie-audi-rs3"
};
export const realizacjeData: RealizacjaType[] = [
  {
    title: "Malowanie proszkowe - Audi A6",
    description: "Czerwony połysk, wykończenie na wysoki połysk",
    categorySlug: "malowanie-proszkowe",
    categoryName: "Malowanie proszkowe",
    // slug: "malowanie-audi-a6",
    image: {
      src: "/2.jpeg",
      alt: "Felga Audi RS3 po malowaniu proszkowym",
    },
    imageAfter: {
      src: "/2.jpeg",
      alt: "Felga Audi RS3 po malowaniu proszkowym",
    },
  },
  {
    title: "Prostowanie felg - VW Passat B6",
    description: "Naprawa po uderzeniu w krawężnik",
    categorySlug: "prostowanie-felg",
    categoryName: "Prostowanie felg",
    // slug: "prostowanie-passat-b6",
    image: {
      src: "/1.jpeg",
      alt: "Prostowanie felg BMW E90",
    },
    imageAfter: {
      src: "/2.jpeg",
      alt: "Felga Audi RS3 po malowaniu proszkowym",
    },
  },
  {
    title: "Malowanie proszkowe - Ford Focus ST",
    description: "Pomarańczowy neon, matowe wykończenie",
    categorySlug: "malowanie-proszkowe",
    categoryName: "Malowanie proszkowe",
    // slug: "malowanie-focus-st",
    image: {
      src: "/6.jpeg",
      alt: "Felga Audi RS3 po malowaniu proszkowym",
    },
    imageAfter: {
      src: "/2.jpeg",
      alt: "Felga Audi RS3 po malowaniu proszkowym",
    },
  },
  {
    title: "Prostowanie felg - Mercedes C-klasa",
    description: "Deformacja po wpadnięciu w dziurę",
    categorySlug: "prostowanie-felg",
    categoryName: "Prostowanie felg",
    // slug: "prostowanie-mercedes-c",
    image: {
      src: "/4.jpeg",
      alt: "Prostowanie felg BMW E90",
    },
    imageAfter: {
      src: "/2.jpeg",
      alt: "Felga Audi RS3 po malowaniu proszkowym",
    },
  },
  {
    title: "Malowanie proszkowe - BMW F10",
    description: "Czarne felgi z czerwonym rantem",
    categorySlug: "malowanie-proszkowe",
    categoryName: "Malowanie proszkowe",
    // slug: "malowanie-bmw-f10",
    image: {
      src: "/3.jpeg",
      alt: "Felga Audi RS3 po malowaniu proszkowym",
    },
    imageAfter: {
      src: "/2.jpeg",
      alt: "Felga Audi RS3 po malowaniu proszkowym",
    },
  },
  {
    title: "Prostowanie felg - Audi A4 B8",
    description: "Standardowa regeneracja po wygięciu",
    categorySlug: "prostowanie-felg",
    categoryName: "Prostowanie felg",
    // slug: "prostowanie-audi-a4",
    image: {
      src: "/7.jpeg",
      alt: "Prostowanie felg BMW E90",
    },
    imageAfter: {
      src: "/2.jpeg",
      alt: "Felga Audi RS3 po malowaniu proszkowym",
    },
  },
  {
    title: "Malowanie proszkowe - Skoda Octavia RS",
    description: "Felgi antracytowe, wykończenie półmat",
    categorySlug: "malowanie-proszkowe",
    categoryName: "Malowanie proszkowe",
    // slug: "malowanie-octavia-rs",
    image: {
      src: "/2.jpeg",
      alt: "Felga Audi RS3 po malowaniu proszkowym",
    },
    imageAfter: {
      src: "/2.jpeg",
      alt: "Felga Audi RS3 po malowaniu proszkowym",
    },
  },
  {
    title: "Prostowanie felg - Opel Astra H",
    description: "Regeneracja po sezonie zimowym",
    categorySlug: "prostowanie-felg",
    categoryName: "Prostowanie felg",
    // slug: "prostowanie-opel-astra",
    image: {
      src: "/1.jpeg",
      alt: "Prostowanie felg BMW E90",
    },
    imageAfter: {
      src: "/2.jpeg",
      alt: "Felga Audi RS3 po malowaniu proszkowym",
    },
  },
];
