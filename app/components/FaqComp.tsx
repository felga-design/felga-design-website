import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type Props = {
  data: {
    faqHeader: string;
    faqParagraph: string;
    faqs: {
      question: string;
      answer: string;
    }[];
  };
};

export default function FaqComp({ data }: Props) {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="px-8 min-h-[150px] md:min-h-[25vh] py-8 flex w-full flex-col md:flex-row ">
        <div className="flex justify-center flex-col z-20 md:w-[60%] max-w-screen-xl">
          <h1 className="capitalize font-bold  text-3xl md:text-4xl mb-2 text-gold-gradient ">
            {data.faqHeader}
          </h1>
          <p className="text-md md:text-lg md:max-w-[80%] mb-6 text-gray-200 font-light">
            {data.faqParagraph}
          </p>
        </div>
      </div>
      <div className="w-full mb-12">
        <Accordion
          type="single"
          collapsible
          className="border-[#cfd6e20e] mx-6 md:mx-0 bg-gradient-to-tr from-[#252A30] from-45% to-[#181C1F] overflow-hidden shadow-2xl   text-white rounded-[1px]"
        >
          {data.faqs.map((el, i) => (
            <AccordionItem key={i} value={`item-${i + 1}`} className="px-4">
              <AccordionTrigger className="text-md">
                {el.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm">
                {el.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
