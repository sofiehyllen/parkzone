import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ArticleCard = ({ articles }) => {
  return (
    <div>
      {articles.data.map((article) => (
        <Link key={article.id} to={`/blog/${article.id}`}>
          <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
            <img
              className='h-56 w-full object-cover'
              src={`http://localhost:1337${article.attributes.coverImg.data[0].attributes.url}`}
            />
            <div className='p-8'>
              <h3 className='font-bold text-2xl my-1'>
                {article.attributes.title}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

ArticleCard.propTypes = {
  articles: PropTypes.any,
};

export default ArticleCard;
