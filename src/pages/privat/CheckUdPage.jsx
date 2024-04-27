import PageWrapper from '../../components/wrappers/PageWrapper';
import kameraparkering from '../../assets/kameraparkering.jpg';
import InputField from '../../components/atoms/InputField';
import Dropdown from '../../components/atoms/Dropdown';
import { useState } from 'react';
import Button from '../../components/atoms/Button';

export default function CheckUdPage() {
  const [, setSelectedDropdownOption] = useState(null);
  const handleDropdownSelect = (option) => {
    setSelectedDropdownOption(option);
  };
  return (
    <PageWrapper breadcrumb={true}>
      <div className='px-5 sm:px-16 md:px-20 lg:px-32'>
        <div className='relative max-w-screen-lg mx-auto'>
          <div className='rounded-3xl absolute -z-10 top-0 right-0 overflow-hidden sm:ml-20'>
            <img src={kameraparkering} alt='Kameraparkering' />
          </div>
          <div className='px-5 pt-40 sm:pt-10'>
            <form className='bg-gray-100 w-fill p-5 md:p-7 lg:p-10 rounded-2xl max-w-sm md:max-w-md mx-auto sm:mx-0'>
              <div className='space-y-3'>
                <h4 className='font-h4 text-orange-600'>Check ud</h4>
                <h2 className='font-h2'>Glemt at checke ud?</h2>
              </div>
              <div className='space-y-6 pt-10 border-b-1 border-gray-300 pb-6 mb-6'>
                <p className='font-body-md'>
                  Skulle du glemme at betale inden udkørsel, kan du i op til 48
                  timer efter endt parkering checke ud af parkeringen her -
                  selvfølgelig helt uden ekstra gebyrer.
                </p>
              </div>
              <div className='border-b-1 border-gray-300 pb-3'>
                <Dropdown
                  label='Parkeringsområde'
                  placeholder='Vælg parkeringsområde'
                  className='bg-gray-200 text-gray-500'
                  dropdownOptions={[
                    'Fields',
                    'Bruuns Galleri',
                    'Rødovre Port',
                    'Asylgade',
                    'Scandic - Sydhavnen',
                    'IKEA - København',
                    'Torvebyen',
                    'Amager Strandvej',
                    'Trøjborg Centret',
                  ]}
                  onSelect={handleDropdownSelect}
                />
                <InputField
                  type='text'
                  id='licensePlate'
                  className='bg-gray-200 text-gray-400'
                  label='Søg efter nummerplade'
                  placeholder='F.eks. AB 12 345'
                />
              </div>
              <p className='font-body-s pt-6 pb-3'>
                Kan din nummerplade ikke findes i systemet?
              </p>
              <p className='font-body-xs pb-6'>
                Dette kan der være flere grunde til. Måske er din parkering
                betalt via en betalingsapp, måske er dit køretøj registreret på
                abonnement, eller måske blev din nummerplade ikke registreret
                ved indkørsel.
              </p>
              <p className='font-body-xs pb-6'>
                Er du i tvivl, så tøv ikke med at kontakte os. Vores
                kundeservice sidder klar til at hjælpe dig.
              </p>
              <Button size='md' variant='secondary' to='/privat/kontakt'>
                Kontakt
              </Button>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
