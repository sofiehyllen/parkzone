import Newsletter from "../atoms/Newsletter";
import Button from "../buttons/Button";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-regular.svg";

export default function Footer() {
  return (
    <div className="w-full px-5 pt-10 md:px-10">
      <div className="flex flex-col items-center border-b-1 border-gray-200 pb-10 md:flex-row md:items-end md:justify-between md:space-x-32">
        <div className="flex flex-col items-center space-y-6 pb-10 md:items-start md:pb-0">
          <div>
            <img src={logo} alt="ParkZone A/S Logo" />
          </div>
          <p className="font-body-xs max-w-screen-sm text-center md:text-left">
            ParkZone skaber plads. Plads til at de, der skal parkere, har
            mulighed for det. Plads til at grundejere kan fokusere på andet end
            parkeringsadministration.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="font-h4 text-center md:text-left">
            Tilmeld dig vores nyhedsbrev
          </h4>
          <Newsletter />
        </div>
      </div>
      <div className="space-y-10 py-10 md:flex md:justify-between md:space-y-0">
        <div className="space-y-10 md:flex md:items-baseline md:space-x-28 md:space-y-0">
          <div className="space-y-6">
            <h4 className="font-h4 uppercase">Om os</h4>
            <div className="font-mobile-h4 md:font-laptop-h5 flex flex-col space-y-4">
              <Link
                className="font-h5 text-gray-600 hover:text-gray-900"
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className="font-h5 text-gray-600 hover:text-gray-900"
                to="/omos"
              >
                Om ParkZone
              </Link>
              <Link className="font-h5 text-gray-600 hover:text-gray-900">
                Ledige stillinger
              </Link>
              <Link className="font-h5 text-gray-600 hover:text-gray-900">
                Persondatapolitik
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-h4 uppercase">Adresse</h4>
            <div className="font-body-md">
              <p className="text-gray-500">Valhøjs Allé 174-176</p>
              <p className="text-gray-500">2610 Rødovre</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="font-h4 uppercase">Kontakt</h4>
          <div className="font-body-md">
            <div>
              <p className="text-gray-500 hover:text-gray-900">
                <a href="tel:+4570252696">+45 70 25 26 96</a>
              </p>
              <p className="text-gray-500 hover:text-gray-900">
                <a href="mailto:info@parkzone.dk">info@parkzone.dk</a>
              </p>
            </div>
            <p className="pt-7 text-gray-500">CVR 27396682</p>
          </div>
        </div>
      </div>
      <div className="border-t-1 border-gray-200 py-4">
        <p className="font-body-xs text-center text-gray-400">
          Copyright &copy; ParkZone A/S &#124; All Rights Reserved |{" "}
          <Button size="sm" variant="link" className="text-gray-500">
            Terms and Conditions
          </Button>{" "}
          |{" "}
          <Button size="sm" variant="link" className="text-gray-500">
            Persondatapolitik
          </Button>
        </p>
      </div>
    </div>
  );
}
