import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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
export const auth = getAuth();