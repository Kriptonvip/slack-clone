// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from '@firebase/firestore'
// import { GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyA0GtEU_1A2j228__Nk5tGh9jp5eWo45KM",
//     authDomain: "slack-clone-1bbc5.firebaseapp.com",
//     projectId: "slack-clone-1bbc5",
//     storageBucket: "slack-clone-1bbc5.appspot.com",
//     messagingSenderId: "809737198520",
//     appId: "1:809737198520:web:b9c58d3e75c585027e4d4d",
//     measurementId: "G-G31HKNRV5K"
//   };

//   const app = initializeApp(firebaseConfig);

//   const db = getFirestore(app);
//   const auth = firebase.auth();
//   const provider = new GoogleAuthProvider();

//   export { auth, provider, db};

import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA0GtEU_1A2j228__Nk5tGh9jp5eWo45KM',
  authDomain: 'slack-clone-1bbc5.firebaseapp.com',
  projectId: 'slack-clone-1bbc5',
  storageBucket: 'slack-clone-1bbc5.appspot.com',
  messagingSenderId: '809737198520',
  appId: '1:809737198520:web:b9c58d3e75c585027e4d4d',
  measurementId: 'G-G31HKNRV5K',
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
