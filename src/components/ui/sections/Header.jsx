import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import Button from "../buttons/Button";
import ToggleButton from "../buttons/ToggleButton";
import logo from "/logo-regular.svg";
import CustomNavLink from "../atoms/Navlink";

// Header komponent
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State til styring af mobilnavigationens åbenhed/lukning
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("toggleState") === "true" || false,
  ); // State til styring af toggle
  const navigate = useNavigate(); // Hook til at styre navigation
  const location = useLocation(); // Hook til at bestemme brugeres lokation

  // Funktion til håndtering af toggle
  const handleToggle = () => {
    const toggleState = !isChecked; // Inverterer toggle-status
    setIsChecked(toggleState); // Opdaterer toggle-state
    localStorage.setItem("toggleState", toggleState.toString()); // Gemmer toggle-state i localStorage

    // Håndterer navigation baseret på toggle-status
    if (!toggleState) {
      navigate("/privat");
    } else {
      navigate("/erhverv");
    }

    // Håndterer specifik navigation baseret på nuværende sti
    if (location.pathname === "/erhverv/kontakt") {
      navigate("/privat/kontakt");
    } else if (location.pathname === "/privat/kontakt") {
      navigate("/erhverv/kontakt");
    }
  };

  return (
    <section className="p-5 md:p-10">
      {/* Overordnet container med header-indhold, inkl. logo og navigation */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-2 md:pb-3">
        <div className="order-last md:order-first">
          <NavLink to={isChecked ? "/erhverv" : "/privat"}>
            <img src={logo} alt="ParkZone A/S Logo" />
          </NavLink>
        </div>

        <nav className="flex items-center space-x-4">
          {/* Mobilmenu */}
          <section className="flex md:hidden">
            {/* Indhold af mobilmenu baseret på isNavOpen-tilstanden */}
            <div className={isNavOpen ? "block" : "hidden"}>
              <div className="absolute left-0 top-0 z-50 flex h-screen w-10/12 flex-col bg-white p-8 shadow-lg">
                <div
                  className="absolute right-10 top-10 text-marine-800"
                  onClick={() => setIsNavOpen(false)}
                >
                  <IoCloseOutline size={30} />
                </div>

                {/* Links i mobilmenu og 'toggle-effekt' ved klik */}
                <div>
                  <div className="pl-2.5 pt-10">
                    <ToggleButton
                      isChecked={isChecked}
                      handleToggle={handleToggle}
                    />
                  </div>
                  <div className="font-h3 flex flex-col space-y-5 pb-10 pt-20">
                    <CustomNavLink
                      to="/blog"
                      variant="primary"
                      onClick={() => setIsNavOpen(false)}
                    >
                      Blog
                    </CustomNavLink>

                    <CustomNavLink
                      to="/omos"
                      variant="primary"
                      onClick={() => setIsNavOpen(false)}
                    >
                      Om os
                    </CustomNavLink>

                    <CustomNavLink
                      to={isChecked ? "/erhverv/kontakt" : "/privat/kontakt"}
                      variant="primary"
                      onClick={() => setIsNavOpen(false)}
                    >
                      Kontakt
                    </CustomNavLink>

                    <hr className="pb-2" />
                    {isChecked ? (
                      <div className="flex flex-col space-y-5 pb-2 pl-2.5">
                        <CustomNavLink
                          onClick={() => setIsNavOpen(false)}
                          to="/erhverv/produkter"
                          variant="secondary"
                        >
                          Produkter & Services
                        </CustomNavLink>
                        <CustomNavLink
                          onClick={() => setIsNavOpen(false)}
                          to="/erhverv/segmenter"
                          variant="secondary"
                        >
                          Segmenter
                        </CustomNavLink>
                      </div>
                    ) : (
                      <div className="flex flex-col space-y-5 pb-2 pl-2.5">
                        <CustomNavLink
                          onClick={() => setIsNavOpen(false)}
                          to="/privat/findparkering"
                          variant="secondary"
                        >
                          Find parkering
                        </CustomNavLink>
                        <CustomNavLink
                          to="/privat/checkud"
                          variant="secondary"
                          onClick={() => setIsNavOpen(false)}
                        >
                          Check ud
                        </CustomNavLink>
                        <CustomNavLink
                          to="/privat/FAQ"
                          variant="secondary"
                          onClick={() => setIsNavOpen(false)}
                        >
                          FAQ
                        </CustomNavLink>
                      </div>
                    )}
                    <hr className="" />
                    <Button
                      size="md"
                      variant="tertiary"
                      target="_blank"
                      href={
                        isChecked
                          ? "https://parkweb.parkzone.dk/login/"
                          : "https://parkcare.parkzone.dk/"
                      }
                    >
                      Log ind
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobilmenuknappen med toggle-effekt */}
            <div
              className="text-marine-800"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <FiMenu size={45} />
            </div>
          </section>

          {/* Desktopmenu til laptop */}
          <div className="md:align-center hidden items-center space-x-3 md:flex">
            <Button
              size="md"
              variant="tertiary"
              target="_blank"
              href={
                isChecked
                  ? "https://parkweb.parkzone.dk/login/"
                  : "https://parkcare.parkzone.dk/"
              }
            >
              Log ind
            </Button>
            <CustomNavLink to="/blog" variant="primary">
              Blog
            </CustomNavLink>
            <CustomNavLink to="/omos" variant="primary">
              Om os
            </CustomNavLink>
            <CustomNavLink
              to={isChecked ? "/erhverv/kontakt" : "/privat/kontakt"}
              variant="primary"
            >
              Kontakt
            </CustomNavLink>

            <ToggleButton isChecked={isChecked} handleToggle={handleToggle} />
          </div>
        </nav>
      </div>
      <div className="hidden space-x-6 md:flex md:justify-end md:pt-3">
        {isChecked ? (
          <div className="flex space-x-10">
            <CustomNavLink to="/erhverv/produkter" variant="secondary">
              Produkter & Services
            </CustomNavLink>
            <CustomNavLink to="/erhverv/segmenter" variant="secondary">
              Segmenter
            </CustomNavLink>
          </div>
        ) : (
          <div className="flex space-x-10">
            <CustomNavLink to="/privat/findparkering" variant="secondary">
              Find parkering
            </CustomNavLink>
            <CustomNavLink to="/privat/checkud" variant="secondary">
              Check ud
            </CustomNavLink>
            <CustomNavLink to="/privat/FAQ" variant="secondary">
              FAQ
            </CustomNavLink>
          </div>
        )}
      </div>
    </section>
  );
}
