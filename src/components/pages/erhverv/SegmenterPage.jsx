import Button from "../../ui/buttons/Button";
import Doodle1 from "../../svg/Doodle1";
import ImageWrapper from "../../wrappers/ImageWrapper";
import PageWrapper from "../../wrappers/PageWrapper";
import tilbud from "../../../assets/tilbud.jpg";
import Accordion from "../../ui/atoms/Accordion";
import { segmenter1, segmenter2 } from "../../../staticData";

// Segmenter siden med indhold fra staticData.js
export default function SegmenterPage() {
  return (
    <PageWrapper
      breadcrumb={true}
      title="Skræddersyede parkeringsløsninger til alle erhverv - ParkZone Danmark"
      metaDescription="Opdag vores skræddersyede parkeringsløsninger til erhvervslivet. Vi administrerer parkering fra beboelse og hoteller til shoppingcentre og lufthavne. Kontakt os for skræddersyede løsninger"
    >
      <div className="relative mx-5 py-10 md:mx-10 md:pb-20 xl:mx-20 3xl:mx-40 3xl:pb-32">
        <div className="mx-auto h-fit w-full max-w-screen-3xl overflow-hidden rounded-2xl bg-sky-100 pt-12 sm:pb-10 lg:pb-10 lg:pr-0 xl:py-20">
          <div className="relative flex flex-col lg:flex-row">
            <div className="relative z-40 flex flex-col justify-center px-5 pb-10 sm:px-10 lg:w-full lg:pb-0 xl:ml-14 4xl:py-16 4xl:pl-20 4xl:pr-28">
              <h2 className="font-h1 lg:font-h2 2xl:font-h1 pb-8 text-center lg:text-left 2xl:pb-12">
                Skræddersyede løsninger til alle erhverv
              </h2>
              <p className="font-body-l  pb-8 text-center lg:text-left">
                Med en daglig administration af ca. 150.000 p-pladser fordelt
                over hele landet er vi et af de førende parkeringsselskaber i
                Danmark. Vi har stor erfaring med at levere løsninger og
                administrere parkering af alt lige fra beboelse og hoteller, til
                shoppingcentre og lufthavne.
              </p>
              <div className="flex flex-col items-center justify-center space-y-5 sm:flex-row sm:space-x-5 sm:space-y-0 lg:justify-start 2xl:pt-8">
                <Button size={"lg"} variant={"primary"} to="/erhverv/kontakt">
                  Kontakt os
                </Button>
                <Button size={"lg"} variant={"tertiary"} to="/erhverv/produkter">
                  Se produkter
                </Button>
              </div>
            </div>
            <div className="absolute -right-10 top-0 rotate-12 scale-200  md:-left-5 md:-right-0 md:-top-60 md:-rotate-45 lg:-top-40 lg:w-1/2 xl:-top-64 xl:left-40 xl:scale-250">
              <Doodle1 color="#EDF6FD" />
            </div>
            <div className="absolute -bottom-full -left-20 -rotate-45 scale-200 md:-right-0 md:left-auto md:rotate-30 xl:-right-5 xl:top-96">
              <Doodle1 color="#EDF6FD" />
            </div>
            <ImageWrapper
              image={tilbud}
              size="md"
              alt="Oplæg om parkingsløsning"
              className="relative ml-5 self-end rounded-r-none sm:ml-10 md:rounded-r-none lg:h-80 lg:w-9/12 lg:place-self-center lg:rounded-r-none xl:w-full 2xl:h-full"
            />
          </div>
          <div className="relative z-40 w-full px-5 pt-10 sm:px-16 sm:pt-14 md:px-24 lg:flex lg:space-x-5 lg:px-20 lg:pt-20 xl:px-24 xl:pt-28 2xl:px-36 4xl:px-60">
            <div className="grid h-min w-full grid-cols-1">
              {/* Mapper gennem segmenter1 data fra staticData.json og laver en Accordion for hvert segment. Dataene opdeles i to forskellige mappings for at sikre layoutet når en Accordian åbnes */}
              {segmenter1.map((segmenter, index) => (
                <div key={index} className="flex w-full justify-center">
                  <Accordion
                    title={segmenter.title}
                    body={segmenter.body}
                    color="bg-white"
                  />
                </div>
              ))}
            </div>
            <div className="grid h-min w-full grid-cols-1">
              {/* Mapper gennem segmenter2 data fra staticData.json og laver en Accordion for hvert segment */}
              {segmenter2.map((segmenter, index) => (
                <div key={index} className="flex w-full justify-center">
                  <Accordion
                    title={segmenter.title}
                    body={segmenter.body}
                    color="bg-white"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
