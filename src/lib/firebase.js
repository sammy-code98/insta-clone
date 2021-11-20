import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import seed file
// import {seedDatabase} from '../seed'

const config = {
    apiKey: "AIzaSyA-HP71mBTl9uxu3cMjm1m3Vt4nI9yjx3k",
    authDomain: "insta-clone-706ca.firebaseapp.com",
    projectId: "insta-clone-706ca",
    storageBucket: "insta-clone-706ca.appspot.com",
    messagingSenderId: "288139497243",
    appId: "1:288139497243:web:e58fd3939df37197a8cdbe"
};

// initalize firebase

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;

// call seed file once here
// seedDatabase(firebase)

console.log('firebase :', firebase);

export { firebase, FieldValue}
