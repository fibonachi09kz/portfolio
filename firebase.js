// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDadPOG_6Hk48u3yOANksAp4yMXTbigQs",
    authDomain: "portfolio-fa4db.firebaseapp.com",
    projectId: "portfolio-fa4db",
    storageBucket: "portfolio-fa4db.appspot.com",
    messagingSenderId: "358594568839",
    appId: "1:358594568839:web:a1c4a3262eaa128ac74e22",
    measurementId: "G-8YVZ8JC68E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);