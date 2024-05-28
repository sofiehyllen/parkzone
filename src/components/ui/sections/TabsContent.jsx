import PropTypes from "prop-types";
import IconBox from "../atoms/IconBox";
import { TbChecks } from "react-icons/tb";
import { IoSparkles } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa6";
import ImageWrapper from "../../wrappers/ImageWrapper";
import Doodle4 from "../../svg/Doodle4.jsx";
import Category from "../atoms/Category.jsx";

// Komponenten for indholdet af hver tab
function TabsContent({ content }) {
  return (
    <div className="w-full overflow-hidden  whitespace-pre-line bg-marine-50 pb-10">
      <div className=" relative z-10 mx-auto max-w-screen-xl py-14 sm:px-10 md:px-20 md:py-20 lg:py-28 xl:px-32 2xl:px-20">
        <img
          src={content.illustration}
          alt="Illustration af"
          className="absolute -right-20 top-32 md:top-10 lg:-right-0 lg:top-2 xl:right-10 xl:top-60 xl:scale-125 2xl:right-0 3xl:top-72 3xl:scale-150"
        />
        <div className="relative z-10 px-5 sm:px-0">
          <div className="flex space-x-3">
            <h3 className="font-h1 pb-10">{content.title}</h3>
            {content.title === "Security" ? ( // Visning af nyheds-kategori for Security
              <div>
                <Category color="darkRed">Nyhed</Category>
              </div>
            ) : (
              ""
            )}
          </div>
          <p className="font-body-l hyphens-auto text-justify">
            {content.subtitle}
          </p>
        </div>

        <div className="relative z-10 flex flex-col items-center space-y-10 px-10 py-20 sm:px-16 md:flex-row md:justify-center md:space-x-5 md:space-y-0 md:px-0 md:py-24  lg:space-x-8 lg:px-16 lg:py-16 xl:py-24 2xl:px-24 3xl:px-40">
          <IconBox
            icon={<TbChecks className="h-10 w-auto text-marine-500" />}
            text={content.boxText1}
          />
          <IconBox
            icon={<IoSparkles className="h-10 w-auto text-marine-500" />}
            text={content.boxText2}
          />
          <IconBox
            icon={<FaRegThumbsUp className="h-10 w-auto text-marine-500" />}
            text={content.boxText3}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2 2xl:gap-x-16">
          <div className="space-y-16 px-5 sm:px-0">
            <div>
              <h3 className="font-h3 pb-8">{content.heading1}</h3>
              <p className="font-body-l  hyphens-auto text-justify">
                {content.subheading1}
              </p>
            </div>
            <ImageWrapper
              className="relative"
              image={content.image}
              alt={content.altText}
              size="md"
              color="#7AA9EF"
            />

            <div>
              <h5 className="font-h4 pb-6 pt-3">{content.smallTitle1}</h5>
              <p className="font-body-l  hyphens-auto text-justify">
                {content.bodyText1}
              </p>
            </div>
          </div>
          <div className="space-y-16">
            <div className="px-5 sm:px-0">
              <h5 className="font-h4 pb-6 pt-3">{content.smallTitle2}</h5>
              <p className="font-body-l hyphens-auto text-justify">
                {content.bodyText2}
              </p>
            </div>
            <div className="relative overflow-hidden bg-white p-10 py-14 sm:mx-16 sm:rounded-2xl lg:mx-0">
              <h3 className="font-h3 relative z-10 pb-10 text-center">
                {content.heading2}
              </h3>
              <p className="font-body-l relative z-10 hyphens-auto text-justify">
                {content.subheading2}
              </p>
              <div className="absolute bottom-0 right-20 scale-200">
                <Doodle4 color="#F2F7FF" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TabsContent.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    boxText1: PropTypes.string.isRequired,
    boxText2: PropTypes.string.isRequired,
    boxText3: PropTypes.string.isRequired,
    heading1: PropTypes.string.isRequired,
    subheading1: PropTypes.string.isRequired,
    smallTitle1: PropTypes.string.isRequired,
    bodyText1: PropTypes.string.isRequired,
    smallTitle2: PropTypes.string.isRequired,
    bodyText2: PropTypes.string.isRequired,
    heading2: PropTypes.string.isRequired,
    subheading2: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    illustration: PropTypes.string.isRequired,
  }).isRequired,
};

export default TabsContent;
