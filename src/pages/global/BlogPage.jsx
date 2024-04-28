import FilterButton from '../../components/atoms/FilterButton';
import ArticleCard from '../../components/sections/ArticleCard';
import LatestArticle from '../../components/sections/LatestArticle';
import PageWrapper from '../../components/wrappers/PageWrapper';
import PropTypes from 'prop-types';

const BlogPage = ({ articles }) => {
  return (
    <PageWrapper breadcrumb={true}>
      <div className='flex flex-col items-center'>
        {/*<h1 className='font-h1 pb-7'>Seneste nyt om ParkZone</h1>
        <h3 className='font-body-l text-center w-1/2 pb-16'>
          Her kan du læse de seneste nyheder og artikler om ParkZone, og få
          indsigt og få indsigt i os som virksomheden og de produkter vi
          tilbyder.{' '}
  </h3>*/}

        <LatestArticle articles={articles ? articles : ''} />
        <div className='flex w-full justify-between px-20 py-10'>
          <h3 className='font-h2'>Seneste nyt</h3>
          <FilterButton />
        </div>
        <div className='py-14 pb-28 bg-gray-100 w-full'>
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
