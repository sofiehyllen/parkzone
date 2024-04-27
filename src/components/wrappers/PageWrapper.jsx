import PropTypes from 'prop-types';
import Breadcrumb from '../atoms/Breadcrumbs';

const PageWrapper = ({ children, breadcrumb }) => {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      {breadcrumb && <Breadcrumb />}
      <div>{children}</div>
    </div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node,
  breadcrumb: PropTypes.bool,
};

export default PageWrapper;
