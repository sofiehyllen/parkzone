import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { parkingDatabase } from '../../firebase.config';

//--- Komponent til at hente data fra Firebase og kald onFetchData med det opdaterede data ---//
const useFirebase = (onFetchData) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const unsubscribe = onSnapshot(
        collection(parkingDatabase, 'parking'),
        (snapshot) => {
          const docs = [];
          snapshot.forEach((doc) => {
            docs.push({ id: doc.id, ...doc.data() });
          });

          setData(docs);
          if (onFetchData) {
            onFetchData(docs); // Call onFetchData if provided
          }
        }
      );

      // Return the unsubscribe function to clean up the listener
      return unsubscribe;
    };

    fetchData();
  }, [onFetchData]);

  return data;
};

export default useFirebase;
