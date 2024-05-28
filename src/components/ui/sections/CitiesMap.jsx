import PropTypes from "prop-types";
import { useCallback, useEffect, useMemo, useState } from "react";
import useFirebase from "../../hooksAndFunctions/fetchFirebase";
import clsx from "clsx";
import { Link } from "react-router-dom";
import Filter from "../atoms/Filter";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

// Komponent til at vælge parkeringsområde på Find Parkering siden
export default function CitiesMap() {
  const [selectedCity, setSelectedCity] = useState();
  const [filterRange, setFilterRange] = useState([]);

  //Default værdien sættes til 'Aarhus' når skærmbredden er over 767px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setSelectedCity("Aarhus");
      } else {
        setSelectedCity(undefined); // Reset af state hvis skærmen er under 767px
      }
    };
    handleResize();
  }, []);

  // Funktion til at håndtere datafetch fra Firebase
  const handleDataFetch = useCallback((data) => {
    console.log(data); // Logger den hentede data til konsollen
  }, []);

  const data = useFirebase(handleDataFetch); // Henter data fra Firebase og kalder handleDataFetch

  //Sørger for at hver enkelt by kun vises 1 gang
  const uniqueCities = useMemo(() => {
    if (!data) return []; // Returnerer en tom array hvis data ikke er tilgængelig

    const uniqueCitySet = new Set(); // Alle unikke byværdier gemmes så det samme bynavn ikke vises flere gange

    data.forEach((parking) => {
      // Tilføjer hver by til uniqueCities
      uniqueCitySet.add(parking.city);
    });

    // Konverterer settet tilbage til en array og sorterer den
    const sortedCities = Array.from(uniqueCitySet).sort();

    // Returnerer de unikke og sorteret byer
    return sortedCities;
  }, [data]);

  // Definerer filtreringen efter startbogstav
  const handleFilterChange = useCallback((range) => {
    setFilterRange(range); // Opdaterer filterområdet baseret på valgt bogstav
  }, []);

  // Filtrer de unikke byer baseret på det valgte filterområde
  const filteredCities = useMemo(() => {
    if (filterRange.length === 0) return uniqueCities; // Returnerer alle unikke byer hvis filterområdet er tomt

    // Returnerer kun de byer, der starter med mindst et af bogstaverne i filterområdet
    return uniqueCities.filter((city) =>
      filterRange.some((letter) => city.startsWith(letter)),
    );
  }, [filterRange, uniqueCities]);

  return (
    <>
      {/*Parkerings-finder for mobil */}
      <div className=" flex w-full flex-col items-center rounded-xl bg-sky-100 px-7 py-10 sm:w-96 md:hidden">
        <div className="pb-3 sm:pb-5 ">
          <Filter
            onFilterChange={handleFilterChange}
            activeRange={filterRange}
          />
        </div>
        <div className="w-full space-y-6 px-5 pt-5 md:hidden">
          {selectedCity && ( // Render tilbage-knap hvis en by er valgt
            <div
              onClick={() => setSelectedCity(null)} //Sætter selectedCity til null når tilbage-knappen klikkes
              className="font-h5 flex w-full cursor-pointer flex-row items-center hover:bg-marine-100 "
            >
              <FaArrowLeftLong className=" text-marine-800 text-sm" />
              <h4 className="pl-2">Back</h4>
            </div>
          )}
          {selectedCity // Render addresser hvis en by er valgt
            ? data &&
              data
                .filter((parking) => parking.city === selectedCity)
                .map((parking) => (
                  <Link
                    key={parking.id}
                    className="font-body-md flex w-full items-center border-b-1 border-marine-200"
                    to={`/privat/findparkering/${parking.id}`}
                  >
                    <p>{parking.address}</p>
                    <FaArrowRightLong className="ml-auto text-marine-300 text-sm" />
                  </Link>
                ))
            : // Render byer hvis der ikke er valgt en by
              filteredCities &&
              filteredCities.map((city) => (
                <div
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={clsx(
                    "font-body-l flex w-full cursor-pointer flex-row items-center border-b-1 border-marine-200 hover:bg-marine-100",
                  )}
                >
                  <h4 className="pr-2">{city}</h4>
                  <FaArrowRightLong className="ml-auto text-marine-300 text-sm" />
                </div>
              ))}
        </div>
      </div>

      {/*Parkerings-finder for tablet og laptop */}
      <div className="mx-auto hidden w-full max-w-screen-lg overflow-hidden rounded-xl shadow-sm md:flex">
        <div className=" flex w-2/5 min-w-36 flex-col bg-sky-100 px-6 py-8 lg:w-2/6 lg:px-4 xl:px-8 xl:py-10">
          <div className="place-self-center pb-6 xl:pb-8">
            <Filter
              onFilterChange={handleFilterChange}
              activeRange={filterRange}
            />
          </div>
          <div className="space-y-6 px-2 xl:px-4">
            {filteredCities &&
              filteredCities.map((city) => (
                <div
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={clsx(
                    "flex w-full cursor-pointer flex-row items-center border-b-1 border-marine-200 transition-transform duration-300 ease-in-out hover:scale-105",
                  )}
                >
                  <h4 className="font-body-md pb-1.5 pr-2 ">{city}</h4>
                  <FaArrowRightLong className="ml-auto text-marine-300 text-xs" />
                </div>
              ))}
          </div>
        </div>
        <div className="w-3/5 bg-white px-6 py-8 lg:w-4/6 xl:px-8">
          {selectedCity && (
            <div className="border-b-1 border-marine-100 pb-2">
              <h2 className="font-h3">{selectedCity}</h2>
            </div>
          )}
          <div className="grid grid-cols-2 gap-x-5 gap-y-4 pt-6 lg:gap-x-8 xl:pt-7">
            {data &&
              data
                .filter((parking) => parking.city === selectedCity)
                .map((parking) => (
                  <Link
                    key={parking.id}
                    className="font-body-xs xl:font-body-s flex border-b-1 border-marine-100"
                    to={`/privat/findparkering/${parking.id}`}
                  >
                    <div>{parking.address}</div>
                    <FaArrowRightLong className="ml-auto text-gray-300 text-xs" />
                  </Link>
                ))}
          </div>
        </div>
      </div>
    </>
  );
}
CitiesMap.propTypes = {
  onFetchData: PropTypes.any,
};
