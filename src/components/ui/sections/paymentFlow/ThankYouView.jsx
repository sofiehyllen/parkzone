import Button from "../../buttons/Button";
import { FaRegHeart } from "react-icons/fa6";

// Komponent for vinduet med "Tak for din booking" i betalingsflowet
const ThankYouView = () => {
  return (
    <div className="mx-auto flex w-7/12 flex-col items-center justify-center py-20">
      <div className="rounded-2xl bg-white px-16 py-16">
        <p className="font-h1 pb-10 text-center">Tak for din booking!</p>
        <p className="font-body-l pb-10 text-center">
          Din booking er registreret og du vil inden for kort tid modtage en
          kvittering på din mail.
        </p>
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-sky-100">
          <FaRegHeart className="size-5 text-marine-400" />
        </div>
        <p className="font-body-xs pt-20 text-center">
          Skal du parkere andre steder? Gå tilbage til{" "}
          <Button size="sm" variant="link" to="/privat/findparkering">
            Find parkering
          </Button>
        </p>
      </div>
    </div>
  );
};

export default ThankYouView;
