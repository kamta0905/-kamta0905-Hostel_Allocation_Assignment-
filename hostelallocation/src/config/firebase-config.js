import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBsk4eCBhdwe8JDkC1kBNNq5O1WN_UufTg",
    authDomain: "hostelalocation.firebaseapp.com",
    projectId: "hostelalocation",
    storageBucket: "hostelalocation.appspot.com",
    messagingSenderId: "378066849666",
    appId: "1:378066849666:web:041ced08c10c76554f899b",
    measurementId: "G-MVB8XT5080"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase;