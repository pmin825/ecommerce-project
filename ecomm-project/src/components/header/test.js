import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("76K6si6sjSOtpA8yOjJR")
  .collection("cartItems")
  .doc("5GpZvsdtZtbMQXoTLudI");

firestore.doc("/users/76K6si6sjSOtpA8yOjJR/cartItems/5GpZvsdtZtbMQXoTLudI");
firestore.collection("users/76K6si6sjSOtpA8yOjJR");
