import PageWrapper from "../../components/wrappers/PageWrapper";
import kameraparkering from "../../assets/kameraparkering.jpg";
import InputField from "../../components/atoms/InputField";
import Dropdown from "../../components/atoms/Dropdown";
import { useState } from "react";
import Button from "../../components/buttons/Button";
import Doodle5 from "../../components/svg/Doodle5";
import Alert from "../../components/atoms/Alert";
import Category from "../../components/atoms/Category";

// Check ud siden
export default function CheckUdPage() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertText, setAlertText] = useState("");
  const [selectedDropdownOption, setSelectedDropdownOption] = useState(null);

  // Håndtering af det valgte element i dropdown listen
  const handleDropdownSelect = (option) => {
    setSelectedDropdownOption(option);
  };

  // Funktion til håndtering af submit, som her er søg-knappen
  function handleSubmit(event) {
    event.preventDefault(); // Forhindrer standard opførsel af form så siden ikke genindlæses ved submit

    if (selectedDropdownOption === null) {
      // Error-besked hvis der ikke er valgt et element i dropdown listen
      setAlertVisible(true);
      setAlertType("error");
      setAlertTitle("Manglende parkeringsområde");
      setAlertText("Vælg venligst et parkeringsområde fra listen");
      setTimeout(() => setAlertVisible(false), 3000); // Fjerner alerten efter 3 sek.
    } else {
      setAlertVisible(true); // Error-besked når der søges, for at simulerer en ægte UX. Brugeren får en besked om at nummerpladen ikke er i databasen.
      setAlertType("error");
      setAlertTitle("Ugyldig nummerplade");
      setAlertText("Den angivne nummerplade findes ikke i vores system");
      setTimeout(() => setAlertVisible(false), 5000);
    }
  }

  // Håndterer lukning af Alert
  function handleCloseAlert() {
    setAlertVisible(false);
  }
  return (
    <PageWrapper breadcrumb={true}>
      <div className="px-5 sm:px-16 md:px-20 lg:px-32">
        <div className="relative mx-auto max-w-screen-lg">
          <div className="absolute right-0 top-0 -z-10 overflow-hidden rounded-3xl sm:ml-20">
            <img src={kameraparkering} alt="Kameraparkering" />
            <div className="absolute right-0 top-0 rotate-110 scale-75 sm:-right-32 sm:bottom-10 sm:top-auto sm:-rotate-30 sm:scale-125 xl:-right-0">
              <Doodle5 color="#4FBAE8" />
            </div>
          </div>
          <div className="px-5 pt-40 sm:pt-10">
            <form
              onSubmit={(event) => handleSubmit(event)}
              className="mx-auto max-w-sm rounded-2xl bg-gray-50 p-5 sm:mx-0 md:max-w-md md:p-7 lg:p-10"
            >
              <div className="space-y-1">
                <Category color="orange">Check ud</Category>
                <h2 className="font-h2">Glemt at checke ud?</h2>
              </div>
              <div className="mb-6 space-y-6 border-b-1 border-gray-200 pb-6 pt-10">
                <p className="font-body-md">
                  Skulle du glemme at betale inden udkørsel, kan du i op til 48
                  timer efter endt parkering checke ud af parkeringen her -
                  selvfølgelig helt uden ekstra gebyrer.
                </p>
              </div>
              <div className="border-b-1 border-gray-200 pb-3">
                <Dropdown
                  label="Parkeringsområde"
                  placeholder="Vælg parkeringsområde"
                  className="bg-white "
                  required={true}
                  dropdownOptions={[
                    "Fields",
                    "Bruuns Galleri",
                    "Rødovre Port",
                    "Asylgade",
                    "Scandic - Sydhavnen",
                    "IKEA - København",
                    "Torvebyen",
                    "Amager Strandvej",
                    "Trøjborg Centret",
                  ]}
                  onSelect={handleDropdownSelect}
                />
                <div className="flex items-center space-x-5">
                  <InputField
                    type="text"
                    id="licensePlate"
                    className="bg-white "
                    label="Søg efter nummerplade"
                    placeholder="F.eks. AB 12 345"
                  />
                  <div>
                    <Button type="submit" size="sm" variant="secondary">
                      Søg
                    </Button>
                  </div>
                </div>
              </div>
              <p className="font-body-s pb-3 pt-6">
                Kan din nummerplade ikke findes i systemet?
              </p>
              <p className="font-body-xs pb-6">
                Dette kan der være flere grunde til. Måske er din parkering
                betalt via en betalingsapp, måske er dit køretøj registreret på
                abonnement, eller måske blev din nummerplade ikke registreret
                ved indkørsel.
              </p>
              <p className="font-body-xs pb-6">
                Er du i tvivl, så tøv ikke med at kontakte os. Vores
                kundeservice sidder klar til at hjælpe dig.
              </p>
              <Button
                type="submit"
                size="md"
                variant="secondary"
                to="/privat/kontakt"
              >
                Kontakt
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Alert
        isVisible={alertVisible}
        type={alertType}
        title={alertTitle}
        text={alertText}
        onClose={handleCloseAlert}
      />
    </PageWrapper>
  );
}
