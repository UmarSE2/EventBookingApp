// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOO4JwAL8H-69jlaq62XX6Wfs56asEMBk",
    authDomain: "eventbookingapp-5fb4d.firebaseapp.com",
    projectId: "eventbookingapp-5fb4d",
    storageBucket: "eventbookingapp-5fb4d.appspot.com",
    messagingSenderId: "333454554180",
    appId: "1:333454554180:web:0c94b2363f5a67648eb811",
    measurementId: "G-BELFXE9XJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);