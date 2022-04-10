import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from "../../services/firebase";
export default function SuggestedProfile({
  profileDocId,
  username,
  profileId,
  userId,
  loggedInUserDocId,
}) {
  const [followed, setFollowed] = useState(false);
  async function handleFollowUser() {
    setFollowed(true);
    // update  the following  array of loggedin user
    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
    // update te followesrs array of  the user who has been followed
    await updateFollowedUserFollowers(profileDocId, userId,false);
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
  profileDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired,
};
