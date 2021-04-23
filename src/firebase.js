import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtBovBnPs1Zy4OvcCpEZhWCqvMXcq6C1c",
  authDomain: "tinder-clone-app-f87e7.firebaseapp.com",
  projectId: "tinder-clone-app-f87e7",
  storageBucket: "tinder-clone-app-f87e7.appspot.com",
  messagingSenderId: "965183412780",
  appId: "1:965183412780:web:a21691e10002dda3b6cf89",
  measurementId: "G-6DQJ49C4HR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
