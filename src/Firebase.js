import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwfye5BbxxAurlmB17t_7xlhkGpIi3N44",
  authDomain: "boggleapp-79e98.firebaseapp.com",
  projectId: "boggleapp-79e98",
  storageBucket: "boggleapp-79e98.appspot.com",
  messagingSenderId: "729333628003",
  appId: "1:729333628003:web:04b64d72c9432dfb7f8c56",
  measurementId: "G-LGCNMZ3XK9"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(); // firebase authentication object
export const firestore = firebase.firestore(); // firestore db
export default firebase;