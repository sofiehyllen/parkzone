import ImageWrapper from '../../components/wrappers/ImageWrapper';
import PageWrapper from '../../components/wrappers/PageWrapper';
import driver from '../../assets/girl-driving.jpg';
import Button from '../../components/buttons/Button';
import Doodle2 from '../../components/svg/Doodle2';
import Doodle1 from '../../components/svg/Doodle1';
import ArticleCard from '../../components/cards/ArticleCard';
import PropTypes from 'prop-types';
import Accordion from '../../components/atoms/Accordion';
import { FAQ1 } from '../../staticData';
import Doodle8 from '../../components/svg/Doodle8';
import googlePlay from '../../assets/google-play.png';
import Category from '../../components/atoms/Category';
import mobile from '../../assets/mobile.jpg';
import useFetch from '../../hooks/useFetch';

export default function HomePagePrivat() {
  let { loading, error, data } = useFetch(
    'https://wp.sofiehyllen.dk/wp-json/wp/v2/articles?_embed&per_page=3'
  );
  if (loading) return <h1 className='font-h1 pl-5'>Indlæser...</h1>;
  if (error) return <h1 className='font-h1 pl-5'>Kunne ikke hente data</h1>;

  return (
    <PageWrapper breadcrumb={false}>
      <div className='pt-5 pb-24  md:flex md:items-center xl:pt-10 xl:pb-40 '>
        <div className='w-full px-5 flex flex-col items-center md:items-start md:px-0 md:min-w-96 md:max-w-96 md:ml-20 lg:ml-32 xl:max-w-screen-sm xl:w-10/12 xl:pb-20 2xl:w-8/12 2xl:pb-32 3xl:w-6/12 3xl:ml-48'>
          <h1 className='font-h1 text-center pb-8 md:text-left md:font-h2 lg:font-h1 lg:pb-12'>
            Spar tid og besvær med ParkZone Go
          </h1>
          <p className='font-body-md text-center sm:px-20 md:text-left md:px-0 lg:font-body-l mb-auto pb-10'>
            Med vores app, ParkZone Go, kan du nemt parkere og administrere dine
            p-tilladelser på vores parkeringsområder, så du kan fokusere på det,
            der virkelig betyder noget.
          </p>

          <div className='flex space-x-5 pb-10 sm:pb-16 md:pb-0'>
            <a href='https://apps.apple.com/us/app/parkzone-go-med-parkcare/id1429508099?itsct=apps_box_badge&amp;itscg=30200'>
              <img
                src='https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/da-dk?size=250x83&amp;releaseDate=1544140800'
                alt='Download on the App Store'
                style={{ width: '106px', height: '35px' }}
              />
            </a>

            <a href='https://play.google.com/store/apps/details?id=dk.parkzone.parkcare&hl=da&gl=US'>
              <img
                src={googlePlay}
                alt='Download in the Google Play Store'
                style={{ width: '118px', height: '35px' }}
              />
            </a>
          </div>
        </div>
        <ImageWrapper
          image={mobile}
          alt='ParkZone Go app'
          className='pl-20 sm:pl-32 md:pl-5 xl:pl-10 2xl:pl-28 '
        />
      </div>
      <div className='flex flex-col pb-16 relative md:flex-row md:justify-center md:pb-24 xl:pb-40'>
        <ImageWrapper
          image={driver}
          size='lg'
          color='#7CC9ED'
          alt='Kvinde kørende i bil'
          className='relative mr-5 self-end w-full sm:mr-10 md:rounded-l-none md:place-self-center md:h-96 md:mr-0 xl:h-full'
        />
        <div className='flex flex-col items-center justify-center relative z-10 w-full px-5 py-10 sm:px-10 md:py-0 md:items-start lg:pr-14 xl:w-10/12 xl:px-16'>
          <Category color='skyBlue'>Parkering</Category>
          <h2 className='font-h1 pb-8 pt-1 text-center md:text-left md:font-h2 2xl:pb-12 2xl:pr-10'>
            Book din næste parkering hos os
          </h2>
          <p className='font-body-md pb-10 text-center md:text-justify md:hyphens-auto xl:pr-14 2xl:pr-20'>
            Book din parkering i forvejen så du undgår at bruge tid på billetkøb
            og parkeringsregler når du er fremme. Med billetten registreret på
            din nummerplade, skal du ikke bekymre dig om mere når først
            parkeringen er booket.
          </p>
          <Button
            variant='primary'
            size='lg'
            icon={true}
            className='mx-auto md:mx-0'
            to='/privat/findparkering'>
            Find parkering
          </Button>
        </div>
      </div>

      <div className='w-full px-8 py-16 bg-sky-100 relative overflow-hidden md:px-20 '>
        <h2 className='font-h1 pb-10 text-center relative z-10'>
          Har du modtaget parkeringsafgift?
        </h2>
        <p className='font-body-md text-center hyphens-auto relative z-10 max-w-screen-lg mx-auto md:font-body-l'>
          Vi ved det kan være frustrerende at modtage en afgift. Husk at du er
          altid velkommen til at kontakte os hvis du har spørgsmål eller mangler
          afklaring angående dette. På vores kontakt side har vi en
          kontaktformular specielt til dig som henvender dig med en afgift.
          Udfyld den og så vender vi tilbage til dig hurtigst muligt. På vores
          FAQ side kan du også få svar på nogle af de mest hyppige spørgsmål.
        </p>
        <div className='flex justify-center space-x-5 pt-10 relative z-10 xl:pt-16'>
          <Button size='lg' variant='primary' to='/privat/kontakt'>
            Kontakt os
          </Button>
          <Button size='lg' variant='tertiary' icon={true} to='/privat/FAQ'>
            Se FAQ
          </Button>
        </div>
        <Doodle2
          className='absolute top-10 left-0 -rotate-45 scale-150 sm:left-10 lg:scale-190 xl:left-32 2xl:scale-225 3xl:left-80'
          color='#EDF6FD'
        />
        <Doodle1
          className='hidden absolute top-0 -right-40 -rotate-45 scale-150 md:block lg:scale-190 xl:right-20 2xl:scale-225 3xl:right-72'
          color='#EDF6FD'
        />
      </div>
      <div className='w-full py-20 px-5 sm:px-10 xl:px-0 xl:pt-40'>
        <h3 className='font-h1 pb-10 text-center'>Seneste nyt om ParkZone</h3>
        <ArticleCard articles={data} />
        <Button
          variant='tertiary'
          size='lg'
          to='/blog'
          icon={true}
          className='mt-10 mx-auto'>
          Se alle artikler
        </Button>
      </div>
      <div className='px-5 pt-5 pb-20 relative overflow-hidden sm:px-10 sm:pb-28 md:px-20 lg:flex xl:pt-28 3xl:px-40 3xl:pb-24 3xl:pl-52 max-w-screen-4xl mx-auto'>
        <div className='relative z-10 lg:w-10/12 lg:pr-10'>
          <h4 className='font-h2 text-center pb-5 lg:text-left lg:pb-10'>
            Frequently Asked Questions
          </h4>
          <p className='font-body-l text-center pb-10 lg:text-left'>
            Få svar på nogle af vores ofte stillede spørgsmål. Kan du ikke finde
            svar på netop dit spørgsmål, er du altid velkommen til at kontakte
            os.
          </p>
          <Button
            size='lg'
            variant='primary'
            icon={true}
            className='hidden mx-auto relative z-10 lg:inline-flex'>
            Læs alle FAQ
          </Button>
        </div>
        <div className='pb-5 relative z-10 w-full'>
          {FAQ1.slice(1, 5).map((FAQ1, index) => (
            <div key={index} className='w-full flex justify-center'>
              <Accordion
                title={FAQ1.title}
                body={FAQ1.body}
                color='bg-sky-50'
              />
            </div>
          ))}
        </div>
        <Button
          size='lg'
          variant='primary'
          icon={true}
          className='mx-auto relative z-10 lg:hidden'>
          Læs alle FAQ
        </Button>
        <div className='absolute bottom-14 left-0 scale-150 sm:left-10 sm:bottom-20 lg:left-52 2xl:bottom-14 2xl:scale-160 2xl:left-68 3xl:scale-200 3xl:left-96 3xl:bottom-20 4xl:scale-250 4xl:right-96 4xl:left-auto 4xl:bottom-16'>
          <Doodle8 color={'#ABDAF4'} />
        </div>
      </div>
    </PageWrapper>
  );
}

HomePagePrivat.propTypes = {
  articles: PropTypes.any,
};
