import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// replace this with your own firebase config details
var config = {
  apiKey: "AIzaSyBHPMKGmGSY3JgblM_okuOwUERq2wcoOns",
  authDomain: "social-media-app-postbox-v2.firebaseapp.com",
  databaseURL: "https://social-media-app-postbox-v2.firebaseio.com",
  projectId: "social-media-app-postbox-v2",
  storageBucket: "social-media-app-postbox-v2.appspot.com",
  messagingSenderId: "485068416454",
  appId: "1:485068416454:web:b1bdf25289fbf0d7dcfec7",
  measurementId: "G-TSBRT8Q3Z3",
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
