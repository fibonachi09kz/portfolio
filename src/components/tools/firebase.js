import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);