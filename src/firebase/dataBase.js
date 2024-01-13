// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ5WgxAxXJoO72ziSUdpau1Na-lbbgAVQ",
  authDomain: "geekstore-72f83.firebaseapp.com",
  projectId: "geekstore-72f83",
  storageBucket: "geekstore-72f83.appspot.com",
  messagingSenderId: "957781810546",
  appId: "1:957781810546:web:c930eca7fe05e046eb51eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)