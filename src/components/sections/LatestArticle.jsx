import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Category from '../atoms/Category';
import ImageWrapper from '../wrappers/ImageWrapper';

const LatestArticle = ({ articles }) => {
  if (!articles || !articles.data || articles.data.length === 0) {
    return null;
  }

  const newestArticle = articles.data[articles.data.length - 1];

  return (
    <>
      <div className='px-20 flex flex-col w-full relative'>
        <ImageWrapper className='self-center'>
          <img
            src={`http://localhost:1337${newestArticle.attributes.coverImg.data[0].attributes.url}`}
          />
        </ImageWrapper>
        <div className='bg-white p-14 w-7/12 rounded-lg absolute top-80 left-52'>
          <div className='flex justify-between items-end pb-2'>
            <h4 className='font-h4 text-pumpkin-500'>Seneste nyt</h4>
            <p className='font-body-s text-gray-500'>
              {newestArticle.attributes.date} {newestArticle.attributes.year}
            </p>
          </div>
          <h1 className='font-h2 pb-6'>
            {newestArticle.attributes.smallTitle}
          </h1>
          <p className='font-body-l pt-1 pb-8 line-clamp-2.5'>
            {newestArticle.attributes.subtitle}
          </p>
          <div className='border-t-1 border-gray-200 pt-8'>
            <Category
              color={
                newestArticle.attributes.categoryText === 'Nyheder'
                  ? 'red'
                  : newestArticle.attributes.categoryText === 'Finans'
                  ? 'green'
                  : 'orange'
              }>
              {newestArticle.attributes.categoryText}
            </Category>
          </div>
        </div>
      </div>

      <Link
        key={newestArticle.id}
        to={`/blog/${newestArticle.id}`}
        className='max-w-screen-lg my-20'>
        <div className='bg-white rounded-3xl overflow-hidden flex inner-border-1 border-gray-50'>
          <img
            className='object-cover h-80 w-6/12 object-center'
            src={`http://localhost:1337${newestArticle.attributes.coverImg.data[0].attributes.url}`}
          />
          <div className='w-6/12 flex flex-col justify-center px-10'>
            <div className='border-b-1 border-gray-300 space-y-4 pb-4'>
              <h2 className='font-h2'>{newestArticle.attributes.smallTitle}</h2>
              <p className='font-body-md pt-1 line-clamp-2.5'>
                {newestArticle.attributes.subtitle}
              </p>
            </div>
            <div className='flex justify-between items-center pt-4'>
              <Category
                color={
                  newestArticle.attributes.categoryText === 'Nyheder'
                    ? 'red'
                    : newestArticle.attributes.categoryText === 'Finans'
                    ? 'green'
                    : 'orange'
                }>
                {newestArticle.attributes.categoryText}
              </Category>
              <div className='space-y-2 '>
                <p className='font-h5 text-gray-500'>
                  {newestArticle.attributes.date}
                </p>
                <p className='font-h6 text-gray-500 text-right'>
                  {newestArticle.attributes.year}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

LatestArticle.propTypes = {
  articles: PropTypes.any,
};

export default LatestArticle;
