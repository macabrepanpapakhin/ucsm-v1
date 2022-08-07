console.log("second js");
const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/name/myanmar");
request.send();
request.addEventListener("load", function (e) {
  const [data] = JSON.parse(this.responseText);
  console.log(data);
});
