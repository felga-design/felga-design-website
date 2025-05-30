import { FaStar } from "react-icons/fa";
import Image from "next/image";
import ButtonOne from "./ui/ButtonOne";

type Props = {
  data: {
    opinionHeader: string;
    opinionParagraph: string;
  };
};

export const dynamic = "force-dynamic";
export default async function OpinionComp({ data }: Props) {
  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="px-8 min-h-[150px] md:min-h-[25vh] py-12 flex w-full flex-col md:flex-row ">
        <div className="flex justify-center flex-col z-20 md:w-[60%] max-w-screen-xl">
          <h1 className="capitalize font-bold  text-3xl md:text-4xl mb-2 text-gold-gradient">
            {data.opinionHeader}
          </h1>
          <p className="text-md  md:text-lg md:max-w-[80%] mb-6 text-gray-200 font-light">
            {data.opinionParagraph}
          </p>
          {/* <div className="flex space-x-5">
            <ButtonOne href="/oferta">Zobacz naszą pełną ofertę</ButtonOne>
          </div> */}
        </div>
        <div className="flex flex-col md:w-[30%] items-center  justify-around  mx-auto">
          <Image
            src="/google.png"
            width={200}
            height={200}
            alt=""
            className="p-4"
          />
          <ButtonOne
            className="max-w-fit px-5 md:px-10"
            href="https://www.google.com/search?sa=X&sca_esv=9bb6a8d79ae60b0c&rlz=1C5CHFA_enPL1074PL1074&biw=1680&bih=938&tbm=lcl&sxsrf=AE3TifOWKOcceSf5owfKnkKa3cyZkPXSMw:1748437080567&q=felga%20design%20opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIyMjIzNrAwN7QwMzU3NzO2MDHZwMj4ilE4LTUnPVEhJbU4Mz1PIb8gMy8zdRErNlEAcb2O90UAAAA&rldimm=226308718657763844&hl=pl-PL&ved=0CAcQ5foLahcKEwjIwqbZm8aNAxUAAAAAHQAAAAAQBQ#lkt=LocalPoiReviews&arid=ChZDSUhNMG9nS0VJQ0FnSUR2X0xIU1dBEAE&lrd=0x4711326dde6aecb3:0x3240294a12b7a04,3,,,,"
            target="_blank"
          >
            Przeczytaj wszystkie opinie
          </ButtonOne>
        </div>
      </div>
      <div className="pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full">
          {/* Opinion 1 */}
          <div className="group relative w-[94%] mx-auto h-[250px] md:w-[400px] rounded-[2px]  border-t-2 border-[#cfd6e20e] bg-gradient-to-tr from-[#252A30] from-45% to-[#181C1F] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#171b1f] hover:scale-101 hover:-translate-y-1 transition-all duration-300">
            <div className="w-[7px] h-[100px] bg-gold-gradient absolute rotate-135 right-4  -top-5" />
            <Image
              src="/opinie/krzysztof-f.png"
              alt="Opinia z Google Firmy Felga Design Krzysztofa K."
              height={45}
              width={45}
              className="absolute inset-0 w-[45px] h-[45px] left-6 top-14 rounded-full object-cover"
            />
            <div className="space-x-1 flex left-6 top-6 absolute">
              <FaStar size={20} className="text-white" />
              <FaStar size={20} className="text-white" />
              <FaStar size={20} className="text-white" />
              <FaStar size={20} className="text-white" />
              <FaStar size={20} className="text-white" />
            </div>

            <div className="absolute bottom-6 right-6 left-6 z-30 duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">
                Krzysztof F.
              </h3>
              <p className="text-white text-sm ">
                Oddałem do polakierowania felgi z Jeepa SRT i naprawdę jestem
                pod wrażeniem mistrzowska robota.{" "}
                <strong>Jakość perfekcyjna, szybki termin, tanio</strong> i
                bardzo dobry kontakt z właścicielem.
              </p>
            </div>
          </div>

          {/* Opinion 2  */}

          <div className="group relative w-[94%] mx-auto h-[260px] md:w-[400px] rounded-[2px]  border-t-2 border-[#cfd6e20e] bg-gradient-to-tr from-[#252A30] from-45% to-[#181C1F] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#171b1f] md:scale-105 hover:scale-101 md:hover:scale-106 hover:-translate-y-3 -translate-y-1 transition-all duration-300">
            <div className="w-[7px] h-[100px] bg-gold-gradient absolute rotate-135 right-4 -top-5" />
            <Image
              src="/opinie/dawid-g.png"
              alt="Opinia z Google Firmy Felga Design Dawida G."
              height={45}
              width={45}
              className="absolute inset-0 w-[45px] h-[45px] left-6 top-14 rounded-full object-cover"
            />
            <div className="space-x-1 flex left-6 top-6 absolute">
              <FaStar size={20} className="text-white" />
              <FaStar size={20} className="text-white" />
              <FaStar size={20} className="text-white" />
              <FaStar size={20} className="text-white" />
              <FaStar size={20} className="text-white" />
            </div>

            {/* <div className="absolute z-10 bg-gradient-to-t from-[#00000099] pointer-events-none w-full h-full text-white" /> */}
            {/* Static text (optional title always visible) */}
            <div className="absolute bottom-6 left-6 right-6 z-30 duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">
                Dawid G.
              </h3>
              <p className="text-white text-sm ">
                Jestem dość trudnym klientem i zawracałem głowę czasem i kilka
                razy w ciągu dnia, a kontakt i podejście było zawsze na
                najwyższym poziomie!
                <strong> W 100% polecam</strong> i na bank wrócę z felgami na
                lato!
              </p>
            </div>
          </div>

          {/* Opinion 3 */}
          <div className="group relative w-[94%] mx-auto h-[245px] md:w-[400px] rounded-[2px]  border-t-2 border-[#cfd6e20e] bg-gradient-to-tr from-[#252A30] from-45% to-[#181C1F] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#171b1f]  hover:scale-101 -translate-y-1 hover:-translate-y-2 transition-all duration-300">
            <div className="w-[7px] h-[100px] bg-gold-gradient absolute rotate-135 right-4 -top-5" />
            <Image
              src="/opinie/krzysztof-k.png"
              alt="Felga"
              height={45}
              width={45}
              className="absolute inset-0 w-[45px] h-[45px] left-6 top-14 rounded-full object-cover"
            />
            <div className="space-x-1 flex left-6 top-6 absolute">
              <FaStar size={20} className="text-white" />
              <FaStar size={20} className="text-white" />
              <FaStar size={20} className="text-white" />
              <FaStar size={20} className="text-white" />
              <FaStar size={20} className="text-white" />
            </div>

            {/* <div className="absolute z-10 bg-gradient-to-t from-[#00000099] pointer-events-none w-full h-full text-white" /> */}
            {/* Static text (optional title always visible) */}
            <div className="absolute bottom-8 right-6 left-6 z-30 duration-300">
              <h3 className="text-xl font-semibold text-white mb-2">
                Krzysztof K.
              </h3>
              <p className="text-white text-sm ">
                Mega profesjonalna robota. Felgi po pełnej regeneracji wyglądają
                chyba lepiej niż gdy były nowe. Co ważne
                <strong> perfekcyjnie wyważone i wyprostowane.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
