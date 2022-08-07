import { initializeApp, getApp, getApps } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
let app;
if (!getApps().length) {
  app = initializeApp({
    apiKey: "AIzaSyBdCTmUz9MdgQ1MiG4A0d2l6uP_AsK-L9c",
    authDomain: "computer-university.firebaseapp.com",
    databaseURL:
      "https://computer-university-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "computer-university",
    storageBucket: "computer-university.appspot.com",
    messagingSenderId: "191965453814",
    appId: "1:191965453814:web:6b01e4248b6b7f8d38bbd7",
    measurementId: "G-2D960SCXZ9",
  });
} else {
  app = getApp(); // if already initialized, use that one
}
console.log(app);
console.log("sai la min oak");

let db = getDatabase();
