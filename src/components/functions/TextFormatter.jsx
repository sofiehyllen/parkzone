import PropTypes from 'prop-types';
import { domToReact } from 'html-react-parser';

export default function TextFormatter() {
  const options = {
    replace({ attribs, children }) {
      if (!attribs) {
        return;
      }

      if (attribs.tag === '<p/>') {
        return <p className='font-h3'>{domToReact(children, options)}</p>;
      }
      if (attribs.class === 'wp-block-heading') {
        return <h2 className='font-h3'>{domToReact(children, options)}</h2>;
      }
    },
  };
}

TextFormatter.propTypes = {
  html: PropTypes.string,
};
