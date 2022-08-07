`use strict`;
const menuButton = document.querySelector(".icon-mobile-nav");
const seciton_menu = document.querySelector(".section_menu");
const menuOpen = function (e) {
  seciton_menu.classList.add("section_open");
};
const menuClose = function (e) {
  seciton_menu.classList.remove("section_open");
};
menuButton.addEventListener("click", function (e) {
  menuOpen();
});
menuButton.addEventListener("mouseover", (event) => {
  menuOpen();
});
let opening = false;
menuButton.addEventListener("mouseout", function (e) {
  opening = false;
  setTimeout(() => {
    if (!opening) menuClose();
  }, 500);
});
seciton_menu.addEventListener("mouseover", function (e) {
  menuOpen();
  opening = true;
});
seciton_menu.addEventListener("mouseout", function (e) {
  menuClose();
  opening = false;
});
const timetableheader = document.querySelector(".timetableheader");
let textdate = "Your Timetable";
const date = new Date();
const options = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

console.log(new Date().toLocaleDateString("en-US", options));
if (date.getDay() == 6 || date.getDay() == 0) {
  textdate = "You have no schedule for today";
  timetableheader.innerHTML =
    textdate + " ( " + new Date().toLocaleDateString("en-US", options) + " )";
} else {
  timetableheader.innerHTML =
    "Today Timetable " +
    " ( " +
    new Date().toLocaleDateString("en-US", options) +
    " )";
}
