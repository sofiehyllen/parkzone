import { useParams } from 'react-router-dom';
import PageWrapper from '../../components/wrappers/PageWrapper';
import PropTypes from 'prop-types';
import Category from '../../components/atoms/Category';
import ImageWrapper from '../../components/wrappers/ImageWrapper';
//import quoteTop from '../../assets/quote-top.svg';
//import quoteBottom from '../../assets/quote-bottom.svg';
import IconCard from '../../components/cards/IconCard';
import { LuUserCircle2 } from 'react-icons/lu';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import { domToReact } from 'html-react-parser';
import HTMLReactParser from 'html-react-parser/lib/index';
import useFetch from '../../hooks/useFetch';

const ArticlePage = () => {
  const { id } = useParams();

  let { loading, error, data } = useFetch(
    'https://wp.sofiehyllen.dk/wp-json/wp/v2/articles?_embed&per_page=7'
  );
  if (loading) return <div className='h-screen'></div>;
  if (error)
    return (
      <h1 className='h-screen font-h1 pl-5 mx-auto pt-40'>
        Kunne ikke hente data
      </h1>
    );

  let articles = data;

  let article = {};
  let arr = articles.filter((article) => article.id == id);
  article = arr[0];

  const options = {
    replace({ attribs, children }) {
      if (!attribs) {
        return;
      }
      if (attribs.class === 'wp-block-heading') {
        return (
          <h2 className='font-h3 pb-7 pt-10'>
            {domToReact(children, options)}
          </h2>
        );
      }
    },
  };

  return (
    <PageWrapper breadcrumb={true}>
      <div className='max-w-screen-2xl mx-auto flex flex-col items-center px-5 md:px-10 pb-10 lg:pb-16'>
        <div className='flex flex-col items-center pb-10 md:pb-16 max-w-4xl'>
          <Category
            className='mb-5'
            color={
              article.acf.categoryText === 'Nyheder'
                ? 'red'
                : article.acf.categoryText === 'Finans'
                ? 'green'
                : 'orange'
            }>
            {article.acf.categoryText}
          </Category>
          <h1 className='font-h2 text-center pb-6'>{article.acf.title}</h1>
          <h6 className='font-h6 text-gray-400 text-center'>
            {article.acf.date}
            <span className='text-gray-300 px-2.5'>&#9679;</span>
            {article.acf.year}
          </h6>
        </div>
        <ImageWrapper
          className='mb-10 md:mb-20'
          image={article.acf.coverImg}
          size='lg'
        />
        <div className='flex flex-col h-full relative px-5 md:px-10 lg:space-x-10 lg:px-0 lg:flex-row xl:px-10 2xl:px-20'>
          <div className='shrink-0 space-y-14 pb-10 order-last min-w-96 lg:order-first'>
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
                  title={article.acf.personJob}
                  subtitle={article.acf.personName}
                  email={article.acf.personEmail}
                  phone={article.acf.personNumber}
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
              <div className='pt-10'>
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
          </div>
          <div id='wp-api-content' className='px-5 sm:px-0'>
            {HTMLReactParser(article.content.rendered, options)}
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
