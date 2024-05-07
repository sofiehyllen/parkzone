import PropTypes from 'prop-types';
import Category from '../atoms/Category';

export default function HeroCenter({
  category,
  title,
  subtitle,
  rubric,
  image,
  alt,
}) {
  return (
    <div className='flex flex-col items-center w-fit mx-auto px-5 sm:px-10 md:px-20 lg:px-36'>
      {category && (
        <Category color='orange' className='mb-4'>
          {category}
        </Category>
      )}
      <h1 className='font-h1'>{title}</h1>
      {rubric && (
        <p className='font-body-l pt-6 text-center max-w-screen-md sm:w-4/5 md:w-2/3'>
          {rubric}
        </p>
      )}
      {subtitle && <h6 className='font-h6 text-gray-400 pt-6'>{subtitle}</h6>}
      <div className='overflow-hidden mt-6 md:mt-12'>
        <img src={image} alt={alt} className='rounded-xl md:rounded-2xl' />
      </div>
    </div>
  );
}

HeroCenter.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  rubric: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
};
