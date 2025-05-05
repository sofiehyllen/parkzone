import ImageWrapper from "../../wrappers/ImageWrapper";
import PageWrapper from "../../wrappers/PageWrapper";
import driver from "../../../assets/girl-driving.jpg";
import Button from "../../ui/buttons/Button";
import Doodle2 from "../../svg/Doodle2";
import Doodle1 from "../../svg/Doodle1";
import PropTypes from "prop-types";
import Accordion from "../../ui/atoms/Accordion";
import { FAQ1 } from "../../../staticData";
import Doodle8 from "../../svg/Doodle8";
import googlePlay from "../../../assets/google-play.png";
import Category from "../../ui/atoms/Category";
import mobile from "../../../assets/mobile.jpg";
// import useFetch from "../../hooksAndFunctions/useFetch";

// Homepage for privatkunder
export default function HomePagePrivat() {
  // Fetch af artiklernes indhold fra WordPress
  // const apiUrl = import.meta.env.VITE_API_URL;
  // let { loading, error, data } = useFetch(apiUrl,);
  // // Side mens der indlæses
  // if (loading)
  //   return (
  //     <h1 className="font-h3 flex h-screen w-full justify-center pt-20 text-gray-300">
  //       Indlæser
  //     </h1>
  //   );
  // //Error besked hvis data ikke kan hentes
  // if (error)
  //   return (
  //     <h1 className="font-h3 flex h-screen w-full justify-center pt-20 text-error-500">
  //       Kunne ikke hente data
  //     </h1>
  //   );

  return (
    <PageWrapper
      breadcrumb={false}
      title="Spar Tid og Besvær med ParkZone Go - Parkering, FAQ og Seneste Nyt - ParkZone A/S"
      metaDescription="Med ParkZone Go appen kan du nemt parkere og administrere dine parkeringstilladelser. Få svar på spørgsmål om parkering, kontakt os for hjælp og hold dig opdateret med seneste nyheder fra ParkZone."
    >
      <div className="pb-24 pt-5  md:flex md:items-center xl:pb-40 xl:pt-10 ">
        <div className="flex w-full flex-col items-center px-5 md:ml-20 md:min-w-96 md:max-w-96 md:items-start md:px-0 lg:ml-32 xl:w-10/12 xl:max-w-screen-sm xl:pb-20 2xl:w-8/12 2xl:pb-32 3xl:ml-48 3xl:w-6/12">
          <h1 className="font-h1 md:font-h2 lg:font-h1 pb-8 text-center md:text-left lg:pb-12">
            Spar tid og besvær med ParkZone Go
          </h1>
          <p className="font-body-md lg:font-body-l mb-auto pb-10 text-center sm:px-20 md:px-0 md:text-left">
            Med vores app, ParkZone Go, kan du nemt parkere og administrere dine
            p-tilladelser på vores parkeringsområder, så du kan fokusere på det,
            der virkelig betyder noget.
          </p>

          <div className="flex space-x-5 pb-10 sm:pb-16 md:pb-0">
            {/* Embedded logo fra apple appstore */}
            <a
              href="https://apps.apple.com/us/app/parkzone-go-med-parkcare/id1429508099?itsct=apps_box_badge&amp;itscg=30200"
              target="_blank"
            >
              <img
                src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/da-dk?size=250x83&amp;releaseDate=1544140800"
                alt="Download on the App Store"
                style={{ width: "106px", height: "35px" }}
              />
            </a>
            {/* Embedded logo fra google playstore */}
            <a
              href="https://play.google.com/store/apps/details?id=dk.parkzone.parkcare&hl=da&gl=US"
              target="_blank"
            >
              <img
                src={googlePlay}
                alt="Download in the Google Play Store"
                style={{ width: "118px", height: "35px" }}
              />
            </a>
          </div>
        </div>
        <ImageWrapper
          image={mobile}
          alt="ParkZone Go app"
          className="pl-20 sm:pl-32 md:pl-5 xl:pl-10 2xl:pl-28 "
        />
      </div>
      <div className="relative flex flex-col pb-16 md:flex-row md:justify-center md:pb-24 xl:pb-40">
        <ImageWrapper
          image={driver}
          size="lg"
          color="#7CC9ED"
          alt="Kvinde kørende i bil"
          className="relative mr-5 w-full self-end sm:mr-10 md:mr-0 md:h-96 md:place-self-center md:rounded-l-none lg:rounded-l-none xl:h-full"
        />
        <div className="relative z-10 flex w-full flex-col items-center justify-center px-5 py-10 sm:px-10 md:items-start md:py-0 lg:pr-14 xl:w-10/12 xl:px-16">
          <Category color="skyBlue">Parkering</Category>
          <h2 className="font-h1 md:font-h2 pb-8 pt-1 text-center md:text-left 2xl:pb-12 2xl:pr-10">
            Book din næste parkering hos os
          </h2>
          <p className="font-body-md pb-10 text-center md:hyphens-auto md:text-justify xl:pr-14 2xl:pr-20">
            Book din parkering i forvejen så du undgår at bruge tid på billetkøb
            og parkeringsregler når du er fremme. Med billetten registreret på
            din nummerplade, skal du ikke bekymre dig om mere når først
            parkeringen er booket.
          </p>
          <Button
            variant="primary"
            size="lg"
            icon={true}
            className="mx-auto md:mx-0"
            to="/privat/findparkering"
          >
            Find parkering
          </Button>
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-sky-100 px-8 py-16 md:px-20 ">
        <h2 className="font-h1 relative z-10 pb-10 text-center">
          Har du modtaget parkeringsafgift?
        </h2>
        <p className="font-body-md md:font-body-l relative z-10 mx-auto max-w-screen-lg hyphens-auto text-center">
          Vi ved det kan være frustrerende at modtage en afgift. Husk at du er
          altid velkommen til at kontakte os hvis du har spørgsmål eller mangler
          afklaring angående dette. På vores kontakt side har vi en
          kontaktformular specielt til dig som henvender dig med en afgift.
          Udfyld den og så vender vi tilbage til dig hurtigst muligt. På vores
          FAQ side kan du også få svar på nogle af de mest hyppige spørgsmål.
        </p>
        <div className="relative z-10 flex justify-center space-x-5 pt-10 xl:pt-16">
          <Button size="lg" variant="primary" to="/privat/kontakt">
            Kontakt os
          </Button>
          <Button size="lg" variant="tertiary" icon={true} to="/privat/FAQ">
            Se FAQ
          </Button>
        </div>
        <Doodle2
          className="absolute left-0 top-10 -rotate-45 scale-150 sm:left-10 lg:scale-190 xl:left-32 2xl:scale-225 3xl:left-80"
          color="#EDF6FD"
        />
        <Doodle1
          className="absolute -right-40 top-0 hidden -rotate-45 scale-150 md:block lg:scale-190 xl:right-20 2xl:scale-225 3xl:right-72"
          color="#EDF6FD"
        />
      </div>
      <div className="w-full px-5 py-20 sm:px-10 xl:px-0 xl:pt-40">
        <h3 className="font-h1 pb-10 text-center">Seneste nyt om ParkZone</h3>
        {/* <ArticleCard articles={data} /> */}
        <Button
          variant="tertiary"
          size="lg"
          to="/blog"
          icon={true}
          className="mx-auto mt-10"
        >
          Se alle artikler
        </Button>
      </div>
      <div className="relative mx-auto max-w-screen-4xl overflow-hidden px-5 pb-20 pt-5 sm:px-10 sm:pb-28 md:px-20 lg:flex xl:pt-28 3xl:px-40 3xl:pb-24 3xl:pl-52">
        <div className="relative z-10 lg:w-10/12 lg:pr-10">
          <h4 className="font-h2 pb-5 text-center lg:pb-10 lg:text-left">
            Frequently Asked Questions
          </h4>
          <p className="font-body-l pb-10 text-center lg:text-left">
            Få svar på nogle af vores ofte stillede spørgsmål. Kan du ikke finde
            svar på netop dit spørgsmål, er du altid velkommen til at kontakte
            os.
          </p>
          <Button
            size="lg"
            variant="primary"
            icon={true}
            to="/privat/faq"
            className="relative z-10 mx-auto hidden lg:inline-flex"
          >
            Læs alle FAQ
          </Button>
        </div>
        <div className="relative z-10 w-full pb-5">
          {/* Der hentes 4 FAQ */}
          {FAQ1.slice(1, 5).map((FAQ1, index) => (
            <div key={index} className="flex w-full justify-center">
              <Accordion
                title={FAQ1.title}
                body={FAQ1.body}
                color="bg-sky-50"
              />
            </div>
          ))}
        </div>
        <Button
          size="lg"
          variant="primary"
          icon={true}
          className="relative z-10 mx-auto lg:hidden"
        >
          Læs alle FAQ
        </Button>
        <div className="2xl:left-68 absolute bottom-14 left-0 scale-150 sm:bottom-20 sm:left-10 lg:left-52 2xl:bottom-14 2xl:scale-160 3xl:bottom-20 3xl:left-96 3xl:scale-200 4xl:bottom-16 4xl:left-auto 4xl:right-96 4xl:scale-250">
          <Doodle8 color={"#ABDAF4"} />
        </div>
      </div>
    </PageWrapper>
  );
}

HomePagePrivat.propTypes = {
  articles: PropTypes.any,
};
