// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

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
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };
export default db;
