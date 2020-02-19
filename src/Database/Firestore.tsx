import firebase from "firebase";
import "firebase/app";

//Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: process.env.REACT_APP_FIRESTORE_authDomain,
  databaseURL: process.env.REACT_APP_FIRESTORE_databaseURL,
  projectId: process.env.REACT_APP_FIRESTORE_projectId,
  storageBucket:  process.env.REACT_APP_FIRESTORE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIRESTORE_messagingSenderId,
  appId: process.env.REACT_APP_FIRESTORE_appId,
  measurementId: process.env.REACT_APP_FIRESTORE_measurementId
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBo-1siFWyeZW4NeFFQpRIU5R6fQlt5BHA",
//   authDomain: "home-website-5bc5f.firebaseapp.com",
//   databaseURL: "https://home-website-5bc5f.firebaseio.com",
//   projectId: "home-website-5bc5f",
//   storageBucket: "home-website-5bc5f.appspot.com",
//   messagingSenderId: "153385994674",
//   appId: "1:153385994674:web:ce19c2a09382feb2e8fcab",
//   measurementId: "G-K9Q7PSW79T"
// };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
