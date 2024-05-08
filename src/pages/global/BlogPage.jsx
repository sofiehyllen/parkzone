import ArticleCard from '../../components/sections/ArticleCard';
import LatestArticle from '../../components/sections/LatestArticle';
import Doodle1 from '../../components/svg/Doodle1';
import Doodle2 from '../../components/svg/Doodle2';
import Doodle3 from '../../components/svg/Doodle3';
import PageWrapper from '../../components/wrappers/PageWrapper';
import PropTypes from 'prop-types';

const BlogPage = ({ articles }) => {
  return (
    <PageWrapper breadcrumb={true}>
      <div className='flex flex-col items-center'>
        <div className='w-fit mx-auto relative'>
          <h1 className='font-h1 pb-10 text-center px-5 relative z-50'>
            Seneste nyt om ParkZone A/S
          </h1>
          <div className='absolute top-10 right-8 w-80 sm:-top-1 sm:-right-1 md:right-2'>
            <Doodle3 color='#DBE9FD' />
          </div>
        </div>
        <h3 className='font-body-l text-center px-5 md:w-4/5 lg:w-1/2 2xl:w-1/3 pb-8 sm:pb-16'>
          Her på siden kan du læse de seneste nyheder og artikler om ParkZone,
          og få indsigt i os som virksomheden og de produkter vi tilbyder.{' '}
        </h3>

        <LatestArticle articles={articles ? articles : ''} />
        <div className='flex flex-col items-center sm:flex-row w-full sm:justify-between pb-10 sm:py-5 px-10 md:py-10 sm:mt-72 md:mt-60 2xl:mt-52 max-w-7xl'>
          <h3 className='hidden text-center sm:text-left sm:flex font-h2 pb-5 sm:pb-0'>
            Artikler
          </h3>
        </div>
        <div className='relative overflow-hidden bg-gray-100 w-full'>
          <div className='p-10 md:py-14 pb-28 w-full xl:px-0 relative z-50'>
            <ArticleCard articles={articles ? articles : ''} />
          </div>
          <div className='absolute -bottom-40 scale-150 -right-20 rotate-30 2xl:-bottom-20 2xl:-right-0'>
            <Doodle1 color='#E2E8F0' />
          </div>
          <div className='absolute top-0 scale-150 -left-40 -rotate-120 2xl:-left-20 2xl:top-5'>
            <Doodle2 color='#E2E8F0' />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

BlogPage.propTypes = {
  articles: PropTypes.any,
};

export default BlogPage;
