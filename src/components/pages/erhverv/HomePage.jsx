import Button from "../../ui/buttons/Button";
import PageWrapper from "../../wrappers/PageWrapper";
import laptop from "../../../assets/laptop.png";
import ImageWrapper from "../../wrappers/ImageWrapper";
import card from "../../../assets/kort.jpg";
import Check from "../../ui/atoms/Check";
import Newsletter from "../../ui/atoms/Newsletter";
import nyhed from "../../../assets/nyhedsbrev.jpg";
import Category from "../../ui/atoms/Category";
import { useNavigate } from "react-router-dom";

// Homepage for erhverv
export default function HomePageErhverv() {
  const navigate = useNavigate();

  const navigateToTab = (tabIndex) => {
    navigate(`/erhverv/produkter?tab=${tabIndex}`);
  };

  return (
    <PageWrapper
      breadcrumb={false}
      title="Effektiviser og optimer jeres virksomhed med ParkCare"
      metaDescription="Med vores digitale p-tilladelsessystem, ParkCare, sparer du tid og omkostninger på parkeringsadministration. Læs mere om vores skræddersyede parkeringsløsninger og tjenester til erhvervskunder."
    >
      <div className="relative overflow-hidden pb-20 sm:pb-28  lg:flex lg:items-center lg:pb-60 lg:pt-24 xl:pt-32 3xl:pt-44 4xl:pt-60">
            <div className="flex w-full flex-col items-center px-5 pb-10 lg:items-start lg:px-0 lg:py-0 lg:pl-20 lg:w-1/2 shrink">
              <Category color="lightBlue">Parkeringsløsning</Category>
              <div className="">
                <h1 className="font-h2 pb-8 pt-2 text-center md:text-left lg:pb-12">
                  Effektiviser og optimer jeres virksomhed med ParkCare
                </h1>
                <p className="font-body-md lg:font-body-l mb-auto hyphens-auto pb-10 text-center sm:px-20 md:px-0 md:text-left">
                  Med vores digitale p-tilladelsessystem ParkCare sparer I tid
                  og omkostninger på parkeringsadministration. Samtidig sikrer I
                  nem og smidig parkering for dem, der skal parkere på jeres
                  parkeringsområde. Læs mere om ParkCare samt vores andre
                  parkeringsløsninger på siden Produkter & services.
                </p>
              </div>
              <Button
                size="lg"
                variant="primary"
                icon={true}
                onClick={() => navigateToTab(2)}
              >
                Læs mere
              </Button>
            </div>
          <div className="lg:w-1/2 shrink-0"><img src={laptop} alt="" className="px-5 h-auto w-full sm:px-10 "/></div>
      </div>
      <div className="mb-10 bg-marine-900 px-5 py-20">
        <h2 className="font-h5 pb-9 text-center text-white sm:px-28 md:px-0">
          Firmaer i hele landet stoler på os til administrering af deres
          parkeringsanlæg
        </h2>
        <div className="mx-auto grid max-w-screen-3xl grid-cols-2 items-center justify-items-center space-y-8 md:space-y-12 md:px-16 lg:flex lg:justify-between lg:space-y-0 lg:px-5 2xl:px-20">
          <div>
            <p className="font-h3 font-bold text-gray-400">FIRMALOGO</p>
          </div>
          <div className="w-fit">
            <p className="font-body-s bg-gray-400 px-5 py-4 font-bold text-marine-900 text-3xl">
              LOGO
            </p>
          </div>
          <div>
            <div>
              <p className="font-body-md font-normal text-gray-400">et andet</p>
              <p className="font-h3 font-extrabold text-gray-400">LOGO</p>
            </div>
          </div>
          <div>
            <p className="font-h3 italic text-gray-400">Firmalogo</p>
          </div>
          <div>
            <div className="flex size-16 flex-col items-center justify-center rounded-full bg-gray-400">
              <p className="font-body-s pb-1 font-bold text-marine-900">
                firma
              </p>
              <p className="font-body-s font-bold text-marine-900">logo</p>
            </div>
          </div>
          <div>
            <p className="font-h1 flex pb-3 align-text-bottom font-bold text-gray-400">
              <span className="font-body-l place-self-end pb-1 pr-1 text-gray-400 text-3xl">
                et
              </span>{" "}
              logo
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 sm:py-24 lg:py-28 lg:pb-40 xl:pb-48 3xl:pb-44">
        <div className="px-5 pb-10 sm:px-10 sm:pb-16">
          <h2 className="font-h1 pb-8 text-center sm:px-10">
            Derfor stoler vores kunder på os
          </h2>
          <p className="font-body-md text-center lg:px-24 2xl:px-52 4xl:px-96">
            ParkZone er din pålidelige partner inden for
            parkeringsadministration. Med over 20 års erfaring tilbyder vi
            skræddersyede og brugervenlige parkeringsløsninger, der matcher
            vores kunders unikke behov. Vores fokus på åben kommunikation,
            kundetilfredshed og kvalitet sikrer en problemfri og tillidsfuld
            oplevelse for alle vores kunder.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center 3xl:pr-10">
          <ImageWrapper
            image={card}
            size="lg"
            color="#4A8CED"
            alt="Kvinde kørende i bil"
            className="relative mr-5 w-full self-end sm:mr-10 md:rounded-l-none lg:h-96 lg:place-self-center lg:rounded-l-none xl:h-full "
          />
          <div className="flex flex-col items-center justify-center space-y-10 px-5 pt-10 sm:space-y-14 sm:px-20 sm:pt-16 md:px-28 lg:space-y-8 lg:px-0 lg:pr-10 lg:pt-0 xl:w-11/12 2xl:space-y-10 3xl:space-y-14 3xl:px-10 4xl:px-20">
            <Check text="Med mere end 20 års erfaring som parkeringsvirksomhed, har vi i ParkZone opbygget en solid ekspertise og erfaring, som vores kunder ved de kan stole på." />
            <Check text="Vi tilbyder brugervenlige parkeringsløsninger tilpasset hver enkelt kundes behov, så vores kunder aldrig skal gå på kompromis med deres ønsker." />
            <Check text="Vi prioriterer åben kommunikation og transparens, så vores kunder føler sig informeret og involveret i processen." />
            <Check text="Vi sætter en ære i at levere kundeservice i topklasse. Vores dedikerede team er altid klar til at lytte til vores kunders behov og yde den nødvendige support." />
            <Check text="Hos ParkZone går vi aldrig på kompromis med kvaliteten af vores tjenester. Vores kunder ved, at de kan regne med os til at levere pålidelige og effektive parkeringsløsninger." />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center bg-marine-900 px-10 py-20 lg:flex-row lg:py-10 2xl:px-14 2xl:py-14 3xl:px-28 4xl:px-40">
        <h3 className="font-h3 lg:font-h5 xl:font-h4 pb-10 text-center text-gray-400 lg:pb-0 lg:pr-10 lg:text-left lg:text-gray-400 2xl:pr-40 4xl:w-1/2">
          Med +20 års erfaring er vi en af de førende virksomheder indenfor
          <span className="text-white"> administrering af parkering</span>
        </h3>
        <div className="px-10 sm:px-40 md:flex md:px-0 md:pt-10 lg:pt-0">
          <div className="flex w-full flex-col items-center border-b-1 border-marine-700 pb-14 md:border-b-0 md:border-r-1 md:pb-5 md:pr-5 lg:pr-8 xl:pr-12 2xl:pr-16">
            <p className="uppercase text-white font-mundial text-7xl capsize md:text-6xl">
              2<span className="text-sky-300">k+</span>
            </p>
            <p className="font-h4 lg:font-h5 text-center text-gray-400 lg:text-gray-400">
              parkeringsområder administreret af os
            </p>
          </div>
          <div className="flex w-full flex-col items-center border-b-1 border-marine-700 pb-14 pt-8 md:border-b-0 md:border-r-1 md:px-5 md:py-0 lg:px-8 xl:px-12 2xl:px-16">
            <p className="uppercase text-white font-mundial text-7xl capsize md:text-6xl">
              180<span className="text-sky-300">k+</span>
            </p>
            <p className="font-h4 lg:font-h5 text-center text-gray-400 lg:text-gray-400">
              individuelle parkeringspladser
            </p>
          </div>
          <div className="flex w-full flex-col items-center border-b-1 border-marine-700 pb-14 pt-8 md:border-b-0 md:py-0 md:pl-5 lg:pl-8 xl:pl-12 2xl:pl-16">
            <p className="uppercase text-white font-mundial text-7xl capsize md:text-6xl">
              4.3<span className="text-sky-300">m+</span>
            </p>
            <p className="font-h4 lg:font-h5 text-center text-gray-400 lg:text-gray-400">
              udstedte parkeringstilladelser
            </p>
          </div>
        </div>
      </div>
      <div className="flex max-w-screen-3xl flex-col px-5 py-16 pt-20 md:px-20 lg:flex-row lg:items-center lg:pb-28 lg:pt-40 xl:mx-auto xl:px-40 2xl:w-full 3xl:px-28">
        <div className="flex flex-col items-center pb-10 sm:px-10 lg:w-11/12 lg:items-start lg:px-0 lg:pb-0 lg:pr-10 xl:w-8/12 3xl:w-6/12">
          <h4 className="font-h2 pb-8 text-center lg:text-left">
            Hold jer opdateret på de seneste nyheder
          </h4>
          <p className="font-body-l pb-10 text-center lg:text-left">
            Tilmeld jer vores nyhedsbrev og modtag eksklusive nyheder, spændende
            tilbud og inspirerende indhold direkte i din inbox.
          </p>
          <Newsletter />
        </div>
        <ImageWrapper
          alt="Kvinde parkerer ved ladestander"
          size="lg"
          image={nyhed}
        />
      </div>
    </PageWrapper>
  );
}
