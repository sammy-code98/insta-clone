import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function SuggestedProfile({
  userDocId,
  username,
  profileId,
  userId,
}) {
  const [followed, setFollowed] = useState(false);
  async function  handleFollowUser(){
    setFollowed(true);
  }
  
  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          className="rounded-full w-3 mr-3 flex "
          src={`/images/avatars/${username}.jpg`}
          alt="suggestedProfiles"
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>?
        </Link>
      </div>
        <button
          className="text-xs  font-bold text-blue-medium"
          type="button"
          onClick={handleFollowUser}
        >
          Follow
        </button>
    </div>
  ) : null;
}

SuggestedProfile.propTypes = {
  userDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};
