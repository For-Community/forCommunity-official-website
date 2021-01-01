import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIu8tOmqQ8B69IKRMgaU724m-mCz4GK8g",
  authDomain: "forcommunityy.firebaseapp.com",
  projectId: "forcommunityy",
  storageBucket: "forcommunityy.appspot.com",
  messagingSenderId: "632258241953",
  appId: "1:632258241953:web:ffc3aec7e9f6446fcc57e0",
  measurementId: "G-0EZS6ZZFN7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
