import firebase from "firebase";
import "firebase/app";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBo-1siFWyeZW4NeFFQpRIU5R6fQlt5BHA",
  authDomain: "home-website-5bc5f.firebaseapp.com",
  databaseURL: "https://home-website-5bc5f.firebaseio.com",
  projectId: "home-website-5bc5f",
  storageBucket: "home-website-5bc5f.appspot.com",
  messagingSenderId: "153385994674",
  appId: "1:153385994674:web:a6a6cfa8fa620e11e8fcab",
  measurementId: "G-9B4KZ65FGP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
