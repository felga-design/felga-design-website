import Image from "next/image";

type Props = {
  data: {
    header: string;
    image: string;
    alt: string;
  };
};

export default function BannerMinRight({ data }: Props) {
  return (
    <>
      <div className="hidden md:block relative w-full h-44 overflow-hidden">
        <div className="bg-gradient-to-b from-[#000000c0] to-[#0000] absolute w-full h-full z-5"></div>
        <Image
          src={data.image}
          alt={data.alt}
          width={700}
          height={700}
          className="absolute top-0 right-0 w-1/2 h-full object-cover z-0"
        />

        <div className="absolute top-0 left-0 h-full w-[70%] bg-gold-gradient-horizon clip-diagonal text-white px-6 flex items-center z-10">
          <p className="text-sm pl-6 md:pl-0  md:text-base absolute right-10 mr-10 max-w-[80%] text-shadow-2xs font-semibold leading-relaxed">
            {data.header}
          </p>
        </div>
      </div>
    </>
  );
}
