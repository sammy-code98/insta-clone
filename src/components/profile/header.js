import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import useUser from "../../hooks/use-user";
import { isUserFollowingProfile } from "../../services/firebase";
import { DEFAULT_IMAGE_PATH } from '../../constants/paths';

export default function Header({
  photosCount,
  profile: {
    docId: profileDocId,
    userId: profileUserId,
    following = [],
    fullname,
  },
  followerCount,
  setFollowerCount,
  username: profileUsername,
}) {
  const { user } = useUser();
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);
  const activeBtnFollow = user.username && user.username !== profileUsername;

  const handleToggleFollow = () => 1

  useEffect(() => {
    const isLoggedInUserFollowingProfile = async () => {
      const isFollowing = await isUserFollowingProfile(
        user.username,
        profileUserId
      );
      setIsFollowingProfile(isFollowing);
    };
    if (user.username && profileUserId) {
      isLoggedInUserFollowingProfile();
    }
  }, [user.username, profileUserId]);

  return (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
      <div className="container flex justify-center">
        {user.username && (
          <img
            className="rounded-full h-40 w-40 flex"
            alt={`${user.username} profile `}
            src={`/images/avatars/${profileUsername}.jpg`}
            onError={(e) => {
              e.target.src = DEFAULT_IMAGE_PATH;
            }}
          />
        )}
      </div>
      <div className="flex items-center justify-center flex-col col-span-2">
        <div className="container flex item-center">
          <p className="text-2xl mr-4">{profileUsername}</p>
          {activeBtnFollow && (
            <button
              className="bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"
              type="button"
              onClick={handleToggleFollow}
            >
              {isFollowingProfile ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  photosCount: PropTypes.number.isRequired,
  profile: PropTypes.shape({
    docId: PropTypes.string,
    userId: PropTypes.string,
    fullName: PropTypes.string,
    followers: PropTypes.array,
    username: PropTypes.string,
  }).isRequired,
  followerCount: PropTypes.number.isRequired,
  setFollowerCount: PropTypes.func.isRequired,
};
