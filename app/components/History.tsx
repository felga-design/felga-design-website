import { historyDataProps } from "@/data/homepage";
import Image from "next/image";
type Props = {
  data: historyDataProps;
};

export default function History({ data }: Props) {
  return (
    <section className="min-h-fit h-screen flex items-center justify-center relative bg-gradient-to-r from-[#181c1f8e] via-50% via-[#08090a] to-[#0f1214] text-white py-24 px-4 md:px-10 overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="px-2 w-full md:w-[60%] z-10">
          <h2 className="text-4xl font-light mb-12">{data.historyHeader}</h2>
          <div className="space-y-10">
            {data.yearsData.map((entry) => (
              <div key={entry.id}>
                <h3 className="text-2xl font-medium mb-2">{entry.year}</h3>
                <p className="text-white/80 leading-relaxed">
                  {entry.paragraph}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block w-[40%] z-10">
          <Image
            src={data.historyImage}
            alt={data.historyImageAlt}
            height={600}
            width={400}
            className="min-h-[600px] w-full object-cover mx-auto shadow-2xl rounded-[2px]"
          />
        </div>

        <div className="absolute inset-0 -z-10">
          <Image
            src={data.historyImage2 || ""}
            alt={data.historyImage2Alt}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
