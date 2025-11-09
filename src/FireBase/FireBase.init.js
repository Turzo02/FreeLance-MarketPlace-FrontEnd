// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzKLdAAi11IjlbjSlwnFgbTpuq1yeCafE",
  authDomain: "freelance-marketplace-92754.firebaseapp.com",
  projectId: "freelance-marketplace-92754",
  storageBucket: "freelance-marketplace-92754.firebasestorage.app",
  messagingSenderId: "986199703759",
  appId: "1:986199703759:web:adaaa777d9fe6f918c37ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
