import { useParams } from 'react-router-dom';
import PageWrapper from '../../components/wrappers/PageWrapper';
import PropTypes from 'prop-types';

const ArticlePage = ({ articles }) => {
  console.log(articles);
  const { id } = useParams();

  let article = {};
  if (article) {
    let arr = articles.data.filter((article) => article.id == id);
    article = arr[0];
  } else {
    article = {};
  }

  return (
    <PageWrapper breadcrumb={true}>
      <div>
        <h1 className='font-h1 text-center'>{article.attributes.title}</h1>
      </div>
    </PageWrapper>
  );
};

ArticlePage.propTypes = {
  articles: PropTypes.any,
};

export default ArticlePage;
