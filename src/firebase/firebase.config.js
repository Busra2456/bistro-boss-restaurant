// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey :import.meta.env.VITE_apiKey,
   authDomain :import.meta.env.VITE_authDomain,
   projectId :import.meta.env.VITE_projectId,
   storageBucket :import.meta.env.VITE_storageBucket,
   messagingSenderId :import.meta.env.VITE_messagingSenderId,
   appId :import.meta.env.VITE_appId
   
//   apiKey: "AIzaSyByqAwM3fe528SUUbfJJ8--bdWWIsDf8EQ",
//   authDomain: "bistro-boss-10a45.firebaseapp.com",
//   projectId: "bistro-boss-10a45",
//   storageBucket: "bistro-boss-10a45.firebasestorage.app",
//   messagingSenderId: "370336579253",
//   appId: "1:370336579253:web:45cc5de314a46259a888fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);