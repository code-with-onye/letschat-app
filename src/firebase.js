import firebase from "firebase";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAzqS9o6zCPSlrsuXdpSH4BggYXHypa1I4",
    authDomain: "letschat-4974f.firebaseapp.com",
    projectId: "letschat-4974f",
    storageBucket: "letschat-4974f.appspot.com",
    messagingSenderId: "192440182160",
    appId: "1:192440182160:web:130f501b77e684c5c43f15",
    measurementId: "G-38GP71PYC2",
  })
  .auth();
