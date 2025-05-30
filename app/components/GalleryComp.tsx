import ButtonOne from "./ui/ButtonOne";
import Gallery from "./ui/Gallery";
import { galleryDataType } from "@/data/homepage";

type Props = {
  data: galleryDataType;
};
export default function GalleryComp({ data }: Props) {
  return (
    <section className="h-[70vh] min-h-[800px] w-full flex flex-col md:flex-row overflow-hidden bg-gradient-to-tr ">
      <div className="min-h-[35vh] py-8 md:px-8 flex w-full md:w-[38%] bg-gradient-to-bl from-[#181C1F] to-55% to-[#00000000] text-white z-20">
        <div className="px-6 md:px-10 flex justify-center flex-col max-w-screen-xl w-full mx-auto">
          <h1 className="capitalize font-bold   text-3xl md:text-4xl mb-2 text-gold-gradient">
            {data.galleryHeader}
          </h1>
          <p className=" text-md md:text-lg md:max-w-[90%] mb-6 text-gray-200 font-light">
            {data.galleryParagraph}
          </p>
          <div className="flex space-x-5">
            <ButtonOne className="" href="/realizacje">
              {data.galleryButtonText}
            </ButtonOne>
          </div>
        </div>
      </div>

      <div className="relative w-full md:w-[65%] min-h-[500px]">
        <Gallery images={data.galleryImage} />
      </div>
    </section>
  );
}
