import { useState } from "react";
import InputField from "../atoms/InputField";
import Dropdown from "../atoms/Dropdown";
import PropTypes from "prop-types";
import RadioButton from "../buttons/RadioButton";
import { FiPlus } from "react-icons/fi";
import Button from "../buttons/Button";
import Alert from "./Alert";
import Category from "../atoms/Category";

// Komponenten for kontaktformular
export default function ContactForm({ variant }) {
  const [selectedRadioOption, setSelectedRadioOption] = useState("abonnement");
  const [alertVisible, setAlertVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertText, setAlertText] = useState("");
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(null);

  // Funktion til håndtering af ændring i valgt radiooption
  const handleOptionChange = (event) => {
    setSelectedRadioOption(event.target.value);
  };

  // Funktion til håndtering af ændring i valgt radioknap
  const handleRadioButtonChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleDropdownSelect = (option) => {
    setSelectedDropdownOption(option);
  };

  // Funktion til håndtering af submit af kontaktformularen
  function handleSubmit(event) {
    event.preventDefault(); // Forhindrer standard opførsel af form så siden ikke genindlæses ved submit

    if (!isChecked) {
      // Hvis checkbox ikke er markeret, vis fejlalert
      setAlertVisible(true);
      setAlertType("error");
      setAlertTitle("Manglende accept af persondatapolitik");
      setAlertText(
        "Venligst acceptér vilkårene og betingelserne for at sende.",
      );
      setTimeout(() => setAlertVisible(false), 3000); // Skjul alert efter 3 sekunder
    } else if (!selectedDropdownOption) {
      // Hvis dropdown ikke er markeret, vis fejlalert
      setAlertVisible(true);
      setAlertType("error");
      setAlertTitle("Manglende undfyldning");
      setAlertText("Venligst udfyld de manglende felter for at sende.");
      setTimeout(() => setAlertVisible(false), 3000); // Skjul alert efter 3 sekunder
    } else {
      // Ellers vis succesalert
      setAlertVisible(true);
      setAlertType("success");
      setAlertTitle("Tak for at kontakte os!");
      setAlertText("Din kontaktformular er afsendt og du hører fra os snarest");
      setTimeout(() => setAlertVisible(false), 5000); // Skjul alert efter 5 sekunder
    }
  }

  // Funktion til at lukke alerten
  function handleCloseAlert() {
    setAlertVisible(false);
  }

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="w-fill min-w-80 max-w-md rounded-2xl bg-white p-5 md:p-7 lg:p-10"
    >
      <div className="space-y-1">
        <Category color="orange">Kontakt</Category>
        <h2 className="font-h2">Hvordan kan vi hjælpe dig?</h2>
      </div>
      <div className="space-y-6 border-b-1 border-gray-300 pb-6 pt-10">
        <p className="font-body-md">
          Uanset hvad du mangler svar på, sidder vores team af dygtige
          medarbejdere klar til at hjælpe dig. Udfyld kontaktformularen, så
          kontakter vi dig snarest muligt.
        </p>
      </div>
      {variant === "privat" && ( // Kontaktformularens indhold på privatsiden
        <div className="pt-6">
          <h6 className="font-h6">Baggrund</h6>
          <p>Hvad drejer henvendelsen sig om?</p>
          <div className="space-x-5">
            <RadioButton
              type="radio"
              value="abonnement"
              label="Abonnement"
              checked={selectedRadioOption === "abonnement"}
              onChange={handleOptionChange}
            />
            <RadioButton
              type="radio"
              value="kontrolafgift"
              label="Kontrolafgift"
              checked={selectedRadioOption === "kontrolafgift"}
              onChange={handleOptionChange}
            />
          </div>
        </div>
      )}
      <div className="mb-6 border-b-1 border-gray-300 pb-2 pt-4">
        <div className="flex space-x-3">
          <InputField
            label="Fornavn"
            id="firstName"
            type="text"
            placeholder="Fornavn"
          />
          <InputField
            label="Efternavn"
            id="lastName"
            type="text"
            placeholder="Efternavn"
          />
        </div>
        <InputField
          label="E-mail"
          id="email"
          type="email"
          placeholder="Mailadresse"
        />
        <div className="flex space-x-3">
          <InputField
            label="Mobil"
            id="mobil"
            type="number"
            placeholder="Mobilnummer"
          />
          <div className="w-full"></div>
        </div>
      </div>
      {variant === "erhverv" && ( // Kontaktformularens indhold på erhvervsiden
        <div>
          <Dropdown
            label="Afdeling"
            placeholder="Vælg den afdeling du ønsker at kontakte"
            dropdownOptions={[
              "Juridisk afdeling",
              "Salgsafdeling",
              "Kundeservice",
              "Andet",
            ]}
            onSelect={handleDropdownSelect}
          />
          <div className="flex w-full items-center space-x-5">
            <div>
              <InputField
                label="Løbenummer / Registreringsnummer"
                id="regNumber"
                type="number"
                placeholder="F.eks 1234567"
              />
            </div>
            <RadioButton
              value="regNumbCheckbox"
              label="Ej tildelt"
              type="checkbox"
            />
          </div>
        </div>
      )}
      {selectedRadioOption === "kontrolafgift" &&
        variant === "privat" && ( // Kontaktformularens indhold på privatsiden når henvendelsen omhandler en kontrolafgift
          <div>
            <div className="border-b-1 border-gray-300 pb-2">
              <InputField
                label="Løbenummer"
                id="serialNumber"
                description="Du finder det 7-cifrede løbenummeret på din afgift eller betalingspåmindelse."
                type="number"
                placeholder="F.eks 1234567"
              />
              <InputField
                label="Nummerplade"
                id="licensePlate"
                type="text"
                placeholder="F.eks AA 12 345"
              />
              <Dropdown
                label="Hændelse"
                placeholder="Vælg den mulighed som bedst beskriver din situation"
                dropdownOptions={[
                  "Modtaget rykker trods betaling",
                  "Afdragsordning",
                  "Modtaget afgift men ejer ikke bilen",
                  "Gyldig p-tilladelse eller p-billet",
                  "Hospitalet",
                  "Betalingsapp",
                  "Kameraparkering",
                  "Elektronisk eller manuel P-skive",
                  "ParkCare",
                  "Parkering uden for bås",
                  "Andet",
                ]}
                onSelect={handleDropdownSelect}
              />
            </div>
            <div className="py-6">
              <h6 className="font-h6 pb-1.5">Vedhæftninger</h6>
              <div className="relative cursor-pointer">
                <input
                  name="files[]"
                  type="file"
                  accept=".pdf, .jpg, .jpeg, .png, .doc, .docx, .xml"
                  className="block w-full py-2 text-slate-500 font-league text-sm capsize file:mr-4 file:cursor-pointer
              file:rounded-full file:border-dotted file:border-marine-800 file:bg-transparent file:px-4 file:py-2
              file:pl-8 file:pt-2.5 file:text-marine-800 file:font-league
              file:text-sm file:leading-none
              file:capsize hover:file:border-solid"
                  multiple="multiple"
                />
                <FiPlus className="absolute left-4 top-3.5 h-3.5 w-auto text-marine-800" />
              </div>
            </div>
          </div>
        )}

      {selectedRadioOption === "abonnement" &&
        variant === "privat" && ( // Kontaktformularens indhold på privatsiden når henvendelsen omhandler abonnement
          <div className="">
            <InputField
              id="customerNumber"
              type="number"
              label="Kundenummer"
              placeholder="F.eks. 1234567"
              description="Du finder dit kundenummer i din kontrakt eller i en tidligere mail fra os."
            />
          </div>
        )}

      <div className="border-b-1 border-gray-300 pb-4">
        <h6 className="font-h6 pb-1.5">Besked</h6>
        <textarea
          {...(variant === "privat" ? { required: true } : {})} // Besked-feltet gøres obligatorisk på privatsiden
          name="message"
          id="message"
          placeholder="Har du nogle bemærkninger kan de skrives her"
          className=" font-body-s h-32 w-full resize-none rounded-sm bg-gray-100 p-3 text-gray-800 outline-none placeholder:text-gray-400 placeholder:text-sm focus:outline-2 focus:-outline-offset-2 focus:outline-sky-200"
        ></textarea>
      </div>
      <div className="space-y-6">
        <div className="pt-6">
          <RadioButton
            value="datapolicy"
            type="checkbox"
            label="Jeg accepterer ParkZones persondatapolitik. Du kan læse om hvordan vi behandler dine personoplysninger"
            style="small"
            checked={isChecked}
            onChange={handleRadioButtonChange}
          />
        </div>
        <Button type="submit" size="md" variant="primary">
          Send
        </Button>
      </div>
      <Alert
        isVisible={alertVisible}
        type={alertType}
        title={alertTitle}
        text={alertText}
        onClose={handleCloseAlert}
      />
    </form>
  );
}

ContactForm.propTypes = {
  variant: PropTypes.oneOf(["privat", "erhverv"]).isRequired,
};
