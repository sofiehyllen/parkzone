import { LuMail, LuPhone } from "react-icons/lu";
import PropTypes from "prop-types";

// Komponent for kontaktinformation
export default function ContactInfo({ variant }) {
  return (
    <div className="h-fit max-w-md space-y-2.5 rounded-2xl bg-white p-5">
      <a
        href="mailto:info@parkzone.dk"
        className="flex w-full items-start space-x-5 rounded-xl bg-gray-50 p-4 pb-6 pl-4 transition duration-300 hover:bg-gray-100"
      >
        <div className="rounded-full bg-sky-100 p-3">
          <div>
            <LuMail strokeWidth={2} className="h-5 w-auto text-marine-400" />
          </div>
        </div>
        <div className="space-y-3 pt-4">
          <h4 className="font-h5 font-medium">Email</h4>
          <p className="font-body-l xl:font-body-md break-all leading-6 xl:leading-5">
            info@parkzone.dk
          </p>
        </div>
      </a>

      <a
        href="tel:+4570252696"
        className="flex w-full items-start  space-x-5 rounded-xl bg-gray-50 p-4 pb-6 pl-4 transition duration-300 hover:bg-gray-100"
      >
        <div className="rounded-full bg-sky-100 p-3">
          <div>
            <LuPhone strokeWidth={2} className="h-5 w-auto text-marine-400 " />
          </div>
        </div>
        <div>
          <div className="pt-4">
            <h4 className="font-h5 pb-3 font-medium">Telefon</h4>
            <p className="font-body-l xl:font-body-md">+45 70 25 26 96</p>
          </div>
          <div className="w-full space-y-6 pt-7">
            {variant === "privat" && ( // Kontaktinformationen på privatsiden
              <div className="space-y-7">
                <div className="space-y-3.5">
                  <h5 className="font-body-md font-normal">Kundeservice</h5>
                  <div className="grid grid-cols-1 space-y-2">
                    <div className="flex flex-wrap justify-between pr-10">
                      <p className="font-body-md w-24 pb-2">Man - tors:</p>
                      <p className="font-body-md w-28">08:30 - 16:00</p>
                    </div>
                    <div className="flex flex-wrap justify-between pr-10">
                      <p className="font-body-md w-24 pb-2">Fre:</p>
                      <p className="font-body-md w-28">08:30 - 15:00</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3.5">
                  <h5 className="font-body-md font-normal">Sagsbehandling</h5>
                  <div className="grid grid-cols-1 space-y-2">
                    <div className="flex flex-wrap justify-between pr-10">
                      <p className="font-body-md w-24 pb-2">Man - tors:</p>
                      <p className="font-body-md w-28">10:00 - 14:00</p>
                    </div>
                    <div className="flex flex-wrap justify-between pr-10">
                      <p className="font-body-md w-24 pb-2">Fre:</p>
                      <p className="font-body-md w-28">Lukket</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {variant === "erhverv" && ( // Kontaktinformationen på erhversiden
              <div className="grid grid-cols-1 space-y-2">
                <div className="flex flex-wrap justify-between pr-10">
                  <p className="font-body-md w-24 pb-2">Man - tors:</p>
                  <p className="font-body-md w-28">08:30 - 16:00</p>
                </div>
                <div className="flex flex-wrap justify-between pr-10">
                  <p className="font-body-md w-24 pb-2">Fre:</p>
                  <p className="font-body-md w-28">08:30 - 15:00</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </a>
    </div>
  );
}

ContactInfo.propTypes = {
  variant: PropTypes.oneOf(["privat", "erhverv"]).isRequired,
};
