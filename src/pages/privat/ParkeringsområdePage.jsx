// Side for parkeringsområde
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageWrapper from "../../components/wrappers/PageWrapper";
import Doodle1 from "../../components/svg/Doodle1";
import Doodle2 from "../../components/svg/Doodle2";
import { MdOutlineDirectionsCarFilled } from "react-icons/md";
import { FiCamera } from "react-icons/fi";
import { BiHandicap } from "react-icons/bi";
import { TbElevator } from "react-icons/tb";
import Button from "../../components/buttons/Button";
import PaymentFlow from "../../components/sections/PaymentFlow";
import Alert from "../../components/atoms/Alert";

export default function ParkingPage() {
  const [data, setData] = useState(null);
  const [alertVisible, setAlertVisible] = useState(false);

  // Gør det muligt at hente data fra specifikke id
  const params = useParams();

  // Url til Firebase API
  const url = `https://firestore.googleapis.com/v1/projects/parkzone-f0f37/databases/(default)/documents/parking/${params.id}`;

  // Fetch af Firebase Data
  useEffect(() => {
    async function getData() {
      const response = await fetch(url); // Sender fetch forespørgsel til url
      const data = await response.json(); // Konverterer svaret til json
      setData(data);
    }
    getData();

    getData();

    // Viser en Alert efter 5 sek.
    const timeoutId = setTimeout(() => {
      setAlertVisible(true);
    }, 5000);

    // Timeren rydes før useEffect kører igen
    return () => clearTimeout(timeoutId);
  }, [url]);

  // Håndterer luk af Alert
  function handleCloseAlert() {
    setAlertVisible(false);
  }

  // Scroller til Payment Flow når knappen i Alerten klikkes
  const scrollToPaymentFlow = () => {
    const paymentFlowSection = document.getElementById("paymentFlow");
    if (paymentFlowSection) {
      paymentFlowSection.scrollIntoView({ behavior: "smooth" });
    }
    setAlertVisible(false);
  };

  return (
    <PageWrapper breadcrumb={true}>
      {data && (
        <>
          <div className=" mx-auto max-w-screen-3xl md:px-10">
            <div className=" relative overflow-hidden bg-sky-100 px-5 pb-5 pt-20 md:rounded-xl md:px-10 xl:pt-28">
              <div className="relative z-50">
                <p className="font-h4 pb-2 text-marine-500">Parkering ved</p>
                <h1 className="font-h1 pb-1 pr-10 leading-8">
                  {data.fields.address.stringValue}
                </h1>
                <h2 className="font-h3">{data.fields.city.stringValue}</h2>
              </div>
              <div className="absolute left-0 top-0 -rotate-45  xl:scale-125 2xl:scale-150 3xl:left-20">
                <Doodle2 color="#EDF6FD" />
              </div>
              <div className="absolute -right-40 -top-40 hidden rotate-45 sm:block xl:scale-125 2xl:-right-52 2xl:scale-150">
                <Doodle2 color="#EDF6FD" />
              </div>
              <div className="2xl: absolute -top-52 right-72 hidden -rotate-90 lg:block xl:right-96 xl:scale-125 2xl:scale-150">
                <Doodle1 color="#EDF6FD" />
              </div>
            </div>
            <div className="mx-auto grid w-fit max-w-screen-xl grid-cols-1 divide-y divide-marine-200 py-10 sm:w-full sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-10 lg:py-20 xl:px-28">
              <div className="flex w-full flex-col py-9 sm:items-start sm:py-3">
                <div className="flex flex-col items-center">
                  <p className="font-h2 sm:font-h4 lg:font-h3 pb-3">
                    {data.fields.spaces.integerValue} pladser
                  </p>
                  <p className="font-body-md sm:font-body-s lg:font-body-md text-center">
                    fordelt på hele området
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col items-center py-9 sm:py-3">
                <p className="font-h2 sm:font-h4 lg:font-h3 pb-3">
                  {data.fields.hourPrice.integerValue} kr.
                </p>
                <p className="font-body-md sm:font-body-s lg:font-body-md text-center">
                  pr. påbegyndt time
                </p>
              </div>
              <div className="flex w-full flex-col items-end py-9 sm:py-3">
                <div className="flex flex-col items-center">
                  <p className="font-h2 sm:font-h4 lg:font-h3 pb-3">
                    {data.fields.openingHours.stringValue}
                  </p>
                  <p className="font-body-md sm:font-body-s lg:font-body-md text-center">
                    er der åbent for parkering
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-screen-xl lg:pb-20 xl:px-20">
              <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-3">
                <div className="col-span-2 grid grid-cols-1 px-5">
                  <div>
                    <h5 className="font-h4 pb-4">Om området</h5>
                    <div className="space-y-7">
                      <p className="font-body-md">
                        {data.fields.text11.stringValue}
                      </p>
                      {data.fields.text12 && (
                        <p className="font-body-md">
                          {data.fields.text12.stringValue}
                        </p>
                      )}
                    </div>
                  </div>
                  {data.fields.checkOut.booleanValue ? ( // Indholdet renderes afhængigt af om man kan checke ud fra området online
                    <div className="relative my-14 overflow-hidden rounded-xl bg-sky-50 px-7 py-10 md:px-10">
                      <div className="relative z-50 flex w-full flex-col items-center sm:px-20 lg:px-10 xl:px-16">
                        <h6 className="font-h4 pb-4 text-center">
                          Har du glemt at checke ud
                        </h6>
                        <p className="font-body-md text-center">
                          Bare rolig, med kameraparkering kan du checke ud
                          online op til 48 timer efter du har afsluttet din
                          parkering.
                        </p>

                        <Button
                          variant={"secondary"}
                          size={"md"}
                          className="mt-8"
                          to="/privat/checkud"
                        >
                          Check ud
                        </Button>
                      </div>
                      <div className="absolute left-0 top-0 -rotate-45 scale-125  xl:scale-125 2xl:scale-150 3xl:left-20">
                        <Doodle1 color="#DAEEFA" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative my-14 overflow-hidden rounded-xl bg-sky-50 px-7 py-10 md:px-10">
                      <div className="relative z-20 flex w-full flex-col items-center md:flex-row md:justify-center">
                        <div className="md:pr-10">
                          <h6 className="font-h4 pb-4 text-center md:text-left">
                            Har du spørgsmål til dette område?
                          </h6>
                          <p className="font-body-md text-center md:text-left">
                            Vores team sidder klar til at hjælpe dig, hvis du
                            har spørgsmål omkring vores forskellige områder.
                          </p>
                        </div>
                        <Button
                          variant={"tertiary"}
                          size={"md"}
                          className="mt-8 w-full md:mt-0"
                          to="/privat/kontakt"
                        >
                          Kontakt os
                        </Button>
                      </div>
                      <div className="absolute left-0 top-0 -rotate-45 scale-125  xl:scale-125 2xl:scale-150 3xl:left-20">
                        <Doodle1 color="#DAEEFA" />
                      </div>
                    </div>
                  )}
                  <div>
                    <h5 className="font-h4 pb-4">Parkering</h5>
                    <div className="space-y-7">
                      <p className="font-body-md">
                        {data.fields.text21.stringValue}
                      </p>
                      {data.fields.text22 && (
                        <p className="font-body-md">
                          {data.fields.text22.stringValue}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-16 grid h-fit w-[114%] grid-cols-1 border-t-1 border-gray-200 px-5 sm:w-[106%] sm:px-28 lg:mt-0 lg:w-full lg:border-0 lg:px-0">
                  <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-4 py-10 sm:pt-16 lg:gap-x-8 lg:px-0 lg:pt-10">
                    <div className="flex flex-col items-center px-2 lg:px-0">
                      <MdOutlineDirectionsCarFilled className="h-12 w-auto text-marine-800 lg:h-10" />
                      <p className="font-body-xs pt-1 text-center">
                        Udendørs <br /> parkering
                      </p>
                    </div>
                    <div className="flex flex-col items-center px-2 lg:px-0">
                      <MdOutlineDirectionsCarFilled className="h-12 w-auto text-marine-800 lg:h-10" />
                      <p className="font-body-xs pt-1 text-center">
                        Parkeringshus
                      </p>
                    </div>
                    <div className="flex flex-col items-center px-2 lg:px-0">
                      <TbElevator className="h-12 w-auto text-marine-800 lg:h-10" />
                      <p className="font-body-xs pt-1 text-center">Elevator</p>
                    </div>
                    <div className="flex flex-col items-center px-2 lg:px-0">
                      <FiCamera className="h-12 w-auto pt-2 text-marine-800 lg:h-10" />
                      <p className="font-body-xs pt-1 text-center ">
                        Sikkerhedskamera
                      </p>
                    </div>
                    <div className="flex flex-col items-center px-2 lg:px-0">
                      <BiHandicap className="h-12 w-auto text-marine-800 lg:h-10" />
                      <p className="font-body-xs pt-1 text-center">
                        Handicap <br /> parkering
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-sky-50 px-8 py-7 xl:pb-7 ">
                    <h5 className="font-h4 pb-6">Takster</h5>
                    <div className="flex justify-between border-b-1 border-sky-200 pb-2">
                      <p className="font-body-s">Pr. påbegyndt time:</p>
                      <p className="font-h5">
                        {data.fields.hourPrice.integerValue} kr.
                      </p>
                    </div>
                    {data.fields.otherPrice && data.fields.otherPriceText && (
                      <div className="flex justify-between border-b-1 border-sky-200 pb-2 pt-4">
                        <p className="font-body-s">
                          {data.fields.otherPriceText.stringValue}:
                        </p>
                        <p className="font-h5">
                          {data.fields.otherPrice.integerValue} kr.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="py-5 pt-10 sm:pb-14 lg:order-first lg:py-0 lg:pb-0 lg:pt-0">
                    <iframe
                      src={data.fields.maps.stringValue}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-60 w-full rounded-2xl"
                    ></iframe>
                  </div>
                </div>
              </div>
              <PaymentFlow
                map={data.fields.maps.stringValue}
                address={data.fields.address.stringValue}
                city={data.fields.city.stringValue}
                hourPrice={data.fields.hourPrice.integerValue}
              />
            </div>
          </div>
          <Alert
            type="default"
            title="Skal du parkere her?"
            text="Book din parkering på forhånd og spar tid på billetkøb og
                parkeringsregler når du er fremme."
            onClose={handleCloseAlert}
            isVisible={alertVisible}
          >
            <Button size="sm" variant="primary" onClick={scrollToPaymentFlow}>
              Book
            </Button>
          </Alert>
        </>
      )}
    </PageWrapper>
  );
}
