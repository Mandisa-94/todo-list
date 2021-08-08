  import firebase from 'firebase/app';
  import 'firebase/firestore';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBxA0vmaVeyVYocu0_58J-QLOEABQfi2nk",
    authDomain: "todo-list-ebacf.firebaseapp.com",
    projectId: "todo-list-ebacf",
    storageBucket: "todo-list-ebacf.appspot.com",
    messagingSenderId: "763784368869",
    appId: "1:763784368869:web:d71e3b991a9e2e385a3a0c"
  };
  // Initialize Firebase
  const fb =  firebase.initializeApp(firebaseConfig);
 export const db = fb.firestore();