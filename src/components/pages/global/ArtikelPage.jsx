import { useParams } from "react-router-dom";
import PageWrapper from "../../wrappers/PageWrapper";
import PropTypes from "prop-types";
import Category from "../../ui/atoms/Category";
import ImageWrapper from "../../wrappers/ImageWrapper";
import IconCard from "../../ui/cards/IconCard";
import { LuUserCircle2 } from "react-icons/lu";
import facebook from "/facebook.svg";
import instagram from "/instagram.svg";
import linkedin from "/linkedin.svg";
import { domToReact } from "html-react-parser";
import HTMLReactParser from "html-react-parser/lib/index";
import useFetch from "../../hooksAndFunctions/useFetch";

// Artikel siden
const ArticlePage = () => {
  const { id } = useParams(); // Henter id parametre fra url

  // Fetch af artiklernes indhold fra WordPress
  const apiUrl = import.meta.env.VITE_API_URL;
  let { loading, error, data } = useFetch(apiUrl,);
  if (loading)
    // Side mens der indlæses
    return (
      <h1 className="font-h3 flex h-screen w-full justify-center pt-20 text-gray-300">
        Indlæser
      </h1>
    );
  if (error)
    //Error besked hvis data ikke kan hentes
    return (
      <h1 className="font-h3 flex h-screen w-full justify-center pt-20 text-error-500">
        Kunne ikke hente data
      </h1>
    );

  // Gemmer det hentede data som variablen articles
  let articles = data;

  // Finder den artikel som matcher id'et
  let article = {};
  let arr = articles.filter((article) => article.id == id);
  article = arr[0];

  // Definerer options for HTMLReactParser
  const options = {
    replace({ attribs, children }) {
      if (!attribs) {
        return;
      }
      // Erstatter elementer med class="wp-block-heading" med et stylet h2 element
      if (attribs.class === "wp-block-heading") {
        return (
          <h2 className="font-h3 pb-7 pt-10">
            {domToReact(children, options)}
          </h2>
        );
      }
    },
  };

  return (
    <PageWrapper
      breadcrumb={true}
      title={"Artikel - ParkZone Danmark"}
      metaDescription={
        "Læs de seneste nyheder og artikler om ParkZone, og få indsigt i os som virksomheden og de produkter vi tilbyder."
      }
    >
      <div className="mx-auto flex max-w-screen-3xl flex-col items-center px-5 pb-10 md:px-10 lg:pb-16 3xl:px-20">
        <div className="flex max-w-4xl flex-col items-center pb-10 md:pb-16">
          <Category
            className="mb-5"
            color={
              article.acf.categoryText === "Nyheder"
                ? "red"
                : article.acf.categoryText === "Finans"
                  ? "green"
                  : "orange"
            }
          >
            {article.acf.categoryText}
          </Category>
          <h1 className="font-h2 pb-6 text-center">{article.acf.title}</h1>
          <h6 className="font-h6 text-center text-gray-400">
            {article.acf.date}
            <span className="px-2.5 text-gray-300">&#9679;</span>
            {article.acf.year}
          </h6>
        </div>
        <ImageWrapper
          className="mb-10 md:mb-20"
          image={article.acf.coverImg}
          size="lg"
        />
        <div className=" flex h-fit flex-col md:px-10 lg:flex-row lg:space-x-10 lg:px-0 2xl:space-x-14 2xl:px-10">
          <div className="order-last mx-auto  min-w-96 px-5 py-10 pt-16 sm:max-w-xl lg:order-first lg:px-0 lg:py-0 xl:w-4/12 2xl:w-8/12 ">
            <h4 className="font-h4 pb-5">Kontakt</h4>
            <div className="mb-10 border-b-1 border-gray-200 pb-3">
              <IconCard
                icon={
                  <LuUserCircle2
                    strokeWidth={1.5}
                    className="h-7 w-auto text-marine-400"
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
                  strokeWidth={1.5}
                  className="h-7 w-auto text-marine-400"
                />
              }
              title="Adm. Direktør ParkZone"
              subtitle="Ronen Leon"
              email="rl@parkzone.dk"
              phone="+45 60 33 45 44"
            />
            <div className="pt-10">
              <h4 className="font-h3 md:font-h4 pb-8">Del artikel</h4>
              <div className="flex space-x-10 pl-2">
                <a href="https://www.facebook.com/" className="">
                  <img
                    src={facebook}
                    className="scale-150 transition duration-300 hover:scale-170"
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <img
                    src={instagram}
                    className="scale-150 transition duration-300 hover:scale-170"
                  />
                </a>
                <a href="https://www.linkedin.com/">
                  <img
                    src={linkedin}
                    className="scale-150 transition duration-300 hover:scale-170"
                  />
                </a>
              </div>
            </div>
          </div>
          <div id="wp-api-content" className="lg:pt-8 xl:w-8/12 2xl:w-full ">
            {" "}
            {/* Rendering af brødteksten */}
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
