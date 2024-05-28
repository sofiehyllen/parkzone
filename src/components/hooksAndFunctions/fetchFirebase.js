import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { parkingDatabase } from "../../../firebase.config";

// Komponent til at hente data fra Firebase og kald onFetchData med det opdaterede data ---//
const useFirebase = (onFetchData) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Sætter en snapshot listener på 'parking' collection i Firestore
      const unsubscribe = onSnapshot(
        // Reference til 'parking' collection i Firestore
        collection(parkingDatabase, "parking"),
        (snapshot) => {
          const docs = []; // Initialiserer en tom array til at gemme dokumenter

          // Itererer over hvert dokument i snapshot
          snapshot.forEach((doc) => {
            docs.push({ id: doc.id, ...doc.data() }); // Tilføjer dokumentets data til docs array, inklusive dokumentets id
          });

          setData(docs); // Opdaterer data state med de hentede dokumenter
          if (onFetchData) {
            onFetchData(docs); // Kalder onFetchData callback hvis den er angivet
          }
        },
      );

      // Rydder op når komponenten unmountes
      return unsubscribe;
    };

    fetchData(); // Kalder fetchData
  }, [onFetchData]);

  return data; // Returnerer data fra hooken
};

export default useFirebase;
