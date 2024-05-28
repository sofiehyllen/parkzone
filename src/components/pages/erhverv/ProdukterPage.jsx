import Tabs from "../../ui/sections/Tabs";
import PageWrapper from "../../wrappers/PageWrapper";
import talking from "../../../assets/talking.jpg";
import Doodle1 from "../../svg/Doodle1";
import Doodle6 from "../../svg/Doodle6";
import { tabs } from "../../../staticData";
import Button from "../../ui/buttons/Button";

// Siden for Produkter & Services med indhold fra staticData.js
export default function ProdukterPage() {
  return (
    <PageWrapper breadcrumb={true}>
      <div className="w-full sm:pb-16 md:pt-10">
        <div className="flex px-5 pb-16 sm:px-10 md:px-20 md:pb-20 3xl:pb-32">
          <div className="mx-auto">
            <div className="relative mx-auto w-fit">
              <h1 className="font-h1 relative z-40 mx-auto w-fit max-w-screen-md pb-16 text-center md:px-14 ">
                Produkter og services tilpasset jeres behov
              </h1>
              <div className="xl:right-50 absolute right-12 top-24 w-96 sm:top-16 md:right-20 md:top-16 lg:right-36">
                <Doodle6 color="#DBE9FD" />
              </div>
            </div>
            <p className="font-body-l mx-auto max-w-screen-lg pb-7 text-center xl:px-20">
              Vores parkeringsløsninger er udviklet i et tæt samarbejde med
              vores kunder for at imødekomme deres unikke behov. Vores team
              hjælper jer med at afdække jeres behov og sammensætte den løsning,
              der skaber mest værdi for jer og jeres parkerende. Læs om alle
              produkter og services vi tilbyder herunder.
            </p>
            <p className="font-body-l mx-auto max-w-screen-lg text-center xl:px-20">
              Vi har løbende udvidet vores produktportefølje for at skabe
              merværdi for vores kunder - senest med facility service,
              sikkerhedsvagter samt brandsikring, førstehjælp og hjertestartere.
              Læs om det, samt vores andre services herunder.
            </p>
          </div>
        </div>
        {/* Selve indholdet findes i Tabs komponenten */}
        <Tabs tabs={tabs} />
        <div className="relative mx-5 pb-16 md:mx-10 md:pb-0 lg:mb-16 xl:mx-20 3xl:mx-40">
          <div className="sm:px-10 md:mr-10 md:px-0 xl:mr-20 3xl:mr-40 ">
            <div className="relative h-fit w-full overflow-hidden rounded-2xl bg-marine-300 px-10 py-12 md:px-10 md:py-14 xl:px-20 xl:py-20">
              <div className="relative z-40 md:w-1/2 md:pb-0">
                <h2 className="font-h2 pb-6 text-white lg:pr-3">
                  Klar til at modtage et uforpligtende tilbud?
                </h2>
                <p className="font-h5  pb-8 pr-12 text-white  md:pr-5 lg:pr-10">
                  Hvis du vil vide, hvordan vi kan hjælpe dig med at designe dit
                  parkeringsområde, så kontakt os i dag og få et uforpligtende
                  tilbud på en løsning til dig.
                </p>
                <Button size={"lg"} variant={"primary"} to="/erhverv/kontakt">
                  Kontakt os
                </Button>
              </div>
              <div className="absolute -right-10 top-40 h-72 rotate-12 md:-left-28 md:-right-0 md:top-52 md:h-96 md:w-96 md:-rotate-45 xl:-left-24 xl:top-32">
                <Doodle1 color="#B3CFF8" />
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-14 hidden h-96 w-1/2 md:block lg:h-full ">
            <img
              src={talking}
              alt="Snak i parkeringskælder"
              className="h-full w-full rounded-2xl object-cover object-center "
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
