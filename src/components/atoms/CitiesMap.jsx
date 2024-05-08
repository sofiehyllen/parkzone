import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useFirebase from '../../hooks/fetchFirebase';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaArrowLeftLong } from 'react-icons/fa6';

export default function CitiesMap() {
  const [selectedCity, setSelectedCity] = useState();
  const [filterRange, setFilterRange] = useState([]);

  //Jeg sætter default værdien til 'Aarhus' når skærmbredden er over 767px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setSelectedCity('Aarhus');
      } else {
        setSelectedCity(undefined); // Reset the state if screen size is below 767px
      }
    };
    handleResize();
  }, []);

  const handleDataFetch = useCallback((data) => {
    console.log(data);
  }, []);

  const data = useFirebase(handleDataFetch);

  //Jeg  sørger for at hver enkelt by kun vises 1 gang
  const uniqueCities = useMemo(() => {
    if (!data) return [];
    // Create a Set to store unique city values
    const uniqueCitySet = new Set();
    // Iterate over the data and add each city to the Set
    data.forEach((parking) => {
      uniqueCitySet.add(parking.city);
    });
    // Convert the Set back to an array
    return Array.from(uniqueCitySet);
  }, [data]);

  // Jeg definerer filtreringen efter startbogstav
  const handleFilterChange = useCallback((range) => {
    setFilterRange(range);
  }, []);

  const filteredCities = useMemo(() => {
    if (filterRange.length === 0) return uniqueCities;
    return uniqueCities.filter((city) =>
      filterRange.some((letter) => city.startsWith(letter))
    );
  }, [filterRange, uniqueCities]);

  return (
    <>
    {/*Parkerings-finder for mobil */}
      <div className=' bg-marine-100 px-7 py-10 w-full rounded-xl flex flex-col items-center sm:w-96 md:hidden'>
        <div className='pb-3 sm:pb-5 '>
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className='space-y-6 w-full px-5 pt-5 md:hidden'>
          {selectedCity && ( // Render back button if a city is selected
            <div
              onClick={() => setSelectedCity(null)} // Set selectedCity to null when back button is clicked
              className='flex flex-row items-center w-full font-h5 hover:bg-marine-100 cursor-pointer '>
              <FaArrowLeftLong className=' text-marine-800 text-sm' />
              <h4 className='pl-2'>Back</h4>
            </div>
          )}
          {selectedCity // Render addresses if a city is selected
            ? data &&
              data
                .filter((parking) => parking.city === selectedCity)
                .map((parking) => (
                  <Link
                    key={parking.id}
                    className='flex items-center font-body-md w-full border-b-1 border-marine-200'
                    to={`/privat/findparkering/${parking.id}`}>
                    <p>{parking.address}</p>
                    <FaArrowRightLong className='ml-auto text-marine-300 text-sm' />
                  </Link>
                ))
            : // Render cities if no city is selected
              filteredCities &&
              filteredCities.map((city) => (
                <div
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={clsx(
                    'flex flex-row items-center w-full border-b-1 border-marine-200 font-body-l hover:bg-marine-100 cursor-pointer'
                  )}>
                  <h4 className='pr-2'>{city}</h4>
                  <FaArrowRightLong className='ml-auto text-marine-300 text-sm' />
                </div>
              ))}
        </div>
      </div>

      {/*Parkerings-finder for tablet og laptop */}
      <div className='hidden md:flex rounded-xl overflow-hidden w-full shadow-sm max-w-screen-lg mx-auto'>
        <div className=' bg-marine-100 px-6 py-8 w-2/5 min-w-36 flex flex-col lg:w-2/6 lg:px-4 xl:px-8 xl:py-10'>
          <div className='pb-6 place-self-center xl:pb-8'>
            <Filter onFilterChange={handleFilterChange} />
          </div>
          <div className='space-y-5 px-2'>
            {filteredCities &&
              filteredCities.map((city) => (
                <div
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={clsx(
                    'flex flex-row items-center w-full border-b-1 border-marine-200 font-body-s hover:bg-marine-100 cursor-pointer xl:font-body-md'
                  )}>
                  <h4 className='pr-2'>{city}</h4>
                  <FaArrowRightLong className='ml-auto text-xs text-marine-300' />
                </div>
              ))}
          </div>
        </div>
        <div className='w-3/5 bg-white px-6 py-8 lg:w-4/6 xl:px-8'>
          {selectedCity && (
            <div className='pb-2 border-b-1 border-marine-100'>
              <h2 className='font-h3'>{selectedCity}</h2>
            </div>
          )}
          <div className='pt-6 grid grid-cols-2 gap-x-5 gap-y-4 lg:gap-x-8 xl:pt-7'>
            {data &&
              data
                .filter((parking) => parking.city === selectedCity)
                .map((parking) => (
                  <Link
                    key={parking.id}
                    className='font-body-xs flex border-b-1 border-marine-100 xl:font-body-s'
                    to={`/privat/findparkering/${parking.id}`}>
                    <div>{parking.address}</div>
                    <FaArrowRightLong className='ml-auto text-xs text-gray-300' />
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
