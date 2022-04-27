import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { DEFAULT_PROFILE_IMAGE } from "../../constants/paths";

export default function Photos({ photos }) {
  console.log("photos", photos);
  return (
    <div className="h-16 border-t border-gray-primary mt-12 pt-4">
      <div className="grid grid-cols-3 gap-8 mt-4 mb-12">
        {!photos ? (
          <>
            <Skeleton count={12} width={320} height={400} />
          </>
        ) : photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.docId} className="relative group">
              <img
                src={photo.imageSrc}
                alt={photo.caption}
                onError={(e) => {
                  e.target.src = DEFAULT_PROFILE_IMAGE;
                }}
              />
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
};
