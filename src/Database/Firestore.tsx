import firebase from "firebase";
import "firebase/app";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.FIRESTORE_API_KEY,
  authDomain: process.env.FIRESTORE_authDomain,
  databaseURL: process.env.FIRESTORE_databaseURL,
  projectId: process.env.FIRESTORE_projectId,
  storageBucket:  process.env.FIRESTORE_storageBucket,
  messagingSenderId: process.env.FIRESTORE_messagingSenderId,
  appId: process.env.FIRESTORE_appId,
  measurementId: process.env.FIRESTORE_measurementId
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
