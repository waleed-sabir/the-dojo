import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBz1yazBwEYLEVLR5QQFg_ohnkxIO5Q8EY",
  authDomain: "thedojosite-13b37.firebaseapp.com",
  projectId: "thedojosite-13b37",
  storageBucket: "thedojosite-13b37.appspot.com",
  messagingSenderId: "415933812644",
  appId: "1:415933812644:web:f8c4c5eca5ebda43e1bb31",
};

// firebase init
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectAuth, projectFirestore, projectStorage, timestamp };
