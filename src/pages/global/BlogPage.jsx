import ArticleCard from '../../components/sections/ArticleCard';
import PageWrapper from '../../components/wrappers/PageWrapper';
import PropTypes from 'prop-types';


const BlogPage = ({ articles }) => {
  return (
    <PageWrapper breadcrumb={true}>
      <div>
        Blogside
        <ArticleCard articles={articles ? articles : ''} />
      </div>
    </PageWrapper>
  );
};

BlogPage.propTypes = {
  articles: PropTypes.any,
};

export default BlogPage;
