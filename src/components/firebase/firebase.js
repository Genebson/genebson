import firebase from 'firebase/app';
import "@firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
  apiKey: "AIzaSyC7X_-pExjssaXm6EUDLDyMdf9cIuKzfdE",
  authDomain: "genebson.firebaseapp.com",
  projectId: "genebson",
  storageBucket: "genebson.appspot.com",
  messagingSenderId: "990663965771",
  appId: "1:990663965771:web:9a00a40e35572bfa5d61ce",
  measurementId: "G-03X13RYHMY"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app)
}