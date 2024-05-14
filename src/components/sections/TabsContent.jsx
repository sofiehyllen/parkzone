import PropTypes from 'prop-types';
import IconBox from '../atoms/IconBox';
import { TbChecks } from 'react-icons/tb';
import { IoSparkles } from 'react-icons/io5';
import { FaRegThumbsUp } from 'react-icons/fa6';
import Doodle3 from '../svg/Doodle3';
import ImageWrapper from '../wrappers/ImageWrapper';

function TabsContent({ content }) {
  return (
    <div className='w-full bg-marine-50 relative '>
      <div className='px-10 py-14 md:px-20 md:py-20 xl:px-40 max-w-screen-3xl mx-auto'>
        <div className='relative w-fit'>
          <h3 className='font-h1 pb-10 z-40 relative w-fit'>{content.title}</h3>
          <div className='absolute top-0 w-10/12 -left-5 sm:w-auto sm:-left-8 sm:-top-1 md:w-3/5'>
            <Doodle3 color='#DBE9FD' />
          </div>
        </div>
        <p className='font-body-l'>{content.subtitle}</p>

        <div className='flex flex-col space-y-10 px-10 py-20 sm:px-16 md:flex-row md:space-y-0 md:space-x-5 md:px-0 md:py-24 lg:py-16 lg:space-x-8 lg:px-16 xl:py-24 2xl:px-24 3xl:px-40'>
          <IconBox
            icon={<TbChecks className='h-10 w-auto text-marine-500' />}
            text={content.boxText1}
          />
          <IconBox
            icon={<IoSparkles className='h-10 w-auto text-marine-500' />}
            text={content.boxText2}
          />
          <IconBox
            icon={<FaRegThumbsUp className='h-10 w-auto text-marine-500' />}
            text={content.boxText3}
          />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 2xl:gap-x-16'>
          <div className='space-y-12'>
            <div>
              <h3 className='font-h3 pb-8'>{content.heading1}</h3>
              <p className='font-body-l'>{content.subheading1}</p>
            </div>
            <ImageWrapper
              className='relative'
              image={content.image}
              alt={content.altText}
              size='md'
              color='#7AA9EF'
            />

            <div>
              <h5 className='font-h4 pb-5'>{content.smallTitle1}</h5>
              <p className='font-body-l'>{content.bodyText1}</p>
            </div>
          </div>
          <div className='space-y-12'>
            <div>
              <h5 className='font-h4 pb-5'>{content.smallTitle2}</h5>
              <p className='font-body-l'>{content.bodyText2}</p>
            </div>
            <div className='relative bg-white p-7 py-10 sm:mx-16 md:p-10 rounded-xl lg:mx-0'>
              <div className='relative w-fit mx-auto'>
                <h3 className='font-h3 pb-10 z-40 px-10 sm:px-16 text-center relative'>
                  {content.heading2}
                </h3>
                <div className='absolute -top-2 sm:w-11/12 sm:left-2'>
                  <Doodle3 color='#DBE9FD' />
                </div>
              </div>
              <p className='font-body-l text-justify hyphens-auto'>
                {content.subheading2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TabsContent.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    boxText1: PropTypes.string.isRequired,
    boxText2: PropTypes.string.isRequired,
    boxText3: PropTypes.string.isRequired,
    heading1: PropTypes.string.isRequired,
    subheading1: PropTypes.string.isRequired,
    smallTitle1: PropTypes.string.isRequired,
    bodyText1: PropTypes.string.isRequired,
    smallTitle2: PropTypes.string.isRequired,
    bodyText2: PropTypes.string.isRequired,
    heading2: PropTypes.string.isRequired,
    subheading2: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
  }).isRequired,
};

export default TabsContent;
