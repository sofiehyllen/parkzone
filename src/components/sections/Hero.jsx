import PropTypes from 'prop-types';
import Category from '../atoms/Category';

function Hero({ color, category, title, body, children }) {
  return (
    <div className='pt-10 sm:pt-16 md:flex md:items-center lg:pt-0'>
      <div className='w-full px-5 pb-10 flex flex-col items-center md:items-start md:px-0 md:py-0 md:pl-10 lg:pl-20 '>
        <Category color={color}>{category}</Category>
        <div className='md:pb-'>
          <h1 className='font-h2 text-center pb-8 pt-2 md:text-left lg:pb-12'>
            {title}
          </h1>
          <p className='font-body-md text-center hyphens-auto sm:px-20 md:text-left md:px-0 lg:font-body-l mb-auto pb-10'>
            {body}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}

Hero.propTypes = {
  color: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  children: PropTypes.node,
};

export default Hero;
