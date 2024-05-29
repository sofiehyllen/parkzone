import Accordion from "../../ui/atoms/Accordion";
import Doodle7 from "../../svg/Doodle7";
import PageWrapper from "../../wrappers/PageWrapper";
import { FAQ1, FAQ2 } from "../../../staticData";

// FAQ-side med indhold fra staticData.js
export default function FAQPage() {
  return (
    <PageWrapper
      breadcrumb={true}
      title="Ofte Stillede Spørgsmål - ParkZone A/S"
      metaDescription="Har du spørgsmål? Find svar på de mest almindelige spørgsmål om parkering, betaling og mere på vores FAQ-side. Læs mere her."
    >
      <div className="relative mt-10 w-full overflow-hidden bg-sky-300">
        <h1 className="font-h1 relative z-50 px-10 py-20 text-center text-white lg:py-28">
          Hvordan kan vi hjælpe dig?
        </h1>
        <div className="absolute -left-32 bottom-4 w-[180%] sm:left-20 sm:w-9/12 sm:scale-150 md:bottom-0 xl:left-36 2xl:left-40">
          <Doodle7 color="#4FBAE8" />
        </div>
      </div>
      <div className="mb-10 w-full bg-sky-50 px-5 py-10 sm:px-16 md:px-24 md:py-20 lg:mb-16 lg:flex lg:space-x-5 lg:px-20 lg:py-28 xl:px-32 2xl:px-40 3xl:mb-24 3xl:px-72">
        <div className="grid h-min w-full grid-cols-1">
          {/* Mapper gennem FAQ1 data fra staticData.json og laver en Accordion for hver FAQ.  Dataene opdeles i to forskellige mappings for at sikre layoutet når en Accordian åbnes */}
          {FAQ1.map((FAQ1, index) => (
            <div key={index} className="flex w-full justify-center">
              <Accordion title={FAQ1.title} body={FAQ1.body} color="bg-white" />
            </div>
          ))}
        </div>
        <div className="grid h-min w-full grid-cols-1">
          {/* Mapper gennem FAQ2 data fra staticData.json og laver en Accordion for hver FAQ */}
          {FAQ2.map((FAQ2, index) => (
            <div key={index} className="flex w-full justify-center">
              <Accordion title={FAQ2.title} body={FAQ2.body} color="bg-white" />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
