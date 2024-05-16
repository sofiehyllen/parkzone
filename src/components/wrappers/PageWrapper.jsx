import PropTypes from "prop-types";
import Breadcrumb from "../atoms/Breadcrumbs";
import { motion } from "framer-motion";

const PageWrapper = ({ children, breadcrumb }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen w-full flex-col"
    >
      {breadcrumb && <Breadcrumb />}
      <div>{children}</div>
    </motion.div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node,
  breadcrumb: PropTypes.bool,
};

export default PageWrapper;
