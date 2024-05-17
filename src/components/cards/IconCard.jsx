import PropTypes from "prop-types";
import { LuMail, LuPhone } from "react-icons/lu";

export default function IconCard({ icon, title, subtitle, email, phone }) {
  return (
    <div className="w-full space-y-3 pb-7">
      <div className="flex items-start space-x-5 rounded-xl bg-gray-50 p-4 pb-6">
        <div className="rounded-full bg-sky-100 p-2.5">
          <div>{icon}</div>
        </div>
        <div className="space-y-3 pt-4">
          <h4 className="font-h4 leading-5 font-normal">{title}</h4>
          <p className="font-body-l">{subtitle}</p>
        </div>
      </div>
      <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0 lg:flex-col lg:space-x-0 lg:space-y-3 2xl:flex-row 2xl:space-x-3 2xl:space-y-0">
        <div className="flex w-full items-start space-x-5 rounded-lg bg-gray-50 p-4 pb-6 pl-4 ">
          <div className="rounded-full bg-sky-100 p-3">
            <div>
              <LuMail strokeWidth={2} className="h-5 w-auto text-marine-400" />
            </div>
          </div>
          <div className="space-y-3 pt-4">
            <h4 className="font-h5 font-medium">Email</h4>
            <p className="font-body-l break-all leading-6 xl:font-body-md xl:leading-5">
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
        </div>
        <div className="flex w-full items-start space-x-5 rounded-lg bg-gray-50  p-4 pb-6 pl-4  ">
          <div className="rounded-full bg-sky-100 p-3">
            <div>
              <LuPhone
                strokeWidth={2}
                className="h-5 w-auto text-marine-400 "
              />
            </div>
          </div>
          <div className="space-y-3 pt-4">
            <h4 className="font-h5 font-medium">Telefon</h4>
            <p className="font-body-l xl:font-body-md">
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

IconCard.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};
