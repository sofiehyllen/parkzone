import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Funktion som indlæser siden fra toppen
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Scroller til toppen når stien ændres

  return null;
}
