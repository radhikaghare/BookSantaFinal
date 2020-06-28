import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCcHBhJ56W-caQTweNsUlNKDacUAlZf43U",
  authDomain: "santabook-f481b.firebaseapp.com",
  databaseURL: "https://santabook-f481b.firebaseio.com",
  projectId: "santabook-f481b",
  storageBucket: "santabook-f481b.appspot.com",
  messagingSenderId: "225417541252",
  appId: "1:225417541252:web:354adecc2a7c8c00d0b4d1",
  measurementId: "G-KMP5FGCE0B"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
