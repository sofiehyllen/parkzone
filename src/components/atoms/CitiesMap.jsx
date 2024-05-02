import PropTypes from 'prop-types';
import { useCallback, useMemo, useState } from 'react';
import useFirebase from '../../hooks/fetchFirebase';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export default function CitiesMap() {
  const [selectedCity, setSelectedCity] = useState(0);

  const handleDataFetch = useCallback((data) => {
    console.log(data);
  }, []);

  const data = useFirebase(handleDataFetch);

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

  return (
    <div>
      <div className='space-y-2'>
        {uniqueCities &&
          uniqueCities.map((city) => (
            <div
              key={city}
              onClick={() => setSelectedCity(city)}
              className={clsx(
                'bg-gray-200 rounded-md p-2 font-h4 h-fit w-fit hover:bg-marine-100 cursor-pointer',
                {
                  'bg-marine-100': selectedCity === city,
                }
              )}>
              <h4 className=''>{city}</h4>
            </div>
          ))}
      </div>
      <div>
        {data &&
          data
            .filter((parking) => parking.city === selectedCity)
            .map((parking) => (
              <Link
                key={parking.id}
                className=''
                to={`/privat/findparkering/${parking.id}`}>
                <div>{parking.address}</div>
              </Link>
            ))}
      </div>
    </div>
  );
}
CitiesMap.propTypes = {
  onFetchData: PropTypes.any,
};
