import firebase from "firebase/app"
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAcogwafWQsRgZsTJtMBnGoFSIrmKhNPZI",
    authDomain: "note-taker-react-fe0b0.firebaseapp.com",
    projectId: "note-taker-react-fe0b0",
    storageBucket: "note-taker-react-fe0b0.appspot.com",
    messagingSenderId: "516051810513",
    appId: "1:516051810513:web:2d21ec02a0f299bd9a2df0",
    measurementId: "G-Y7YQ0B9HHK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;