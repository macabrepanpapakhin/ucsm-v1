`use strict`;
var calendarEvents1 = [];
calendarEvents1.push({
  name: "New Year", // Event name (required)
  type: "holiday", // Event type (required)
  everyYear: true, // Same event every year (optional)
  date: " 8/10/2022",
});
calendarEvents1.push({
  name: "New Year", // Event name (required)
  type: "holiday", // Event type (required)
  everyYear: true, // Same event every year (optional)
  date: " 8/11/2022",
});
$("#calendar").evoCalendar({
  calendarEvents: calendarEvents1,
});
console.log("hi");
