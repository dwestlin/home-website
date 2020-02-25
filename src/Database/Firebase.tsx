import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: process.env.REACT_APP_FIRESTORE_authDomain,
  databaseURL: process.env.REACT_APP_FIRESTORE_databaseURL,
  projectId: process.env.REACT_APP_FIRESTORE_projectId,
  storageBucket: process.env.REACT_APP_FIRESTORE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIRESTORE_messagingSenderId,
  appId: process.env.REACT_APP_FIRESTORE_appId,
  measurementId: process.env.REACT_APP_FIRESTORE_measurementId
});

export default app;
