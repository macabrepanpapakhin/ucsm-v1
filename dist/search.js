`use strict`;

// const myvideo = document.getElementById("myvideo");
// var ispause = false;
// const clickToVideo = function (e) {
//   if (ispause) {
//     ispause = false;
//     myvideo.pause();
//     myvideo.muted = true;
//     return;
//   }
//   myvideo.play();
//   myvideo.muted = false;
//   ispause = true;
// };
// const border_button = document.querySelector(".border-button");
// const muteIcon = document.getElementById("muteicon");
// const sound_on_Icon = document.getElementById("sound-on-icon");
// const changeMiceIcon = function (e) {
//   if (ispause) {
//     muteIcon.classList.remove("ion-icon-remove");
//     sound_on_Icon.classList.add("ion-icon-remove");
//   } else {
//     muteIcon.classList.add("ion-icon-remove");
//     sound_on_Icon.classList.remove("ion-icon-remove");
//   }
// };
// const playButton = document.querySelector(".border-button");
// playButton.addEventListener("click", function (e) {
//   console.log("video clicked");
//   changeMiceIcon();
//   clickToVideo();
// });

const search_input = document.getElementById("s-i");
search_input.addEventListener("input", function (e) {});
const scrollserch = document.getElementById("scrollsearch");
const ssd = document.querySelector(".section_search_data");
scrollserch.addEventListener("click", function (e) {
  ssd.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
});
scrollserch.addEventListener("input", function (e) {
  ssd.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
});
scrollserch.addEventListener("keyup", function (e) {
  ssd.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
});

const questionMark = document.querySelector(".ion-icon1");
questionMark.addEventListener("click", function (e) {
  Swal.fire(
    "I downloaded the data first and stored it. That's why it may take a while on first few try. Sorry for inconvience."
  );
});
