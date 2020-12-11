// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBAjdJrGRtg95OVC7XmHdGYzziTZwQ0d7I",
    authDomain: "clone-da72a.firebaseapp.com",
    projectId: "clone-da72a",
    storageBucket: "clone-da72a.appspot.com",
    messagingSenderId: "42074569774",
    appId: "1:42074569774:web:148d7c58cc776ad1d9f3bf",
    measurementId: "G-76E8T2E17H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};