import PropTypes from 'prop-types';
import Category from '../atoms/Category';
import ImageWrapper from '../wrappers/ImageWrapper';
import Button from '../buttons/Button';

const LatestArticle = ({ articles }) => {
  //if (!articles || !Array.isArray(articles) || articles.length === 0)
  //return <p>No articles found</p>;

  //const newestArticle = articles[0];
  return (
    <>
      {articles && (
        <div className='hidden px-5 md:px-10 lg:px-20 sm:flex flex-col w-full'>
          <div className='w-fit relative mx-auto'>
            <ImageWrapper
              className='self-center'
              image={articles.acf.coverImg}
              size='lg'></ImageWrapper>
            <div className='bg-white px-7 pt-7 pb-2 md:px-10 md:pt-8 md:pb-5 rounded-lg absolute mx-10 lg:mx-20 top-40 lg:top-52 xl:top-60 drop-shadow-md xl:w-1/2'>
              <h4 className='font-h4 text-pumpkin-500 pb-2'>Seneste nyt</h4>
              <h1 className='font-h3 lg:font-h2 pb-7'>
                {articles.acf.smallTitle}
              </h1>
              <p className='font-body-md lg:font-body-l pt-1  line-clamp-3'>
                {articles.acf.subtitle}
              </p>
              <div className='border-t-1 border-gray-200 pt-4 pb-4 mt-4 flex items-start justify-between'>
                <Button size='lg' variant='primary' to={`/blog/${articles.id}`}>
                  Læs mere
                </Button>
                <div className='flex flex-col items-end'>
                  <div className='relative'>
                    <Category
                      ping={true}
                      color={
                        articles.acf.categoryText === 'Nyheder'
                          ? 'red'
                          : articles.acf.categoryText === 'Finans'
                          ? 'green'
                          : 'orange'
                      }>
                      {articles.acf.categoryText}
                    </Category>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

LatestArticle.propTypes = {
  articles: PropTypes.any,
};

export default LatestArticle;
