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
//console.log(app);
let db;
db = getDatabase();
const show_data_section = document.querySelector(".section_show_data");
const search_input = document.getElementById("s-i");
var savedSnapShot;
var free = true;
const resultStatus = document.getElementById("resultStatus");
const belowsearch = document.querySelector(".below_search_bar");
const usedsavedsnapshot = function (snapshot = {}, data = "") {
  show_data_section.innerHTML = "";
  let count = 0;
  snapshot.forEach((shots) => {
    const child1 = shots.val();
    if (shots.key.toLocaleLowerCase().includes(data)) {
      count++;
      console.log("shots key is " + shots.key);
      const html = `<div class="aperson">
      <div class="person_header">
        <ion-icon name="diamond-outline" class="tag_icon"></ion-icon>
        <p><span class="rank_text">${child1.batch}</span></p>
      </div>
      <div class="general_section grid grid-1-2">
        <div class="person_profile">
          <img
            src="data:image/jpeg;base64,${child1.image}"
            class="person_img"
          />
        </div>
        <div class="person_data grid grid-1-2">
          <div class="labell">
            <span class="person_label">Name</span>
            <span class="person_label">Rank</span>
            <span class="person_label">Phone No.</span>
            <span class="person_label">Email</span>
            <span class="person_label">Subjects</span>
          </div>
          <div class="flex-d-col">
            <p class="person_info" id="person_name">${child1.name}</p>
            <p class="person_info" id="person_rank">${child1.achievements}</p>
            <p class="person_info" id="person_phone">${child1.phoneNumber}</p>
            <p class="person_info" id="person_email">
            ${child1.email}
            </p>
            <p class="person_info" id="person_subjects">
            ${child1.batch}
            </p>
          </div>
        </div>
      </div>
    </div>`;
      if (show_data_section)
        show_data_section.insertAdjacentHTML("beforeend", html);
    }
    // } else {
    //   if (count == 0) {
    //     console.log("no data available");
    //     show_data_section.innerHTML = "";
    //   }
    // }
  });
  if (count == 0) {
    console.log("no data found");
    show_data_section.innerHTML = "";
  }
  if (resultStatus) {
    resultStatus.innerHTML = `${count} results found`;
    belowsearch.classList.remove("ion-icon-remove");
  }
  count = 0;
};
const searchData = function (data = "") {
  if (data == "") return;
  if (db == null) {
    alert("cannot make a reference:contact to admin");
    return;
  }
  if (savedSnapShot == null) {
    const databaseReference = ref(db, "Students");
    onValue(databaseReference, (snapshot) => {
      savedSnapShot = snapshot;
      console.log("successfully store data");
      const loading_circle = document.querySelector(".loading_circle");
      const right = document.querySelector(".rightfar");
      loading_circle.classList.add("paused");
      right.innerHTML = "ready to search";
      right.classList.add("fade_in_text_animatiion");
      setTimeout(function (e) {
        right.classList.add("paused");
        right.classList.add("ion-icon-remove");
      }, 5000);
    });
  } else {
    console.log("reusing it");
    usedsavedsnapshot(savedSnapShot, data);
  }
  return savedSnapShot;
};
if (free) {
  free = false;
  searchData("m");
  free = true;
  //have synchronized problem. need to make promise.
}

if (search_input)
  search_input.addEventListener("input", function (e) {
    searchData(search_input.value.toLocaleLowerCase().trim());
    console.log(search_input.value);
  });
