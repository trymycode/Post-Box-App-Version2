const initialState = {};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_COMMENT":
      console.log("created comment reducer", action.comment);
      return state;
      
    case "CREATE_COMMENT_ERROR":
      console.log("created comment error", action.err);
      return state;

    default:
      return state;
  }
};

export default commentReducer;
