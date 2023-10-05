// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD802NgZ4C7rmLu10Hi7oaGKo1IjNrlBH4",
  authDomain: "auth-moha-milon-c74ef.firebaseapp.com",
  projectId: "auth-moha-milon-c74ef",
  storageBucket: "auth-moha-milon-c74ef.appspot.com",
  messagingSenderId: "683848065073",
  appId: "1:683848065073:web:4ae3541b48c7a4a2907510"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;