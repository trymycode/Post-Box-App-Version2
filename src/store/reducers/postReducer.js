const initialState = {
  
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return state;
    case "CREATE_POST_ERROR":
      return state;

    case "POST_LIKE_SUCCESS":
      console.log("POST_LIKE_SUCCESS")
      return {
        ...state,

      };

    case "POST_LIKE_UNSUCCESS":
      console.log("POST_LIKE_UNSUCCESS")
      return state;

    default:
      return state;
  }
};

export default postReducer;
