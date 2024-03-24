// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "./firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYXSh91zJiYjigtYgy36eEUlLDhGQGunE",
  authDomain: "rwega-netflix-clone.firebaseapp.com",
  projectId: "rwega-netflix-clone",
  storageBucket: "rwega-netflix-clone.appspot.com",
  messagingSenderId: "739847858436",
  appId: "1:739847858436:web:359f39a782001afe8a0851",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
