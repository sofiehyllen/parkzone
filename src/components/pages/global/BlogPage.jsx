import ArticleCard from "../../ui/cards/ArticleCard";
import LatestArticle from "../../ui/sections/LatestArticle";
import Doodle1 from "../../svg/Doodle1";
import Doodle2 from "../../svg/Doodle2";
import PageWrapper from "../../wrappers/PageWrapper";
import PropTypes from "prop-types";
import useFetch from "../../hooksAndFunctions/useFetch";

// Blog siden
const BlogPage = () => {
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
      <h1 className="font-h4 flex h-screen w-2/3 font-normal pt-20 mx-auto text-error-500 text-center">
        Indholdet på denne side blev implementeret med WordPress. Da mit tidligere domæne ikke længere er aktivt, er siden desværre ikke tilgængelig online – men du kan stadig se koden for at få et indblik i, hvordan løsningen blev opbygget.      
        </h1>
    );

  // Gemmer det hentede data som variablen articles
  let articles = data;

  return (
    <PageWrapper
      breadcrumb={true}
      title="Seneste nyt om ParkZone A/S - Blog"
      metaDescription="Her på siden kan du læse de seneste nyheder og artikler om ParkZone, og få indsigt i os som virksomheden og de produkter vi tilbyder."
    >
      <div className="flex flex-col items-center">
        <div className=" mx-auto w-fit">
          <h1 className="font-h1 relative z-40 px-5 pb-10 text-center">
            Seneste nyt om ParkZone A/S
          </h1>
        </div>
        <h3 className="font-body-l px-5 pb-8 text-center sm:pb-16 md:w-4/5 lg:w-1/2 2xl:w-1/3">
          Her på siden kan du læse de seneste nyheder og artikler om ParkZone,
          og få indsigt i os som virksomheden og de produkter vi tilbyder.{" "}
        </h3>
        {/* Kun den seneste artikel hentes ved LatestArticle komponenten */}
        <LatestArticle articles={articles ? articles[0] : ""} />
        <div className="flex w-full max-w-7xl flex-col items-center px-10 pb-10 sm:mt-72 sm:flex-row sm:justify-between sm:py-5 md:mt-60 md:py-10 2xl:mt-52">
          <h3 className="font-h2 hidden pb-5 text-center sm:flex sm:pb-0 sm:text-left">
            Artikler
          </h3>
        </div>
        <div className="relative w-full overflow-hidden bg-marine-50">
          <div className="relative z-40 hidden w-full p-10 pb-28 sm:block md:py-14 xl:px-0">
            {/* Alle artikler udover den første seneste, da den seneste kan ses i LatesArticle komponenten*/}
            <ArticleCard articles={articles ? articles.slice(1) : ""} />
          </div>
          <div className="relative z-40 w-full p-10 pb-28 sm:hidden md:py-14 xl:px-0">
            {/* Alle artikler hentes på mobilen da LatestArticle komponenten ikke vises her */}
            <ArticleCard articles={articles ? articles : ""} />
          </div>
          <div className="absolute -bottom-40 -right-20 rotate-30 scale-150 2xl:-bottom-20 2xl:-right-0">
            <Doodle1 color="#DBE9FD" />
          </div>
          <div className="absolute -left-40 top-0 -rotate-120 scale-150 2xl:-left-20 2xl:top-5">
            <Doodle2 color="#DBE9FD" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

BlogPage.propTypes = {
  articles: PropTypes.any,
};

export default BlogPage;
