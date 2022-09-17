// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLT2gb_TRqyXtxO9DKSOJPVIW42HJZOA8",
  authDomain: "proyecto-reactjs-e25d5.firebaseapp.com",
  projectId: "proyecto-reactjs-e25d5",
  storageBucket: "proyecto-reactjs-e25d5.appspot.com",
  messagingSenderId: "483120662971",
  appId: "1:483120662971:web:5d5a418252deff7b4c1c9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)