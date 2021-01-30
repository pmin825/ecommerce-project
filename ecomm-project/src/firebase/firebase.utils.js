import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDLeg_RuopKdivd5avtCkpVgL6FcOJJkBI",
  authDomain: "ecomm-project-db.firebaseapp.com",
  projectId: "ecomm-project-db",
  storageBucket: "ecomm-project-db.appspot.com",
  messagingSenderId: "320666087980",
  appId: "1:320666087980:web:28ab7f12293e85aa435789",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
