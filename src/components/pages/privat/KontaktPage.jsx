import ContactForm from "../../ui/sections/ContactForm";
import ContactInfo from "../../ui/sections/ContactInfo";
import PageWrapper from "../../wrappers/PageWrapper";
import driver from "../../../assets/driver.jpg";
import ImageWrapper from "../../wrappers/ImageWrapper";

// Kontaktside for privatkunder
export default function KontaktPagePrivat() {
  return (
    <PageWrapper
      breadcrumb={true}
      title="Kontakt os for hjælp og support - ParkZone A/S"
      metaDescription="Har du spørgsmål eller brug for support? Udfyld kontaktformularen eller find vores kontaktinformationer her. Vi er klar til at hjælpe dig med alt vedrørende parkering hos ParkZone."
    >
      <div className="w-full bg-sky-50">
        <div className="mx-auto grid w-fit grid-cols-1 gap-5 px-5 py-16 md:grid-cols-2 md:px-16 lg:px-32 xl:px-40">
          <div className="row-span-3">
            <ContactForm variant="privat" />
          </div>
          <ImageWrapper
            className="max-w-md"
            color="#91D5F5"
            size="sm"
            image={driver}
            alt="Mand kørende i bil"
          />

          <ContactInfo variant="privat" />
        </div>
      </div>
    </PageWrapper>
  );
}
