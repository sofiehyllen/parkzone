import { Link, useLocation } from "react-router-dom";
import BackButton from "../buttons/BackButton";

// Komponent for brødkrummer på hver side
const Breadcrumb = () => {
  const location = useLocation(); //Finder nuværende sti for brugeren
  const pathnames = location.pathname.split("/").filter((x) => x); //Deler stinavnet med '/'

  // Definition af toggleState ud fra hvad den er sat til i localStorage
  const toggleState = JSON.parse(localStorage.getItem("toggleState"));

  //Bestemmer titlen for hvert stinavn
  const pathMapping = {
    "/omos": "Om os",
    "/erhverv/produkter": "Produkter & services",
    "/privat/checkud": "Check ud",
    "/privat/findparkering": "Find parkering",
    "/privat/findparkering/bruunsgalleri": "Bruuns Galleri",
    "/privat/findparkering/arosalle2": "Aros Allé 2",
    "/privat/findparkering/strandbygade20": "Strandbygade 20",
    "/privat/findparkering/havnegade10": "Havnegade 10",
    "/privat/findparkering/osterfaelledtorv": "Østerfælled Torv",
    "/privat/findparkering/vedvesterport3a": "Ved Vesterport 3 - 3A",
    "/privat/findparkering/georgbrandesplads2": "Georg Brandes Plads 2",
    "/privat/findparkering/blegdammen4": "Blegdammen 4 - 22",
    "/privat/findparkering/borgvold12": "Borgvold 12",
    "/privat/findparkering/vestrestationsvej8": "Vester Stationsvej 8 - 10",
    "/blog/131": "Artikel",
    "/blog/127": "Artikel",
    "/blog/123": "Artikel",
    "/blog/129": "Artikel",
    "/blog/119": "Artikel",
    "/blog/109": "Artikel",
    "/blog/83": "Artikel",
  };

  // Funktion til at navigere tilbage til forrige side
  const previousPage = () => {
    window.history.back();
  };

  return (
    <div className="relative flex w-full justify-between px-5 pb-10 sm:items-end md:px-10 ">
      <BackButton onClick={previousPage} className="font-h4 text-gray-800" />
      <nav aria-label="Breadcrumb">
        <ol className="list-none space-y-1 p-0 sm:inline-flex sm:space-y-0">
          <li className="flex items-center justify-end ">
            <Link
              to={toggleState ? "/erhverv" : "/privat"} // Sender brugeren til homepage baseret på toggleState
              className="font-h6 sm:font-h5 text-gray-300 transition-colors duration-300 hover:text-gray-400  sm:text-gray-300"
            >
              Home
            </Link>
            <span className="font-h6 sm:font-h5 mx-2 text-gray-300 sm:text-gray-300">
              /
            </span>
          </li>
          {pathnames.map((name, index) => {
            if (index === 0 && pathnames.length > 1) return null; // Skipper første element hvis der er flere elementer (så der ikke står endten "erhverv" eller "privat")
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`; // Bygger sti til hvert niveau
            const isLast = index === pathnames.length - 1; // Tjekker om det er sidste element
            return (
              // Viser titel fra pathMapping eller stinavnet som styles i blå hvis det står sidst, og i grå og som et link til stien hvis det ikke gør
              <li
                key={name}
                className="font-h6 sm:font-h5 flex items-center justify-end"
              >
                {isLast ? (
                  <span className="rounded-sm bg-marine-50 px-3 pt-0.5 text-marine-500 first-letter:uppercase">
                    {pathMapping[routeTo] || name}
                  </span>
                ) : (
                  <>
                    <Link
                      to={routeTo}
                      className="text-gray-300 transition-colors duration-300 hover:text-gray-400"
                    >
                      {pathMapping[routeTo] || name}
                    </Link>
                    <span className="mx-2 text-gray-300">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
