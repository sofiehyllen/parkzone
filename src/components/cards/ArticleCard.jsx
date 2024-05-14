import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Category from '../atoms/Category';

const ArticleCard = ({ articles }) => {
  return (
    <div className='w-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto xl:gap-8 '>
      {articles.map((article) => (
        <Link key={article.id} to={`/blog/${article.id}`} className='w-fit '>
          <div className='bg-white rounded-xl overflow-hidden max-w-xs shadow-lg'>
            <div>
              <img
                className='object-cover h-40 w-100 object-center'
                src={article.acf.coverImg}
              />
            </div>
            <div className='p-5'>
              <div className='border-b-1 border-gray-200 space-y-4 pb-4'>
                <h4 className='font-h4 leading-5'>{article.acf.smallTitle}</h4>
                <p className='font-body-s pt-1 line-clamp-3'>
                  {article.acf.subtitle}
                </p>
              </div>
              <div className='flex justify-between items-center pt-4'>
                <Category
                  color={
                    article.acf.categoryText === 'Nyheder'
                      ? 'red'
                      : article.acf.categoryText === 'Finans'
                      ? 'green'
                      : 'orange'
                  }>
                  {article.acf.categoryText}
                </Category>

                <div className='space-y-2 '>
                  <p className='font-h6 text-gray-400'>{article.acf.date}</p>
                  <p className='font-h6 text-gray-400 text-right'>
                    {article.acf.year}
                  </p>
                </div>
              </div>
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
