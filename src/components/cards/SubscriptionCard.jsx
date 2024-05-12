import PropTypes from 'prop-types';
import Category from '../atoms/Category';
import clsx from 'clsx';
import Button from '../buttons/Button';
import { FaCheck } from 'react-icons/fa6';

function SubscriptionCard({ content }) {
  return (
    <div
      className={clsx(
        'w-full h-fit flex flex-col px-7 py-8 rounded-xl',
        content.category === 'premium' ? 'bg-marine-100' : 'bg-white'
      )}>
      <div className='flex justify-end'>
        <Category color={content.categoryColor}>{content.category}</Category>
      </div>
      <div className='pt-4 pb-7 space-y-1.5'>
        <p className='font-h4'>{content.vehicle}</p>
        <p className='font-body-s'>{content.type}</p>
      </div>
      <div className='pb-7 border-b-1 border-gray-300'>
        <p
          className={clsx(
            'font-h6',
            content.category === 'premium' ? 'text-marine-400' : 'text-gray-400'
          )}>
          fra
        </p>
        <div className='flex items-end space-x-2.5'>
          <p className='font-h3'>{content.price} kr.</p>
          <p
            className={clsx(
              'font-h4',
              content.category === 'premium'
                ? 'text-marine-400'
                : 'text-gray-400'
            )}>
            / md
          </p>
        </div>
      </div>
      <div className='py-7 space-y-3'>
        <div className='flex space-x-2'>
          <div className='size-3.5 flex place-items-center flex-shrink-0 rounded-full bg-marine-800 '>
            <FaCheck className='text-white h-2' />
          </div>
          <p className='font-body-xs'>Fri parkering alle ugens dage</p>
        </div>
        <div className='flex space-x-2'>
          <div className='size-3.5 flex place-items-center flex-shrink-0 rounded-full bg-marine-800 '>
            <FaCheck className='text-white h-2' />
          </div>
          <p className='font-body-xs'>Fri parkering hele døgnet</p>
        </div>
        {content.category === 'premium' ? (
          <div className='space-y-3'>
            <div className='flex space-x-2'>
              <div className='size-3.5 flex place-items-center flex-shrink-0 rounded-full bg-marine-800 '>
                <FaCheck className='text-white h-2' />
              </div>
              <p className='font-body-xs'>Privat parkeringsplads</p>
            </div>
            <div className='flex space-x-2'>
              <div className='size-3.5 flex place-items-center flex-shrink-0 rounded-full bg-marine-800 '>
                <FaCheck className='text-white h-2' />
              </div>
              <p className='font-body-xs'>
                Personlig skilt med din nummerplade
              </p>
            </div>
          </div>
        ) : null}
      </div>
      <div className='w-full flex justify-center'>
        <Button
          variant='primary'
          size={content.buttonSize}
          icon={true}
          onClick={content.buttonClick}>
          Vælg
        </Button>
      </div>
    </div>
  );
}

SubscriptionCard.propTypes = {
  content: PropTypes.object.isRequired,
};

export default SubscriptionCard;
