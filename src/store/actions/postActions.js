export const createPostAction = (post) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database

    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("posts")
      .add({
        ...post,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        likes: 0,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_POST", post });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_POST_ERROR" }, err);
      });
  };
};

export const likePost = ({ likes, postId, likedByIds }) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("posts")
      .doc(postId)
      .update({ likes: likes, likedByIds: likedByIds})
      .then(() => {
        dispatch({ type: "POST_LIKE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "POST_LIKE_UNSUCCESS" }, err);
      });
  };
};
