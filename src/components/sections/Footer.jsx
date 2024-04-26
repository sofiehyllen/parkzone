import Newsletter from '../atoms/Newsletter';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='px-5 pt-10 w-full md:px-10'>
      <div className='border-b-1 border-gray-300 flex flex-col items-center pb-10 md:flex-row md:justify-between md:space-x-32 md:items-end'>
        <div className='flex flex-col items-center pb-10 space-y-6 md:items-start md:pb-0'>
          <div className='w-36 h-7 bg-gray-500'>LOGO</div>
          <p className='font-body-xs text-center max-w-screen-sm md:text-left'>
            ParkZone skaber plads. Plads til at de, der skal parkere, har
            mulighed for det. Plads til at grundejere kan fokusere på andet end
            parkeringsadministration.
          </p>
        </div>
        <div className='space-y-4'>
          <h4 className='font-h4 text-center md:text-left'>
            Tilmeld dig vores nyhedsbrev
          </h4>
          <Newsletter />
        </div>
      </div>
      <div className='space-y-10 py-10 md:flex md:justify-between md:space-y-0'>
        <div className='space-y-10 md:flex md:items-baseline md:space-x-28 md:space-y-0'>
          <div className='space-y-6'>
            <h4 className='font-h4 uppercase'>Om os</h4>
            <div className='flex flex-col font-mobile-h4 space-y-4 md:font-laptop-h5'>
              <Link className='font-h5 text-gray-600' to='/blog'>
                Blog
              </Link>
              <Link className='font-h5 text-gray-600' to='/omos'>
                Om ParkZone
              </Link>
              <Link className='font-h5 text-gray-600'>Ledige stillinger</Link>
              <Link className='font-h5 text-gray-600'>Persondatapolitik</Link>
            </div>
          </div>
          <div className='space-y-6'>
            <h4 className='font-h4 uppercase'>Adresse</h4>
            <div className='font-body-md'>
              <p className='text-gray-500'>Valhøjs Allé 174-176</p>
              <p className='text-gray-500'>2610 Rødovre</p>
            </div>
          </div>
        </div>
        <div className='space-y-6'>
          <h4 className='font-h4 uppercase'>Kontakt</h4>
          <div className='font-body-md'>
            <div>
              <p className='text-gray-500'>
                <a href='#'>+45 70 25 26 96</a>
              </p>
              <p className='text-gray-500'>
                <a href='#'>info@parkzone.dk</a>
              </p>
            </div>
            <p className='text-gray-500 pt-7'>CVR 27396682</p>
          </div>
        </div>
      </div>
      <div className='border-t-1 py-4'>
        <p className='font-body-xs text-gray-400 text-center'>
          Copyright &copy; ParkZone A/S &#124; All Rights Reserved |{' '}
          <Button size='sm' variant='link' className='text-gray-500'>
            Terms and Conditions
          </Button>{' '}
          |{' '}
          <Button size='sm' variant='link' className='text-gray-500'>
            Persondatapolitik
          </Button>
        </p>
      </div>
    </div>
  );
}
