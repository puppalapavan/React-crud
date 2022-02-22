import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCFuEwpBaUKMjAPwSsB72Kz9hFhefKzdgw",
    authDomain: "registration-fde0a.firebaseapp.com",
    projectId: "registration-fde0a",
    storageBucket: "registration-fde0a.appspot.com",
    messagingSenderId: "894572300892",
    appId: "1:894572300892:web:9abecc50c011ab5ee47499",
    measurementId: "G-RPGMJFF7N5"
  };
  
  // Initialize Firebase
var firebaseDB = firebase.initializeApp(firebaseConfig);
export default firebaseDB.database().ref();