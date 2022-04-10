import { firebase, FieldValue } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const result = await firebase

    .firestore()
    .collection("users")

    // conditionally check if username exists
    .where("username", "==", username)
    .get();
  // console.log(result);
  return result.docs.map((user) => user.data().length > 0);
}
// get user from firestore where userId ===  userId(passed from auth)
export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")

    .where("userId", "==", userId)
    .get();
  const user = result.docs.map((item) => ({ ...item.data(), docId: item.id }));
  return user;
}

// get suggested profiile but with a limit of 10
export async function getSuggestedProfiles(userId, following) {
  const result = await firebase.firestore().collection("users").limit(10).get();

  // console.log(result);
  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter(
      (profile) =>
        profile.userId !== userId && !following.includes(profile.userId)
    );
}

// export async function getSuggestedProfiles(userId, following) {
//   let query = firebase.firestore().collection("users");
//   if (following.length > 0) {
//     query = query.where("userId", "not-in", [...following, userId]);
//   } else {
//     query = query.where("userId", "!=", userId);
//   }
//   const result = await query.limit(10).get();
//   const profiles = result.docs.map((user) => ({
//     ...user.data(),
//     docId: user.id,
//   }));
//   return profiles;
// }

// updateLoggedInUserFollowing,
// updateFollowedUserFollowers,

export async function updateLoggedInUserFollowing(
  loggedInUserDocId,
  profileId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
}

export async function updateFollowedUserFollowers(
  profileDocId,
  userId,
  isFollowingProfile
) {
  return firebase
    .firestore()
    .collection("users")
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(userId)
        : FieldValue.arrayUnion(userId),
    });
}
