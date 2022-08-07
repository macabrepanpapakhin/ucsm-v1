`use strict`;
const thin = document.getElementById("thinmyahlaing");
const kyu = document.getElementById("kyukyu1");
const thinthin = document.querySelector(".thinthin");
thinthin.addEventListener("click", function (e) {
  thin.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
const kyukyu = document.querySelector(".kyukyu");
kyukyu.addEventListener("click", function (e) {
  kyu.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
});
