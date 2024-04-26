import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import Button from '../atoms/Button';
import ToggleButton from '../atoms/ToggleButton';
import clsx from 'clsx';

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
        {isChecked ? (
          <NavLink to='/erhverv'>
            <img className='' alt='ParkZone logo' />
          </NavLink>
        ) : (
          <NavLink to='/privat'>
            <img className='' alt='ParkZone logo' />
          </NavLink>
        )}

        {/* Navigationsektion indeholdende ikoner, mobilmenu og desktopmenu */}
        <nav className='flex items-center space-x-4'>
          {/* Mobilmenu */}
          <section className='flex md:hidden'>
            {/* Mobilmenuknappen med toggle-effekt */}
            <div
              className='text-marine-800'
              onClick={() => setIsNavOpen((prev) => !prev)}>
              <FiMenu size={45} />
            </div>

            {/* Indhold af mobilmenu baseret på isNavOpen-tilstanden */}
            <div className={isNavOpen ? 'block' : 'hidden'}>
              <div className='flex flex-col justify-center absolute w-full h-screen top-0 left-0  bg-white z-50'>
                {/* Lukkeikon til mobilmenu */}
                <div
                  className='absolute top-4 right-4 text-marine-800'
                  onClick={() => setIsNavOpen(false)}>
                  <IoClose size={45} />
                </div>

                {/* Links i mobilmenu og 'toggle-effekt' ved klik */}
                <div onClick={() => setIsNavOpen(false)}>
                  <div className='flex flex-col items-center mx-auto space-y-10 w-fit font-h3'>
                    <NavLink to='/'>Hjem</NavLink>
                    <NavLink to='/'>Side 1</NavLink>
                    <NavLink to='/'>Side 2</NavLink>
                    <NavLink to='/'>Side 3</NavLink>
                    <NavLink to='/'>Side 4</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Desktopmenu til laptop */}
          <div className='hidden items-center space-x-6 md:flex md:align-center'>
            <Button size='sm' variant='tertiary' className='font-h6'>
              Log ind
            </Button>
            <NavLink
              to='/blog'
              className={({ isActive }) =>
                clsx(
                  'font-mundial text-base capsize px-2.5 pb-2 pt-1 rounded-sm text-gray-900',
                  { 'bg-sky-50': isActive }
                )
              }>
              Blog
            </NavLink>
            <NavLink
              to='/omos'
              className={({ isActive }) =>
                clsx(
                  'font-mundial text-base capsize px-2.5 pb-2 pt-1 rounded-sm text-gray-900',
                  { 'bg-sky-50': isActive }
                )
              }>
              Om os
            </NavLink>
            {isChecked ? (
              <NavLink
                to='/erhverv/kontakt'
                className={({ isActive }) =>
                  clsx(
                    'font-mundial text-base capsize px-2.5 pb-2 pt-1 rounded-sm text-gray-900',
                    { 'bg-sky-50': isActive }
                  )
                }>
                Kontakt
              </NavLink>
            ) : (
              <NavLink
                to='/privat/kontakt'
                className={({ isActive }) =>
                  clsx(
                    'font-mundial text-base capsize px-2.5 pb-2 pt-1 rounded-sm text-gray-900',
                    { 'bg-sky-50': isActive }
                  )
                }>
                Kontakt
              </NavLink>
            )}
            <ToggleButton isChecked={isChecked} handleToggle={handleToggle} />
          </div>
        </nav>
      </div>
      <div className='hidden space-x-6 md:flex md:justify-end md:pt-3'>
        {isChecked ? (
          <div className='flex space-x-10'>
            <NavLink
              className='font-mundial capsize text-sm text-gray-700 hover:text-gray-900'
              to='/erhverv/produkter'>
              Produkter & services
            </NavLink>
            <NavLink
              className='font-mundial capsize text-sm text-gray-700 hover:text-gray-900'
              to='/erhverv/segmenter'>
              Segmenter
            </NavLink>
          </div>
        ) : (
          <div className='flex space-x-10'>
            <NavLink
              className='font-mundial capsize text-sm text-gray-700 hover:text-gray-900'
              to='/privat/kontrolafgift'>
              Kontrolafgift
            </NavLink>
            <NavLink
              className='font-mundial capsize text-sm text-gray-700 hover:text-gray-900'
              to='/privat/findparkering'>
              Find parkering
            </NavLink>
            <NavLink
              className='font-mundial capsize text-sm text-gray-700 hover:text-gray-900'
              to='/privat/checkud'>
              Check ud
            </NavLink>
            <NavLink
              className='font-mundial capsize text-sm text-gray-700 hover:text-gray-900'
              to='/privat/FAQ'>
              FAQ
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
}
