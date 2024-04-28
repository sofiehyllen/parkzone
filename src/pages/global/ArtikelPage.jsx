import { Link, useParams } from 'react-router-dom';
import PageWrapper from '../../components/wrappers/PageWrapper';
import PropTypes from 'prop-types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Category from '../../components/atoms/Category';
import ImageWrapper from '../../components/wrappers/ImageWrapper';
import quoteTop from '../../assets/quote-top.svg';
import quoteBottom from '../../assets/quote-bottom.svg';
import IconCard from '../../components/atoms/IconCard';
import { LuUserCircle2 } from 'react-icons/lu';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';

const ArticlePage = ({ articles }) => {
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
      <div className='max-w-screen-2xl mx-auto flex flex-col items-center px-5 md:px-10'>
        <div className='pb-10 md:pb-16 max-w-4xl'>
          <Category
            className='mx-auto mb-5'
            color={
              article.attributes.categoryText === 'Nyheder'
                ? 'red'
                : article.attributes.categoryText === 'Finans'
                ? 'green'
                : 'orange'
            }>
            {article.attributes.categoryText}
          </Category>
          <h1 className='font-h2 text-center pb-6'>
            {article.attributes.title}
          </h1>
          <h6 className='font-h6 text-gray-400 text-center'>
            {article.attributes.date}
            <span className='text-gray-300 px-2.5'>&#9679;</span>
            {article.attributes.year}
          </h6>
        </div>
        <ImageWrapper className='mb-10 md:mb-20'>
          <img
            src={`http://localhost:1337${article.attributes.coverImg.data[0].attributes.url}`}
            alt=''
          />
        </ImageWrapper>
        <div className='flex flex-col px-5 md:px-10 lg:space-x-16 lg:flex-row'>
          <div className='shrink-0 space-y-14 h-full sticky top-20 pb-10 order-last min-w-96 lg:order-first'>
            <div className='max-w-96 mx-auto'>
              <h4 className='font-h4 pb-5'>Kontakt</h4>
              <div className='border-b-1 border-gray-200 mb-7'>
                <IconCard
                  icon={
                    <LuUserCircle2
                      strokeWidth={2}
                      className='text-marine-400 h-7 w-auto'
                    />
                  }
                  title={article.attributes.personJob}
                  subtitle={article.attributes.personName}
                  email={article.attributes.personEmail}
                  phone={article.attributes.personNumber}
                />
              </div>
              <IconCard
                icon={
                  <LuUserCircle2
                    strokeWidth={2}
                    className='text-marine-400 h-7 w-auto'
                  />
                }
                title='Adm. Direktør ParkZone A/S'
                subtitle='Ronen Leon'
                email='rl@parkzone.dk'
                phone='+45 60 33 45 44'
              />
            </div>
            <div>
              <h4 className='font-h4 pb-5'>Del artikel</h4>
              <div className='flex space-x-4'>
                <a href='https://www.facebook.com/'>
                  <img src={facebook} />
                </a>
                <a href='https://www.instagram.com/'>
                  <img src={instagram} />
                </a>
                <a href='https://www.linkedin.com/'>
                  <img src={linkedin} />
                </a>
              </div>
            </div>
          </div>
          <div className='w-full pb-10 md:pb-16 lg:pb-0'>
            <BlocksRenderer
              content={article.attributes.content}
              blocks={{
                // You can use the default components to set class names...
                paragraph: ({ children }) => (
                  <p className='font-body-l pb-10 hyphens-auto'>{children}</p>
                ),
                heading: ({ children, level }) => {
                  switch (level) {
                    case 1:
                      return <h1 className='font-h1'>{children}</h1>;
                    case 2:
                      return <h2 className='font-h2'>{children}</h2>;
                    case 3:
                      return <h3 className='font-h3 pb-7'>{children}</h3>;
                    case 4:
                      return <h4 className='font-h4'>{children}</h4>;
                    case 5:
                      return <h5 className='font-h5'>{children}</h5>;
                    case 6:
                      return <h6 className='font-h6'>{children}</h6>;
                    default:
                      return <h1 className='font-h1'>{children}</h1>;
                  }
                },
                link: ({ children, url }) => <Link to={url}>{children}</Link>,
                quote: ({ children }) => (
                  <div className='py-5'>
                    <div className='relative max-w-fit'>
                      <img
                        className='absolute -z-10 top-0 md:left-16'
                        src={quoteTop}
                        alt='Quotation mark'
                      />
                      <p className='font-h5 text-center mx-auto md:w-9/12 py-10 whitespace-pre-line'>
                        {children}
                      </p>
                      <img
                        className='absolute -z-10 bottom-0 right-0 md:right-16'
                        src={quoteBottom}
                        alt='Quotation mark'
                      />
                    </div>
                  </div>
                ),
              }}
              modifiers={{
                bold: ({ children }) => <strong>{children}</strong>,
                italic: ({ children }) => (
                  <span className='italic'>{children}</span>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

ArticlePage.propTypes = {
  articles: PropTypes.any,
};

export default ArticlePage;
