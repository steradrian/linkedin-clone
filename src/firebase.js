import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDqBX0QlHd1lJi7SwkJ9lRcnuTf0mEZk3o",
  authDomain: "linkedin-clone-1eaa7.firebaseapp.com",
  projectId: "linkedin-clone-1eaa7",
  storageBucket: "linkedin-clone-1eaa7.appspot.com",
  messagingSenderId: "500750147120",
  appId: "1:500750147120:web:39d3eff416829785c417f5",
  measurementId: "G-QX4XTX274W"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };