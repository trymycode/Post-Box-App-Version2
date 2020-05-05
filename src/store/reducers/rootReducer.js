import authReducer from "./authReducer";
import commentReducer from "./commentReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    authReducer: authReducer,
    postReducer: postReducer,
    commentReducer: commentReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});
export default rootReducer;
