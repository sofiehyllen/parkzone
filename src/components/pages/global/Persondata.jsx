import PageWrapper from "../../wrappers/PageWrapper";

// Persondata side
export default function Persondata() {
  return (
    <PageWrapper
      breadcrumb={true}
      title="Beskyttelse af dine personlige oplysninger hos ParkZone"
      metaDescription="Læs vores persondatapolitik, hvor vi beskriver, hvordan vi sikrer dine personlige oplysninger og respekterer dit privatliv hos ParkZone."
    >
      <div className="mx-auto max-w-screen-xl px-5 sm:px-10 xl:px-20">
        <h1 className="font-h1 pb-8 text-center">Persondatapolitik</h1>
        <h2 className="font-body-l pb-20 text-center lg:px-32">
          Hos ParkZone gør vi vores bedste for at passe på dine data. Vi
          prioriterer vores sikkerhedsforanstaltninger højt og følger altid de
          nyeste retningslinjer for databeskyttelse. Læs mere om hvordan vi
          håndterer dine data herunder.
        </h2>
        <div className="flex flex-col lg:flex-row lg:space-x-16">
          <div className="flex w-full flex-col">
            <div className="w-full pt-14">
              <h3 className="font-h4 pb-4 text-center sm:text-left">
                Formålene med og retsgrundlaget for behandlingen af dine
                personoplysninger
              </h3>
              <p className="font-body-md text-center sm:text-justify">
                Dine personoplysninger anvendes i forbindelse med, at du står
                som kontaktperson hos en af vores kunder eller kommende kunder.
                Formålet med behandlingen er at kunne levere eller tilbyde
                ydelser og/eller produkter, levere servicemeddelelser og
                information herom samt tilbyde vejledning og support. Vi
                behandler kun dine personoplysninger, såfremt vi har et
                behandlingsgrundlag i overensstemmelse med
                Persondataforordningen. Retsgrundlaget for vores behandling
                følger af Persondataforordningens artikel 6, stk. 1, litra f, om
                behandling, der er nødvendig for at vi som dataansvarlige kan
                forfølge en legitim interesse.
              </p>
            </div>
            <div className="w-full pt-14">
              <h3 className="font-h4 pb-4 text-center sm:text-left">
                Kategorier af personoplysninger som behandles
              </h3>
              <p className="font-body-md text-center sm:text-justify">
                De indsamlede og behandlede personoplysninger omfatter følgende
                kategorier af personoplysninger: navn, adresse, reg.nr.,
                e-mailadresse, telefonnummer, fødselsdato. Ved modtagelse af
                henvendelser fra dig, hvor der indgår andre oplysninger end dem
                beskrevet ovenfor, vil disse ligeledes blive behandlet i
                overensstemmelse med formålene specificeret i denne
                privatlivspolitik.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <div className="w-full pt-14">
              <h3 className="font-h4 pb-4 text-center sm:text-left">
                Hvor længe opbevarer vi dine personoplysninger?
              </h3>
              <p className="font-body-md text-center sm:text-justify">
                Vi kan på nuværende tidspunkt ikke sige, hvor længe vi vil
                opbevare dine personoplysninger. Dog kan vi oplyse dig om, at vi
                lægger vægt på, at dine personoplysninger ikke opbevares længere
                end nødvendigt. Vi sørger ligeledes for, at personoplysninger
                slettes, når de ikke længere er relevante for vores
                behandlingsformål som beskrevet i pkt. 2.
              </p>
            </div>
            <div className="w-full pt-14">
              <h3 className="font-h4 pb-4 text-center sm:text-left">
                Retten til at trække et samtykke tilbage
              </h3>
              <p className="font-body-md text-center sm:text-justify">
                Har vi persondata vi udelukkende behandler på baggrund af dit
                samtykke, kan du altid kalde dette samtykke tilbage, og den
                konkrete persondata vil herefter blive slettet. Hvis du vælger
                at trække dit samtykke tilbage, påvirker det ikke lovligheden af
                vores behandling af dine personoplysninger på baggrund af dit
                tidligere meddelte samtykke og op til tidspunktet for
                tilbagetrækningen. Hvis du tilbagetrækker dit samtykke, har det
                derfor først virkning fra dette tidspunkt.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-20 pt-14">
          <h3 className="font-h4 pb-4 text-center sm:text-left">
            Dine rettigheder
          </h3>
          <div className="space-y-7">
            <p className="font-body-md text-justify">
              Du har efter Persondataforordningen en række rettigheder i forhold
              til vores behandling af dine personoplysninger:
            </p>
            <p className="font-body-md text-justify">
              1. Ret til at se oplysninger (indsigtsret): Du har ret til at få
              indsigt i de oplysninger, som vi behandler om dig samt en række
              yderligere oplysninger.
            </p>
            <p className="font-body-md text-justify">
              2. Ret til berigtigelse (rettelse): Du har ret til at få urigtige
              oplysninger om dig selv rettet.
            </p>
            <p className="font-body-md text-justify">
              3. Ret til sletning: I særlige tilfælde har du ret til at få
              slettet oplysninger om dig, inden tidspunktet for vores
              almindelige generelle sletning indtræffer.
            </p>
            <p className="font-body-md text-justify">
              4. Ret til begrænsning af behandling: Du har i visse tilfælde ret
              til at få behandlingen af dine personoplysninger begrænset. Hvis
              du har ret til at få begrænset behandlingen, må vi fremover kun
              behandle oplysningerne – bortset fra opbevaring – med dit
              samtykke, eller med henblik på at retskrav kan fastlægges, gøres
              gældende eller forsvares.
            </p>
            <p className="font-body-md text-justify">
              5. Ret til indsigelse: Du har i visse tilfælde ret til at gøre
              indsigelse mod vores behandling af dine personoplysninger. Du kan
              også gøre indsigelse mod behandling af dine oplysninger til
              direkte markedsføring.
            </p>
            <p className="font-body-md text-justify">
              6. Ret til at transmitere oplysninger (dataportabilitet): Du har i
              visse tilfælde ret til at modtage dine personoplysninger i et
              struktureret, almindeligt anvendt og maskinlæsbart format samt at
              få overført disse personoplysninger fra én dataansvarlig til en
              anden uden hindring. Du kan læse mere om dine rettigheder i
              Datatilsynets vejledning om de registreredes rettigheder, som du
              finder på www.datatilsynet.dk . Hvis du ønsker at gøre brug af
              dine rettigheder, skal du kontakte os via kontaktinformationerne
              angivet i pkt. 1.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
