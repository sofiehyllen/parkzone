import CitiesMap from "../../ui/sections/CitiesMap";
import Doodle6 from "../../svg/Doodle6";
import Doodle1 from "../../svg/Doodle1";
import Doodle2 from "../../svg/Doodle2";
import PageWrapper from "../../wrappers/PageWrapper";

// Side for Find Parkering
export default function FindParkeringPage() {
  return (
    <PageWrapper breadcrumb={true}>
      <div className="relative flex w-full flex-col items-center px-5 md:px-10">
        <div className="mb-96 w-full max-w-screen-3xl overflow-hidden rounded-xl bg-sky-100 px-6 py-10 pb-44 sm:pt-20">
          <div className="relative mx-auto w-fit">
            <h1 className="font-h1 relative z-40 pb-10 text-center  sm:px-10">
              Find parkering nær dig
            </h1>
            <div>
              <Doodle6
                color="#BBE2F7"
                className="absolute right-9 top-14 w-48 sm:right-0 sm:top-8 md:h-auto md:w-52 3xl:-right-5 3xl:top-6 3xl:w-72"
              />
            </div>
            <div className="absolute -right-10 rotate-45 lg:-right-40 lg:scale-125 xl:-right-72 2xl:scale-150 3xl:-right-96">
              <Doodle1 color="#BBE2F7" />
            </div>
            <div className="absolute -left-40 hidden -rotate-45 sm:block lg:-left-60 xl:-left-80 xl:scale-125 2xl:-left-96 2xl:scale-150">
              <Doodle2 color="#BBE2F7" />
            </div>
          </div>
          <p className="font-body-h5 relative z-40  mx-auto max-w-screen-md text-center sm:w-4/5 md:px-9">
            ParkZone har p-pladser i hele Danmark – også en i nærheden af dig.
            På siden for de enkelte områder kan du bl.a. få information omkring
            priser, se områdets faciliteter, samt booke din næste parkering.
          </p>
        </div>
        <div className="absolute top-72 z-40 pt-5 sm:top-60 md:w-full md:px-20 lg:px-40 xl:px-52">
          <CitiesMap />
        </div>
      </div>
    </PageWrapper>
  );
}
