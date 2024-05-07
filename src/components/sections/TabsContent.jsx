import PropTypes from 'prop-types';
import IconBox from '../atoms/IconBox';
import { TbChecks } from 'react-icons/tb';
import { IoSparkles } from 'react-icons/io5';
import { FaRegThumbsUp } from 'react-icons/fa6';
import Doodle3 from '../svg/Doodle3';
import Doodle7 from '../svg/Doodle7';
import ImageWrapper from '../wrappers/ImageWrapper';

function TabsContent({ content }) {
  return (
    <div className='w-full bg-marine-50 relative'>
      <div className='px-10 py-14 md:px-20 md:py-20 xl:px-40'>
        <h3 className='font-h1 pb-10 z-50 relative w-fit'>{content.title}</h3>
        <div className='absolute top-12 left-3 md:top-20 md:left-16 xl:left-36'>
          <Doodle3 color='#DBE9FD' />
        </div>
        <p className='font-body-l'>{content.subtitle}</p>

        <div className='flex flex-col space-y-10 px-10 py-20 sm:px-16 md:flex-row md:space-y-0 md:space-x-5 md:px-0 md:py-24 lg:py-16 lg:space-x-8 lg:px-16 xl:py-24'>
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
              <h3 className='font-h3 pb-5'>{content.heading1}</h3>
              <p className='font-body-l'>{content.subheading1}</p>
            </div>
            <ImageWrapper className='relative'>
              <div className='absolute bottom-0 -left-16 w-96 sm:w-[120%] sm:bottom-4'>
                <Doodle7 color='#7AA9EF' />
              </div>
              <img src={content.image} alt={content.altText} />
            </ImageWrapper>
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
                <h3 className='font-h3 pb-8 z-50 px-10 sm:px-16 text-center relative'>
                  {content.heading2}
                </h3>
                <div className='absolute -top-2 max-w-64 sm:left-7'>
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
  content: PropTypes.any,
};

export default TabsContent;
