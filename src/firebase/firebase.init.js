// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMmJmtoG3hueI5ZyoeAdfHAdUoSXdnwWM",
    authDomain: "toys-land-client.firebaseapp.com",
    projectId: "toys-land-client",
    storageBucket: "toys-land-client.appspot.com",
    messagingSenderId: "183876712314",
    appId: "1:183876712314:web:41e3eefbe2bd1c10e308c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;