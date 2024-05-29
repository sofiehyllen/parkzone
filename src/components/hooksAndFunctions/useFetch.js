import { useState, useEffect } from "react";

// Custom hook til fetch, som tager url som parameter
const useFetch = (url) => {
  // Definition af variabler data, error og loading
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect hook der kører når url ændres
  useEffect(() => {
    // Definerer en asynkron funktion fetchData til at hente data
    const fetchData = async () => {
      // Sætter loading state til true før data hentes
      setLoading(true);
      try {
        const res = await fetch(url); // Sender en HTTP GET anmodning til den angivne URL
        const json = await res.json(); // Parser JSON svaret fra serveren
        setData(json); // Opdaterer data state med de hentede data
        setLoading(false); // Sætter loading state til false, da data er hentet
      } catch (error) {
        setError(error); // Opdaterer error state, hvis der opstår en fejl
        setLoading(false); // Sætter loading state til false, da hentningen er afsluttet (med fejl)
      }
    };
    fetchData(); // Kalder fetchData funktionen
  }, [url]);
  return { loading, error, data };
};

export default useFetch;
