import PropTypes from "prop-types";
import Category from "../atoms/Category";
import ImageWrapper from "../wrappers/ImageWrapper";
import Button from "../buttons/Button";

// Komponenten for seneste artikel på blogsiden
const LatestArticle = ({ articles }) => {
  return (
    <>
      {articles && (
        <div className="hidden w-full flex-col px-5 sm:flex md:px-10  3xl:px-40">
          <div className="relative mx-auto w-fit">
            <ImageWrapper
              className="self-center"
              image={articles.acf.coverImg}
              size="lg"
            ></ImageWrapper>
            <div className="absolute top-40 mx-10 rounded-lg bg-white px-7 pb-2 pt-7 drop-shadow-md md:px-10 md:pb-5 md:pt-8 lg:top-52 lg:mx-20 lg:w-2/3 xl:top-64 xl:w-1/2 3xl:top-80 4xl:top-96">
              <Category
                ping={true}
                color={
                  articles.acf.categoryText === "Nyheder"
                    ? "red"
                    : articles.acf.categoryText === "Finans"
                      ? "green"
                      : "orange"
                }
              >
                {articles.acf.categoryText}
              </Category>
              <h1 className="font-h3 lg:font-h2 pb-7 pt-2">
                {articles.acf.smallTitle}
              </h1>
              <p className="font-body-md lg:font-body-l line-clamp-3  pt-1">
                {articles.acf.subtitle}
              </p>
              <div className="mt-4 flex items-start justify-between border-t-1 border-gray-200 pb-4 pt-4">
                <Button size="lg" variant="primary" to={`/blog/${articles.id}`}>
                  Læs mere
                </Button>
                <div className="flex flex-col items-end">
                  <p className="font-h6 text-gray-400">{articles.acf.date}</p>
                  <p className="font-h6 pt-2 text-gray-400">
                    {articles.acf.year}
                  </p>
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
