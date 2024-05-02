import FilterButton from '../../components/atoms/FilterButton';
import ArticleCard from '../../components/sections/ArticleCard';
import LatestArticle from '../../components/sections/LatestArticle';
import PageWrapper from '../../components/wrappers/PageWrapper';
import PropTypes from 'prop-types';

const BlogPage = ({ articles }) => {
  return (
    <PageWrapper breadcrumb={true}>
      <div className='flex flex-col items-center'>
        <h1 className='font-h1 pb-7 text-center px-5'>
          Seneste nyt om ParkZone A/S
        </h1>
        <h3 className='font-body-l text-center px-5 md:w-4/5 lg:w-1/2 2xl:w-1/3 pb-8 sm:pb-16'>
          Her på siden kan du læse de seneste nyheder og artikler om ParkZone,
          og få indsigt i os som virksomheden og de produkter vi tilbyder.{' '}
        </h3>

        <LatestArticle articles={articles ? articles : ''} />
        <div className='flex flex-col items-center sm:flex-row w-full sm:justify-between pb-10 sm:py-5 px-10 md:py-10 sm:mt-72 md:mt-60 2xl:mt-52 max-w-7xl'>
          <h3 className='hidden text-center sm:text-left sm:flex font-h2 pb-5 sm:pb-0'>
            Artikler
          </h3>
          <FilterButton
            heading1={'Alle'}
            heading2={'Nyheder'}
            heading3={'Finans'}
            heading4={'Projekter'}
          />
        </div>
        <div className='p-10 md::py-14 pb-28 bg-gray-100 w-full xl:px-0'>
          <ArticleCard articles={articles ? articles : ''} />
        </div>
      </div>
    </PageWrapper>
  );
};

BlogPage.propTypes = {
  articles: PropTypes.any,
};

export default BlogPage;
