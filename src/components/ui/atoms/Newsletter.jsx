import { useState } from "react";
import Button from "../buttons/Button";
import Alert from "../sections/Alert";

// Komponent for tilmelding til nyhedsbrev
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertText, setAlertText] = useState("");

  // Funktion der håndterer ændringer i inputfeltet
  function handleInput(event) {
    setEmail(event.target.value); // Opdaterer e-mail state med den indtastede værdi
  }

  // Funktion der håndterer form submit
  function handleSubmit(event) {
    event.preventDefault(); // Forhindrer standard form submit

    // Tjekker om e-mailen er gyldig og viser error-alert hvis den ikke er, og en succes-alert hvis den er
    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setAlertVisible(true);
      setAlertType("error");
      setAlertTitle("Ugyldig email");
      setAlertText("Indtast venligt en gyldig email");
      setTimeout(() => setAlertVisible(false), 3000); // Skjuler alert efter 3 sekunder
    } else {
      setEmail("");
      setAlertVisible(true);
      setAlertType("success");
      setAlertTitle("Tak for din tilmelding");
      setAlertText("Du er nu tilmeldt vores nyhedsbrev");
      setTimeout(() => setAlertVisible(false), 3000); // Skjuler alert efter 3 sekunder
    }
  }

  // Funktion der håndterer lukning af alert
  function handleCloseAlert() {
    setAlertVisible(false);
  }

  return (
    <>
      <div className="relative w-fit">
        <form onSubmit={handleSubmit} className="w-fit">
          <input
            type="email"
            placeholder="Skriv din mail her"
            value={email}
            onChange={handleInput}
            className="font-body-xs w-80 justify-between rounded-full border-1 bg-transparent py-2.5 pl-4 placeholder-gray-500 capsize inner-border-gray-200 focus:outline-0 focus:ring-1 focus:ring-sky-300"
          />
          <Button
            size="sm"
            variant="primary"
            type="submit"
            className="absolute right-1 top-1"
          >
            Tilmeld
          </Button>
          <Alert
            isVisible={alertVisible}
            type={alertType}
            title={alertTitle}
            text={alertText}
            onClose={handleCloseAlert}
          />
        </form>
      </div>
    </>
  );
}
