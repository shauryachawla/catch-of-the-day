import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDNbCtQjgTCi9YLi29Ddgwt-b3kXj89xZI",
  authDomain: "catch-of-the-day-shaurya.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-shaurya.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
