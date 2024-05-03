// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXGxniktPod8q0coOrVMMMaCPuMYKD4LA",
  authDomain: "car-doctor-client-80641.firebaseapp.com",
  projectId: "car-doctor-client-80641",
  storageBucket: "car-doctor-client-80641.appspot.com",
  messagingSenderId: "348496261785",
  appId: "1:348496261785:web:8b2b866bafed33f044be08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;