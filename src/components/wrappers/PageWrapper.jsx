import PropTypes from 'prop-types';
import Breadcrumb from '../atoms/Breadcrumbs';

const PageWrapper = ({ children }) => {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <Breadcrumb />
      <div>{children}</div>
    </div>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageWrapper;
