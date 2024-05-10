import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import Button from '../atoms/Button';
import ToggleButton from '../atoms/ToggleButton';
import logo from '../../assets/logo-regular.svg';
import CustomNavLink from '../atoms/Navlink';

//--- Header komponent ---//
export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State til styring af mobilnavigationens åbenhed/lukning
  const [isChecked, setIsChecked] = useState(
    localStorage.getItem('toggleState') === 'true' || false
  ); // State til styring af toggle
  const navigate = useNavigate(); // Hook til at styre navigation
  const location = useLocation(); // Hook til at bestemme brugeres lokation

  const handleToggle = () => {
    const toggleState = !isChecked;
    setIsChecked(toggleState);
    localStorage.setItem('toggleState', toggleState.toString());

    if (!toggleState) {
      navigate('/privat');
    } else {
      navigate('/erhverv');
    }

    if (location.pathname === '/erhverv/kontakt') {
      navigate('/privat/kontakt');
    } else if (location.pathname === '/privat/kontakt') {
      navigate('/erhverv/kontakt');
    }
  };

  // JSX-struktur for header
  return (
    <section className='p-5 md:p-10'>
      {/* Overordnet container med header-indhold, inkl. logo og navigation */}
      <div className='flex items-center justify-between border-b border-gray-300 pb-2 md:pb-3'>
        <div className='order-last md:order-first'>
          {isChecked ? (
            <NavLink to='/erhverv'>
              <img src={logo} alt='ParkZone A/S Logo' />
            </NavLink>
          ) : (
            <NavLink to='/privat'>
              <img src={logo} alt='ParkZone A/S Logo' />
            </NavLink>
          )}
        </div>

        <nav className='flex items-center space-x-4'>
          {/* Mobilmenu */}
          <section className='flex md:hidden'>
            {/* Indhold af mobilmenu baseret på isNavOpen-tilstanden */}
            <div className={isNavOpen ? 'block' : 'hidden'}>
              <div className='bg-white flex flex-col p-8 absolute w-10/12 h-screen top-0 left-0 z-50 shadow-lg'>
                <div
                  className='absolute top-10 right-10 text-marine-800'
                  onClick={() => setIsNavOpen(false)}>
                  <IoCloseOutline size={30} />
                </div>

                {/* Links i mobilmenu og 'toggle-effekt' ved klik */}
                <div>
                  <div className='pl-2.5 pt-10'>
                    <ToggleButton
                      isChecked={isChecked}
                      handleToggle={handleToggle}
                    />
                  </div>
                  <div className='flex flex-col font-h3 space-y-5 pt-20 pb-10'>
                    <CustomNavLink
                      to='/blog'
                      variant='primary'
                      onClick={() => setIsNavOpen(false)}>
                      Blog
                    </CustomNavLink>
                    <CustomNavLink
                      to='/omos'
                      variant='primary'
                      onClick={() => setIsNavOpen(false)}>
                      Om os
                    </CustomNavLink>
                    {isChecked ? (
                      <CustomNavLink
                        to='/erhverv/kontakt'
                        variant='primary'
                        onClick={() => setIsNavOpen(false)}>
                        Kontakt
                      </CustomNavLink>
                    ) : (
                      <CustomNavLink
                        to='/privat/kontakt'
                        variant='primary'
                        onClick={() => setIsNavOpen(false)}>
                        Kontakt
                      </CustomNavLink>
                    )}
                    <hr className='pb-2' />
                    {isChecked ? (
                      <div className='pl-2.5 pb-2 flex flex-col space-y-5'>
                        <CustomNavLink
                          onClick={() => setIsNavOpen(false)}
                          to='/erhverv/produkter'
                          variant='secondary'>
                          Produkter & services
                        </CustomNavLink>
                        <CustomNavLink
                          onClick={() => setIsNavOpen(false)}
                          to='/erhverv/segmenter'
                          variant='secondary'>
                          Segmenter
                        </CustomNavLink>
                      </div>
                    ) : (
                      <div className='pl-2.5 pb-2 flex flex-col space-y-5'>
                        <CustomNavLink
                          onClick={() => setIsNavOpen(false)}
                          to='/privat/homepage'
                          variant='secondary'>
                          Kontrolafgift
                        </CustomNavLink>
                        <CustomNavLink
                          onClick={() => setIsNavOpen(false)}
                          to='/privat/findparkering'
                          variant='secondary'>
                          Find parkering
                        </CustomNavLink>
                        <CustomNavLink
                          to='/privat/checkud'
                          variant='secondary'
                          onClick={() => setIsNavOpen(false)}>
                          Check ud
                        </CustomNavLink>
                        <CustomNavLink
                          to='/privat/FAQ'
                          variant='secondary'
                          onClick={() => setIsNavOpen(false)}>
                          FAQ
                        </CustomNavLink>
                      </div>
                    )}
                    <hr className='' />
                    <Button size='md' variant='tertiary'>
                      Log ind
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobilmenuknappen med toggle-effekt */}
            <div
              className='text-marine-800'
              onClick={() => setIsNavOpen((prev) => !prev)}>
              <FiMenu size={45} />
            </div>
          </section>

          {/* Desktopmenu til laptop */}
          <div className='hidden items-center space-x-3 md:flex md:align-center'>
            <Button size='sm' variant='tertiary'>
              Log ind
            </Button>
            <CustomNavLink to='/blog' variant='primary'>
              Blog
            </CustomNavLink>
            <CustomNavLink to='/omos' variant='primary'>
              Om os
            </CustomNavLink>
            {isChecked ? (
              <CustomNavLink to='/erhverv/kontakt' variant='primary'>
                Kontakt
              </CustomNavLink>
            ) : (
              <CustomNavLink to='/privat/kontakt' variant='primary'>
                Kontakt
              </CustomNavLink>
            )}

            <ToggleButton isChecked={isChecked} handleToggle={handleToggle} />
          </div>
        </nav>
      </div>
      <div className='hidden space-x-6 md:flex md:justify-end md:pt-3'>
        {isChecked ? (
          <div className='flex space-x-10'>
            <CustomNavLink to='/erhverv/produkter' variant='secondary'>
              Produkter & services
            </CustomNavLink>
            <CustomNavLink to='/erhverv/segmenter' variant='secondary'>
              Segmenter
            </CustomNavLink>
          </div>
        ) : (
          <div className='flex space-x-10'>
            <CustomNavLink to='/privat/homepage' variant='secondary'>
              Kontrolafgift
            </CustomNavLink>
            <CustomNavLink to='/privat/findparkering' variant='secondary'>
              Find parkering
            </CustomNavLink>
            <CustomNavLink to='/privat/checkud' variant='secondary'>
              Check ud
            </CustomNavLink>
            <CustomNavLink to='/privat/FAQ' variant='secondary'>
              FAQ
            </CustomNavLink>
          </div>
        )}
      </div>
    </section>
  );
}
