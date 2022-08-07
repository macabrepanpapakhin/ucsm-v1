import { initializeApp, getApp, getApps } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

/*
https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js"
*/
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
const writeData = function () {
  const reference = ref(db, "users/" + 3);
  set(reference, {
    username: "sai",
    email: "sai@gmail.com",
  })
    .then(() => {
      console.log("data stored successfully");
    })
    .catch((error) => {
      console.log("unknown error " + error);
    });
};
const showResultData = function () {
  if (db == null) {
    alert("cannot make a reference");
    return;
  }
  const databaseReference = ref(db, "Results/6167");
  onValue(databaseReference, (snapshot) => {
    snapshot.forEach((shots) => {
      const child1 = shots.val();
      console.log(shots.key);
      console.log(child1.mkpt);
      console.log(child1.subjects);
    });

    console.log("sailaminoak");
  });
};
const getNews = function () {
  const ref1 = ref(db, "News");
  onValue(ref1, (snapshot) => {
    snapshot.forEach((shots) => {
      const child = shots.val();
      for (const key in child) {
        const data = child[key];
        const reference = ref(db, `Posts/News/${data.title}/${key}`);
        const array = document.createElement("div");
        array.classList.add("body_helper");
        onValue(reference, (snapshot) => {
          const datt = snapshot.val();
          array.innerHTML = "";
          for (const key in datt) {
            const text = datt[key].text;
            let html = text;
            if (text.startsWith("asdfjkl;yokelaminoak")) {
              continue;
            }
            if (text.startsWith("/9j/")) {
              continue;
              // html = ` <img  src="data:image/jpeg;base64,${text}" />`;
            }

            array.insertAdjacentHTML("beforeend", html);
          }

          const hhht = ` <div class="anew">
        <div class="new_header1">
          <div class="new_header"></div>
          <p class="new_title">${data.title}</p>
        </div>
        <div class="new_body grid grid-1-2">
          <div class="first_news">
            <img  src="data:image/jpeg;base64,${data.image}" />
          </div>
          <div class="second_news">
            <p class="news_body_text">
            ${array.outerHTML}
            </p>
          </div>
        </div>
      </div>`;
          const ucsm_news = document.querySelector(".ucsm_news");
          ucsm_news.insertAdjacentHTML("beforeend", hhht);
        });
      }
    });
  });
};

getNews();
let count = 0;
const setUpTimeTable = function () {
  const timetableReference = ref(db, "Timetables/4SE");
  const timetable123 = document.querySelector(".timetable-body");
  onValue(timetableReference, (snapshot) => {
    snapshot.forEach((shots) => {
      count++;
      const child = shots.val();
      const date = shots.key;
      console.log(date);
      var newtr = document.createElement("tr");
      var newtd = document.createElement("td");
      newtd.innerHTML = date;
      if (date.toLowerCase() == "tuesday".toLocaleLowerCase()) {
        newtr.classList.add("active-row");
      } else {
        console.log("today is " + date.toLocaleLowerCase());
      }
      newtr.appendChild(newtd);
      var newtd = document.createElement("td");
      newtd.innerHTML = child.subject1;
      newtr.appendChild(newtd);
      var newtd = document.createElement("td");
      newtd.innerHTML = child.subject2;
      newtr.appendChild(newtd);
      var newtd = document.createElement("td");
      newtd.innerHTML = child.subject3;
      newtr.appendChild(newtd);
      var newtd = document.createElement("td");
      newtd.innerHTML = child.subject4;
      newtd.classList.add("borderleft");
      newtr.appendChild(newtd);

      var newtd = document.createElement("td");
      newtd.innerHTML = child.subject5;
      newtr.appendChild(newtd);
      var newtd = document.createElement("td");
      newtd.innerHTML = child.subject6;
      newtr.appendChild(newtd);
      if (timetable123) {
        timetable123.appendChild(newtr);
      }
    });
  });
};
setUpTimeTable();

