import PageWrapper from "../../wrappers/PageWrapper";
import office from "../../../assets/office.jpg";
import Button from "../../ui/buttons/Button";
import ImageWrapper from "../../wrappers/ImageWrapper";
import { FaRegHeart } from "react-icons/fa6";
import { PiHandHeartBold } from "react-icons/pi";
import { IoBulbOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa6";
import { PiGearSixBold } from "react-icons/pi";
import Doodle1 from "../../svg/Doodle1";
import Doodle2 from "../../svg/Doodle2";

// Om os side
export default function OmOsPage() {
  return (
    <PageWrapper breadcrumb={true}>
      <div className="mx-auto flex w-fit flex-col items-center px-5 sm:px-10 lg:px-20">
        <h1 className="font-h1">Hvem er vi?</h1>
        <p className="font-body-l max-w-screen-md pb-10 pt-6 text-center sm:w-4/5 xl:pb-20">
          Hos ParkZone tilbyder vi brugervenlige løsninger, der forenkler
          parkering i din dagligdag. Med vores innovative teknologi stræber vi
          efter at levere førsteklasses parkeringstjenester, der gør parkering
          til en ubesværet oplevelse for alle.
        </p>
        <ImageWrapper
          color="#7AA9EF"
          alt="Kontorfællesskab"
          image={office}
          size="lg"
          className="max-w-screen-xl"
        />
      </div>
      <div className="mx-auto max-w-screen-xl px-14 pt-10 sm:px-36 md:px-10 md:pt-5 lg:px-12">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center space-y-7 pt-5 md:flex-row md:items-start md:space-y-0">
          <div className="flex flex-col items-center sm:px-10 md:w-full md:px-5 md:pl-0 xl:px-10">
            <h4 className="font-h4 pb-4 text-center">Søger du nyt job?</h4>
            <p className="font-body-md hyphens-auto text-center">
              Hos ParkZone er vi lige nu på jagt efter dygtige og engagerede
              kollegaer til vores team. Måske er det dig? Se vores ledige
              stillinger{" "}
              <span>
                <Button variant="link" size="lg">
                  her
                </Button>
                .
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center py-4 sm:px-10 sm:py-8 md:w-full md:px-5 md:py-0 xl:px-10">
            <h4 className="font-h4 pb-4 text-center">
              Vores persondatapolitik
            </h4>
            <p className="font-body-md hyphens-auto text-center">
              Din sikkerhed er vores topprioritet. Derfor passer vi på dine data
              med omhu. Læs vores{" "}
              <Button variant="link" size="lg">
                Persondatapolitik
              </Button>{" "}
              for at få mere at vide om, hvordan vi beskytter dine oplysninger.
            </p>
          </div>
          <div className="flex flex-col items-center sm:px-10 md:w-full md:px-5 md:pr-0 xl:px-10">
            <h4 className="font-h4 pb-4 text-center">
              Har du nogle spørgsmål?
            </h4>
            <p className="font-body-md hyphens-auto text-center">
              Vi ved parkeringsregler kan være forvirrende. Derfor har vi svaret
              på nogle af de spørgsmål man som kunde ofte kan sidde med. Læs dem{" "}
              <Button variant="link" size="lg" to="/privat/faq">
                her
              </Button>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-5 mt-20 flex max-w-screen-3xl flex-col overflow-hidden rounded-xl bg-marine-50 px-7 py-8 sm:px-12 sm:py-14 lg:mx-10 lg:flex-row lg:space-x-12 lg:px-16 xl:mx-20 xl:mt-28 2xl:mx-auto 3xl:space-x-20 3xl:px-20">
        <div className="relative z-40 w-full">
          <h3 className="font-h2 pb-6 lg:pb-10">Vores virksomhed</h3>
          <p className="font-body-l hyphens-auto text-justify">
            ParkZone er et danskejet parkeringsselskab med fokus på digitale
            parkeringsløsninger og med stærke kompetencer inden for
            parkeringsadministration, parkeringskontrol og rådgivning. ParkZone
            blev stiftet i 2003. Med en daglig administration af ca. 180.000
            p-pladser fordelt over hele landet er vi et af de førende
            parkeringsselskaber i Danmark.
          </p>
          <p className="font-body-l hyphens-auto pt-6 text-justify">
            Vi tilbyder innovative og fleksible parkeringsløsninger, der tager
            udgangspunkt i vores kunders unikke behov. Parkering skal være nemt,
            og det ligger i forlængelse af vores vision om at skabe de bedste
            parkeringsoplevelser, der letter hverdagen for den enkelte.
          </p>
        </div>
        <div className="relative z-40 pt-14 md:w-full lg:pt-0">
          <h3 className="font-h2 pb-6 lg:pb-10">Vi skaber plads</h3>
          <p className="font-body-l hyphens-auto text-justify">
            Vores slogan, <span className="font-normal">Vi skaber plads</span>,
            er kernen i vores arbejde. Vi skaber plads til, at de, der skal
            parkere, har mulighed for det. Vi skaber plads til, at vores
            samarbejdspartnere kan fokusere på andet end
            parkeringsadministration.
          </p>
          <p className="font-body-l hyphens-auto pt-6 text-justify">
            Med de mest innovative og kundevenlige parkeringsløsninger på
            markedet sikrer vi en effektiv administration af jeres område. Det
            frigiver tid til, at vores samarbejdspartnere kan fokusere på deres
            kernekompetencer. Det sikrer, at brugerne af vores pladser nemt kan
            parkere.
          </p>
        </div>
        <div className="md: md: absolute -right-10 top-20 rotate-12 sm:scale-150 md:-right-0 md:-rotate-45 lg:-top-40 lg:w-1/2 xl:-left-20 xl:-top-40 2xl:-left-0 2xl:scale-180">
          <Doodle1 color="#DBE9FD" />
        </div>
        <div className="lg: absolute -bottom-28 -left-10 -rotate-12 sm:scale-150 md:-bottom-40 md:left-0 md:-rotate-120 lg:-left-40 xl:-left-0 xl:bottom-52 xl:right-52 xl:scale-180 2xl:bottom-96">
          <Doodle2 color="#DBE9FD" />
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl px-5 pt-20 md:pt-32 2xl:px-0">
        <h2 className="font-h2 pb-5 text-center ">Vores kerneværdier</h2>
        <p className="font-body-l mx-auto max-w-screen-md hyphens-auto text-center sm:px-20">
          Alle vores medarbejdere arbejder ud fra det samme værdisæt.
          Værdisættet udtrykker, hvad vi forventer af hinanden som kollegaer i
          ParkZone, og hvad vores omverden kan forvente af os.
        </p>
        <div className="grid max-w-screen-3xl grid-cols-1 gap-x-10 gap-y-12 px-8 py-10 pb-16 pt-16 sm:grid-cols-2 lg:grid-cols-6 xl:pb-28">
          <div className="mx-auto flex max-w-96 flex-col items-center md:px-5 lg:col-span-2 ">
            <div className="rounded-full bg-sky-100 p-4 ">
              <FaRegHeart className="h-8 w-8 text-marine-400" />
            </div>
            <h3 className="font-h4 pb-3 pt-5">Passion</h3>
            <p className="font-body-md text-center 3xl:px-5">
              Hos ParkZone er vi passionerede omkring vores arbejde, og vi
              brænder for at levere den bedste service og produkter til vores
              kunder.
            </p>
          </div>
          <div className="mx-auto flex max-w-96 flex-col items-center md:px-5 lg:col-span-2 ">
            <div className="rounded-full bg-sky-100 p-4 ">
              <PiHandHeartBold className="h-8 w-8 text-marine-400" />
            </div>
            <h3 className="font-h4 pb-3 pt-5">Servicemindet</h3>
            <p className="font-body-md text-center 3xl:px-5">
              Kundeservice er en prioritet for os, og vi sørger altid for, at
              hver enkelt løsning er tilpasset hver enkelt kundes behov.
            </p>
          </div>
          <div className="mx-auto flex max-w-96 flex-col items-center md:px-5 lg:col-span-2 ">
            <div className="rounded-full bg-sky-100 p-3 ">
              <IoBulbOutline
                strokeWidth={1}
                className="h-10 w-10 text-marine-400"
              />
            </div>
            <h3 className="font-h4 pb-3 pt-5">Løsningsorienteret</h3>
            <p className="font-body-md text-center 3xl:px-5">
              Vi fokuserer hver dag på at finde og implementerer de mest
              effektive løsninger, og vi tror på, at det gør en forskel for
              vores kunder.
            </p>
          </div>
          <div className="mx-auto flex max-w-96 flex-col items-center md:px-7 lg:col-span-3 lg:mx-0 lg:w-4/6 lg:justify-self-end">
            <div className="rounded-full bg-sky-100 p-4 ">
              <FaRegHandshake className="h-8 w-8 text-marine-400" />
            </div>
            <h3 className="font-h4 pb-3 pt-5">Ansvar</h3>
            <p className="font-body-md text-center 3xl:px-5">
              Vi tager ansvar for vores handlinger og forpligter os til at
              handle med omhu og professionalisme.
            </p>
          </div>
          <div className="mx-auto flex max-w-96 flex-col items-center sm:col-span-2 sm:mx-auto sm:w-1/2 md:px-5 lg:col-span-3 lg:mx-0 lg:w-4/6 xl:px-4">
            <div className="rounded-full bg-sky-100 p-4 ">
              <PiGearSixBold className="h-8 w-8 text-marine-400" />
            </div>
            <h3 className="font-h4 pb-3 pt-5">Innovation</h3>
            <p className="font-body-md text-center 3xl:px-5">
              Vi er dedikerede til konstant at innovere og introducere nye og
              forbedrede produkter og tjenester på markedet, så vi altid holder
              os opdaterede.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
