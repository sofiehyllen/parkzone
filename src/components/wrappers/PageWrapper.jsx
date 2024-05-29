import PropTypes from "prop-types";
import Breadcrumb from "../ui/atoms/Breadcrumbs";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

// Komponent som omslutter alle sider med styling og animation
const PageWrapper = ({ children, breadcrumb, title, metaDescription }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen w-full flex-col"
    >
      {breadcrumb && <Breadcrumb />}
      <Helmet>
        {/* Title og meta description som tilføjes for hver enkelt side */}
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <div>{children}</div>
    </motion.div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node,
  breadcrumb: PropTypes.bool,
  title: PropTypes.string.isRequired,
  metaDescription: PropTypes.string.isRequired,
};

export default PageWrapper;
