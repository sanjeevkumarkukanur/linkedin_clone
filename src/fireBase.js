import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC-5NMzGnTF1hjusv3ys2KBUN6eIVOOiCU",
    authDomain: "linkedin-clone-aa909.firebaseapp.com",
    projectId: "linkedin-clone-aa909",
    storageBucket: "linkedin-clone-aa909.appspot.com",
    messagingSenderId: "614475619805",
    appId: "1:614475619805:web:e91d82ba581e648484ea34"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};