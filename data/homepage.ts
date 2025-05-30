export type HomePageData = {
  introHeader: string;
  introParagraph: string;
  buttonOne: string;
  buttonOneHref: string;
  buttonTwo: string;
  buttonTwoHref: string;
  bgImages: { src: string; alt: string }[];
};

type historyDataArrayProps = {
  id: number;
  year: string;
  paragraph: string;
};
export type historyDataProps = {
  historyHeader: string;
  historyImage: string;
  historyImageAlt: string;
  historyImage2: string;
  historyImage2Alt: string;
  yearsData: historyDataArrayProps[];
};

export type galleryImageType = {
  src: string;
  alt: string;
};

export type galleryDataType = {
  galleryHeader: string;
  galleryParagraph: string;
  // galleryButtonHref: string;
  galleryButtonText: string;
  galleryImage: galleryImageType[];
};

export const homeData: HomePageData = {
  introHeader: "Naprawa i renowacja felg",
  introParagraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam felis augue, rutrum et diam a, hendrerit dapibus lectus. Integer scelerisque ut augue at pulvinar.",
  buttonOne: "Wycena",
  buttonOneHref: "/kontakt",
  buttonTwo: "Usługi",
  buttonTwoHref: "/uslugi",
  bgImages: [
    { src: "/1.jpeg", alt: "siema" },
    { src: "/2.jpeg", alt: "asd" },
  ],
};

/// uslugi

export const servicesDataHome = {
  servicesHeader: "Nasze usługi",
  servicesParagraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  // servicesButtonHref: "/uslugi",
  servicesButtonText: "Zobacz naszą ofertę",
  servicesImage: "/3.jpeg",
  servicesImageAlt: "hej",
};

//podliczenie

export const countUpData = {
  years: 10,
  jobs: 10,
  clients: 10,
};

// Historia

export const historyData: historyDataProps = {
  historyHeader: "Historia działalności Felga Design",
  historyImage: "/1.jpeg",
  historyImageAlt: "",
  historyImage2: "/1.jpeg",
  historyImage2Alt: "",
  yearsData: [
    {
      id: 1,
      year: "Rok 2008",
      paragraph:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      year: "Rok 2010",
      paragraph:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      year: "Rok 2015",
      paragraph:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      year: "Rok 2016",
      paragraph:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ],
};

//Baner

//Galeria

export const galleryData: galleryDataType = {
  galleryHeader: "Galeria Realizacji",
  galleryParagraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  // galleryButtonHref: "/realizacje",
  galleryButtonText: "Zobacz nasze realizacje",
  galleryImage: [
    {
      src: "/1.jpeg",
      alt: "/",
    },
    {
      src: "/2.jpeg",
      alt: "/",
    },
  ],
};

// Blog

export const BlogData = {
  blogHeader: "Strefa Wiedzy",
  blogParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  // blogButtonHref: "/strefa-wiedzy",
  blogButtonText: "Przeczytaj więcej",
};

//opinie

export const OpinionData = {
  opinionHeader: "Opinie naszych klientów",
  opinionParagraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
};

// faq

export const faqData = {
  faqHeader: "FAQ",
  faqParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  faqs: [
    {
      question: "Is it x?",
      answer: "Yes it is",
    },
    {
      question: "Is it x?",
      answer: "Yes it is",
    },
    {
      question: "Is it x?",
      answer: "Yes it is",
    },
  ],
};
