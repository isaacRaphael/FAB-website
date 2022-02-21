// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://cdnjs.cloudflare.com/ajax/libs/firebase/9.6.7/firebase-analytics-compat.min.js";
// // import { getAuth } from 'firebase/auth';
// // import { getDatabase } from "firebase/database";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js'
import {getDatabase, ref, child, get, update, remove} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js';

    // // If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
    // import { analytics } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-analytics.js'

    // // Add Firebase products that you want to use
    // import { auth } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js'
    // import { firestore } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMYOsrsT84co9DwOFS1W1GI-uDG9AY4pE",
  authDomain: "fabwebsite-1.firebaseapp.com",
  projectId: "fabwebsite-1",
  storageBucket: "fabwebsite-1.appspot.com",
  messagingSenderId: "961261522499",
  appId: "1:961261522499:web:e85035e54d93b58d5ccef6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export {app}
//For Books page 


