import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDky4lMl87gAe2DwdZWyiT7Kw6XnjPGfFo",
  authDomain: "todo-ix-firebase-demo.firebaseapp.com",
  databaseURL: "https://todo-ix-firebase-demo.firebaseio.com",
  projectId: "todo-ix-firebase-demo",
  storageBucket: "todo-ix-firebase-demo.appspot.com",
  messagingSenderId: "226737822945",
  appId: "1:226737822945:web:9e8ea7b886b0088c46aba0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
