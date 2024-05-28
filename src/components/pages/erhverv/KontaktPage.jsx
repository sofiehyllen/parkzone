import ContactForm from "../../ui/sections/ContactForm";
import ContactInfo from "../../ui/sections/ContactInfo";
import PageWrapper from "../../wrappers/PageWrapper";
import advice from "../../../assets/advice.jpg";
import Doodle7 from "../../svg/Doodle7";

// Kontaktside for erhverv
export default function KontaktPageErhverv() {
  return (
    <PageWrapper breadcrumb={true}>
      <div className="w-full bg-marine-50">
        <div className="mx-auto grid w-fit grid-cols-1 gap-5 px-5 py-16 md:grid-cols-2 md:px-16 lg:px-32 xl:px-40">
          <div className="row-span-3">
            <ContactForm variant="erhverv" />
          </div>
          <div className="relative max-w-md overflow-hidden rounded-2xl">
            <img src={advice} alt="" />
            <div className="absolute -left-16 bottom-0 w-96 sm:bottom-4 sm:w-[120%]">
              <Doodle7 color="#7AA9EF" />
            </div>
          </div>
          <ContactInfo variant="erhverv" />
        </div>
      </div>
    </PageWrapper>
  );
}
