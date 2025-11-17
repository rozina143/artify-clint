// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD34bGFyVvinA-6dIDkLaPQrWl9gO9_1I4",
  authDomain: "artify-management.firebaseapp.com",
  projectId: "artify-management",
  storageBucket: "artify-management.firebasestorage.app",
  messagingSenderId: "451475263004",
  appId: "1:451475263004:web:d80ad35e009d6db5c459d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();