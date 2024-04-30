import PropTypes from 'prop-types';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

export default function CitiesMap() {
  let { data: city } = useFetch('http://localhost:1337/api/cities?populate=*');
  let { data: address } = useFetch(
    'http://localhost:1337/api/addresses?populate=*'
  );
  console.log(address);
  return (
    <div>
      <div>
        {city && (
          <div className='space-y-2'>
            {city.data.map((city) => (
              <div key={city.id} className='bg-gray-200 rounded-md'>
                <h3 className='p-3'>{city.attributes.cityName}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='mt-10'>
        {address && (
          <div>
            {address.data.map((address) => (
              <Link key={address.id}>
                <h3 className='p-3 bg-blue-200 rounded-md mb-2'>
                  {address.attributes.address}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
CitiesMap.propTypes = {
  cities: PropTypes.any,
};
