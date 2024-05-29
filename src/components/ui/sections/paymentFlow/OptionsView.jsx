import TypeCard from "../../cards/TypeCard";
import PropTypes from "prop-types";

// Komponent for vinduet med "Dine oplysninger" i betalingsflowet
const OptionsView = ({ handlePeriodeSelect, handleOptionSelect }) => (
  <div className="flex flex-col items-center justify-center">
    <div className="w-full pt-5">
      <p className="font-h2 px-5 pb-14 text-center">
        Hvilken type parkering søger du?
      </p>
      <div className="mx-auto flex w-fit flex-col space-y-10 sm:flex-row sm:space-x-5 sm:space-y-0 lg:space-x-16">
        <TypeCard
          number="01"
          title="Periodeparkering"
          body="Med periodeparkering kan du parkere din bil på en af vores p-pladser indenfor en bestemt tidsperiode. Hvor længe perioden skal vare er helt op til dig. Det kan være tre kvarter, en enkelt dag eller flere uger."
          onClick={() => handlePeriodeSelect("timeperiod")}
        />
        <TypeCard
          number="02"
          title="Abonnement"
          body="Hvis du ofte parkerer på samme parkeringsplads, kan det være en god ide at købe et parkeringsabonnement til området. Så har du fri afbenyttelse af parkeringsområdet, og du skal ikke længere bekymrer dig om at få købt parkeringsbillet."
          onClick={() => handleOptionSelect("subscription")}
        />
      </div>
    </div>
  </div>
);

OptionsView.propTypes = {
  handleOptionSelect: PropTypes.func.isRequired,
  handlePeriodeSelect: PropTypes.func.isRequired,
};

export default OptionsView;
