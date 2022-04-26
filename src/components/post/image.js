import PropTypes from "prop-types";
import { DEFAULT_POST_IMAGE } from "../../constants/paths";

export default function Image({ src, caption }) {
  return (
    <img
      src={src}
      alt={caption}
      onError={(e) => {
        e.target.src = DEFAULT_POST_IMAGE;
      }}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
