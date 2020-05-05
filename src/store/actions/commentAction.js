export const createComment = (comment) =>{
    return(dispatch, getState,{ getFirestore }) =>{
        // make async call to database
        const authorId = getState().firebase.auth.uid;
        const firestore= getFirestore();
        firestore
        .collection("comments")
        .add({
          ...comment,
          authorId: authorId,
          createdAt: new Date(),
        }).then(() => {
            dispatch({ type: "CREATE_COMMENT", comment });
          })
          .catch((err) => {
            dispatch({ type: "CREATE_COMMENT_ERROR" }, err);
          });
    }
}