import Button from "../../components/buttons/Button";
import Hero from "../../components/sections/Hero";
import PageWrapper from "../../components/wrappers/PageWrapper";
import laptop from "../../assets/laptop.png";
import ImageWrapper from "../../components/wrappers/ImageWrapper";
import card from "../../assets/kort.jpg";
import Check from "../../components/atoms/Check";

export default function HomePageErhverv() {
  return (
    <PageWrapper breadcrumb={false}>
      <div className=" relative overflow-hidden pb-10 sm:pb-16 md:flex lg:py-24 xl:py-32 3xl:py-44 4xl:py-60">
        <div className="md:place-self-center md:pr-20 xl:w-11/12   xl:pl-20  4xl:w-10/12">
          <Hero
            color="lightBlue"
            category="Parkeringsløsning"
            title="Effektiviser og optimer jeres virksomhed med ParkCare"
            body="Med vores digitale p-tilladelsessystem ParkCare sparer I tid og omkostninger på parkeringsadministration. Samtidig sikrer I nem og smidig parkering for dem, der skal parkere på jeres parkeringsområde. "
          >
            <Button size="lg" variant="primary" icon={true}>
              Læs mere
            </Button>
          </Hero>
        </div>
        <div className="relative h-full w-full ">
          <ImageWrapper
            image={laptop}
            alt="ParkWeb"
            className="px-5 sm:px-10 md:absolute md:-left-32 md:-right-96 md:top-16 md:px-0 lg:-right-72 lg:-top-10 xl:-left-16 2xl:-left-5 2xl:-right-32 3xl:-top-16 4xl:-right-60 4xl:-top-36 4xl:left-40"
          />
        </div>
      </div>
      <div className="mb-10 mt-44 bg-marine-900 py-20">
        <h2 className="font-h5 pb-9 text-center text-white">
          Firmaer i hele landet stoler på os til administrering af deres
          parkeringsanlæg
        </h2>
        <div className="flex items-center justify-center space-x-20">
          <div>
            <p className="font-h3 font-bold text-gray-400">FIRMALOGO</p>
          </div>
          <div className="bg-gray-400 px-5 py-4">
            <p className="font-body-s font-bold text-marine-900 text-3xl">
              LOGO
            </p>
          </div>
          <div>
            <p className="font-body-md font-normal text-gray-400">et andet</p>
            <p className="font-h3 font-extrabold text-gray-400">LOGO</p>
          </div>
          <div>
            <p className="font-h3 italic text-gray-400">Firmalogo</p>
          </div>

          <div className="flex size-16 items-center justify-center rounded-full bg-gray-400">
            <div>
              <p className="font-body-s pb-1 font-bold text-marine-900">
                firma
              </p>
              <p className="font-body-s font-bold text-marine-900">logo</p>
            </div>
          </div>
          <div>
            <p className="font-h3 flex font-bold text-gray-400">
              <span className="font-body-l pr- pt-3 text-gray-400 text-4xl">
                et
              </span>{" "}
              logo
            </p>
          </div>
        </div>
      </div>
      <div className="py-16 sm:py-24 lg:py-28 3xl:pb-44">
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
            className="relative mr-5 w-full self-end sm:mr-10 md:rounded-l-none lg:h-96 lg:place-self-center xl:h-full "
          />
          <div className="flex flex-col items-center justify-center space-y-10 px-5 pt-10 sm:space-y-14 sm:px-20 sm:pt-16 md:px-28 lg:space-y-8 lg:px-0 lg:pr-10 lg:pt-0 xl:w-11/12 2xl:space-y-10 3xl:space-y-14">
            <Check text="Med mere end 20 års erfaring som parkeringsvirksomhed, har vi i ParkZone opbygget en solid ekspertise og erfaring, som vores kunder ved de kan stole på." />
            <Check text="Vi tilbyder brugervenlige parkeringsløsninger tilpasset hver enkelt kundes behov, så vores kunder aldrig skal gå på kompromis med deres ønsker." />
            <Check text="Vi prioriterer åben kommunikation og transparens, så vores kunder føler sig informeret og involveret i processen." />
            <Check text="Vi sætter en ære i at levere kundeservice i topklasse. Vores dedikerede team er altid klar til at lytte til vores kunders behov og yde den nødvendige support." />
            <Check text="Hos ParkZone går vi aldrig på kompromis med kvaliteten af vores tjenester. Vores kunder ved, at de kan regne med os til at levere pålidelige og effektive parkeringsløsninger." />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center bg-marine-900 px-10 py-20 lg:flex-row lg:py-10 2xl:mb-40 2xl:px-14 2xl:py-14">
        <h3 className="font-h3 lg:font-h4 xl:font-h3 pb-10 text-center text-marine-200 lg:pb-0 lg:pr-10 lg:text-left lg:text-marine-200 2xl:pr-40">
          Med +20 års erfaring er vi en af de førende virksomheder indenfor
          <span className="text-white"> administrering af parkering</span>
        </h3>
        <div className="px-10 sm:px-40 md:flex md:px-0 ">
          <div className="flex w-full flex-col items-center border-b-1 border-marine-700 pb-14 md:border-b-0 md:border-r-1 md:pb-5 md:pr-5 lg:pr-8 xl:pr-12 2xl:pr-16">
            <p className="uppercase text-white font-mundial text-7xl capsize md:text-6xl">
              2<span className="text-sky-400">k+</span>
            </p>
            <p className="font-h4 text-center text-marine-200">
              parkeringsområder administreret af os
            </p>
          </div>
          <div className="flex w-full flex-col items-center border-b-1 border-marine-700 pb-14 pt-8 md:border-b-0 md:border-r-1 md:px-5 md:py-0 lg:px-8 xl:px-12 2xl:px-16">
            <p className="uppercase text-white font-mundial text-7xl capsize md:text-6xl">
              180<span className="text-sky-400">k+</span>
            </p>
            <p className="font-h4 text-center text-marine-200">
              individuelle parkeringspladser
            </p>
          </div>
          <div className="flex w-full flex-col items-center border-b-1 border-marine-700 pb-14 pt-8 md:border-b-0 md:py-0 md:pl-5 lg:pl-8 xl:pl-12 2xl:pl-16">
            <p className="uppercase text-white font-mundial text-7xl capsize md:text-6xl">
              4.3<span className="text-sky-400">m+</span>
            </p>
            <p className="font-h4 text-center text-marine-200">
              udstedte parkeringstilladelser
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
