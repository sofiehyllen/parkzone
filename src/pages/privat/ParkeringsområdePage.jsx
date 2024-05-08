import PropTypes from 'prop-types';
import useFirebase from '../../hooks/fetchFirebase';
import { useCallback } from 'react';
import { useParams } from 'react-router-dom';

export default function ParkingPage() {
  const { id } = useParams();

  const handleDataFetch = useCallback(
    (data) => {
      console.log(data);
      // Filter data based on parkingId
      const specificData = data.filter((item) => item.id === id);
      console.log(specificData);
    },
    [id]
  );

  const data = useFirebase(handleDataFetch);

  return (
    <div>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

ParkingPage.propTypes = {
  parkingId: PropTypes.any,
};
