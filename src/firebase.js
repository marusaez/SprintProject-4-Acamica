import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCsa0b9jnLiBqHy5BRJXQPb2WYduz-auME",
    authDomain: "sp-4-dev-united.firebaseapp.com",
    projectId: "sp-4-dev-united",
    storageBucket: "sp-4-dev-united.appspot.com",
    messagingSenderId: "23518316177",
    appId: "1:23518316177:web:55d602171744cd4627a130",
    measurementId: "G-SJ34H28H83"
  };

  firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
