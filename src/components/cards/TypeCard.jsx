import PropTypes from 'prop-types';
import hashtag from '../../assets/hashtag.svg';
import Button from '../buttons/Button';

function TypeCard({ number, title, body, onClick }) {
  return (
    <div className='relative overflow-hidden rounded-xl w-full shadow-md max-w-96'>
      <img className='absolute top-0 left-0' src={hashtag} alt='' />
      <div className='bg-white pt-2 sm:pt-0 px-8 pb-9 md:py-9 flex flex-col items-center w-full h-full'>
        <p className='font-mundial text-7xl font-semibold text-marine-300 w-full relative z-20'>
          {number}
        </p>
        <div className='space-y-4 pt-6 sm:pt-4 md:pt-12 mb-auto relative z-20'>
          <p className='font-h4'>{title}</p>
          <p className='font-body-s text-justify md:font-body-md'>{body}</p>
        </div>
        <Button
          variant='primary'
          size='lg'
          icon={true}
          onClick={onClick}
          className='mt-10 md:mt-14'>
          Vælg
        </Button>
      </div>
    </div>
  );
}

TypeCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TypeCard;