const postFinal = document.querySelector(".ucsm_post");
const setUpPost = function () {
  const refToPostShowOff = ref(db, "ShowOff");
  onValue(refToPostShowOff, (snapshot) => {
    snapshot.forEach((shots) => {
      //console.log(shots.key);
      const childref = ref(db, `ShowOff/${shots.key}`);
      onValue(childref, (snapshot1) => {
        snapshot1.forEach((s1) => {
          console.log(s1.key);
          const grandchildrenref = ref(db, `ShowOff/${shots.key}/${s1.key}`);
          onValue(grandchildrenref, (snapshot2) => {
            const div_post = document.createElement("div");
            div_post.classList.add("post");
            const div_post_title = document.createElement("div");
            div_post_title.classList.add("post_title");
            const p = document.createElement("p");
            p.innerHTML = snapshot2.val().name;
            div_post_title.appendChild(p);
            const p1 = document.createElement("p");
            p1.innerHTML = snapshot2.val().hint;
            p1.classList.add("post_secondary_text");
            const div_body = document.createElement("div");
            div_body.classList.add("post_body");
            div_body.appendChild(p1);
            div_post.appendChild(div_post_title);
            div_post.appendChild(div_body);
            const div_author = document.createElement("div");
            div_author.classList.add("author");
            const p2 = document.createElement("p");
            p2.innerHTML = snapshot2.val().author;
            div_author.appendChild(p2);
            div_post.appendChild(div_author);
            postFinal.appendChild(div_post);
          });
        });
      });
    });
  });
};
setUpPost();
/*
const getNews = function () {
  const ref1 = ref(db, "News");
  onValue(ref1, (snapshot) => {
    snapshot.forEach((shots) => {
      const child = shots.val();
      for (const key in child) {
        console.log(key);
        console.log(child[key].date);
        console.log(child[key].image);
        console.log(child[key].title);
        const data = child[key];
        const hhht = ` <div class="anew">
        <div class="new_header1">
          <div class="new_header"></div>
          <p class="new_title">${data.title}</p>
        </div>
        <div class="new_body grid grid-1-2">
          <div class="first_news">
            <img src="/img/ucsmimageforphone.jpg" />
          </div>
          <div class="second_news">
            <p class="news_body_text">
            ${data.date};
              Nowadays, wherever you look at you see people learning japanese.
              But you want to do a little different than other and have no idea
              what to do. here are a few languages you can learn. France ,
              German , English.But you want to do a little different than other
              and have no idea what to do. here are a few languages you can
              learn. France , German , English. But you want to do a little
              different than other and have no idea what to do. here are a few
              languages you can learn. France , German , English. Nowadays,
              wherever you look at you see people learning japanese. But you
              want to do a little different than other and have no idea what to
              do. here are a few languages you can learn. France , German ,
              English.But you want to do a little different than other and have
              no idea what to do. here are a few languages you can learn. France
              , German , English. But you want to do a little different than
              other and have no idea what to do. here are a few languages you
              can learn. France , German , English. Nowadays, wherever you look
              at you see people learning japanese. But you want to do a little
              different than other and have no idea what to do. here are a few
              languages you can learn. France , German , English.But you want to
              do a little different than other and have no idea what to do. here
              are a few languages you can learn. France , German , English. But
              you want to do a little different than other and have no idea what
              to do. here are a few languages you can learn. France , German ,
              English.
            </p>
          </div>
        </div>
      </div>`;
      }
    });
  });
};

getNews();
/*
const timetableTable = document.querySelector(".table-content");
const timetableTableBody = document.querySelector(".timetable");
if (count == 0) {
  timetableTable.remove();
  var div = document.createElement("div");
  div.innerHTML = "You don't have a schedule yet!!!";
  div.classList.add("textcenter");
  timetableTableBody.appendChild(div);
}

*/
/*
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
  return;
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
*/
