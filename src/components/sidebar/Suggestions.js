import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import {getSuggestedProfiles} from "../../services/firebase"

export default function Suggestions({ userId }) {
  const [profiles, setProfiles] = useState(null);

  //   get suggested profiles
  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId);
      setProfiles(response);
    }
    console.log("userId:", userId);
    suggestedProfiles()
  }, [userId]);

  //   check for profiles and return skeleton if there are no profiles
  return !profiles ? (
    <Skeleton count={1} height={150} className="mt-5" />
  ) : profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center align-items justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
    </div>
  ) : null;
}
Suggestions.propTypes = {
  userId: PropTypes.string,
};
