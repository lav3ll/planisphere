// Bring in variables that i plan to use

const today = dayjs("2023-12-12", "YYYY-MM-DD");
console.log(today.format("dddd, Do MMMM")); // Checking the formatted date in the console

const currentDayEl = $("#currentDay");
currentDayEl.text(today.format("dddd, Do MMMM")); // Set the formatted date as the text content
