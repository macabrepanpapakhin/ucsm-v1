`use strict`;
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
var calendarEvents12 = [];
calendarEvents12.push({
  name: "New Year", // Event name (required)
  type: "holiday", // Event type (required)
  everyYear: true, // Same event every year (optional)
  date: "8/10/2022",
});
calendarEvents12.push({
  name: "New Year", // Event name (required)
  type: "holiday", // Event type (required)
  everyYear: true, // Same event every year (optional)
  date: " 8/11/2022",
});

let db;
db = getDatabase();

var eventArray = [];
const setUpEvent = async function () {
  const currentMonth = new Date().getMonth() + 1;
  console.log("current month " + currentMonth);
  const refToCalendar = ref(db, "Calendar/1/Day");
  onValue(refToCalendar, (snapshot) => {
    // console.log(snapshot.key);
    snapshot.forEach((snap) => {
      console.log(snap.val());
      let datetext = currentMonth + "/" + snap.val() + "/" + "2022";
      eventArray.push({
        name: "New Year", // Event name (required)
        type: "holiday", // Event type (required)
        // Same event every year (optional)
        date: " 8/11/2022",
        description: " listOftheMonth",
        type: "event",
        color: "#63d867",
      });

      // console.log(currentMonth + "/" + snap.val() + "/" + "2022");
    });
    return "promisefromevent";
  });
};
const hi = function () {
  eventArray.forEach((s) => {
    console.log(s);
  });
  $("#calendar").evoCalendar({
    calendarEvents: eventArray,
  });
};
let listOftheMonth = "";
const setUpList = async function () {
  listOftheMonth = "";
  const refToLists = ref(db, "Calendar/1/Lists");
  onValue(refToLists, (snapshot) => {
    snapshot.forEach((snapshot1) => {
      listOftheMonth += snapshot1.val() + "\n";
    });
  });
  return "promise";
};
setUpList()
  .then(setUpEvent)
  .then(function (e) {
    hi();
    const dd = document.getElementById("calendar");
    dd.classList.remove("displayBlock");
  });
// setUpList().then(
//   setUpEvent().then((p) => {
//     setTimeout(function () {
//       hi();
//       setTimeout(function () {
//         const dd = document.getElementById("calendar");
//         dd.classList.remove("displayBlock");
//       }, 1000);
//     }, 2000);
//   })
// );
// await setUpList();
// await setUpEvent();
// eventArray.forEach((s) => {
//   console.log(s);
// });
