import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Category from "../atoms/Category";

// Kortet for artiklerne på blog siden
const ArticleCard = ({ articles }) => {
  return (
    <div className="mx-auto grid w-fit grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
      {/* Mapping af alle artikler og oprettelse af Link til hver */}
      {articles.map((article) => (
        <Link
          key={article.id}
          to={`/blog/${article.id}`}
          className="w-fit transition-transform duration-300 hover:scale-105"
        >
          <div className="max-w-xs overflow-hidden rounded-xl bg-white shadow-lg">
            <div>
              <img
                className="w-100 h-40 object-cover object-center"
                src={article.acf.coverImg}
              />
            </div>
            <div className="p-5">
              <div className="space-y-4 border-b-1 border-gray-200 pb-4">
                <h4 className="font-h4 leading-5">{article.acf.smallTitle}</h4>
                <p className="font-body-s line-clamp-3 pt-1">
                  {article.acf.subtitle}
                </p>
              </div>
              <div className="flex items-center justify-between pt-4">
                <Category
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

                <div className="space-y-2 ">
                  <p className="font-h6 text-gray-400">{article.acf.date}</p>
                  <p className="font-h6 text-right text-gray-400">
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
