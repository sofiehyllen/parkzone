import PropTypes from 'prop-types';

function TabsContent({ content }) {
  return (
    <div>
      <h3 className='font-h1 pb-7'>{content.title}</h3>
      <p className='font-body-l w-3/4'>{content.subtitle}</p>
    </div>
  );
}

TabsContent.propTypes = {
  content: PropTypes.any,
};

export default TabsContent;
