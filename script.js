$(document).ready(() => {
  // Bring in variables that I plan to use

  const today = dayjs("2023-12-12", "YYYY-MM-DD");
  console.log(today.format("dddd, Do MMMM")); // Checking the formatted date in the console

  const currentDayEl = $("#currentDay");
  currentDayEl.text(today.format("dddd, Do MMMM")); // Set the formatted date as the text content

  // Create an array to hold the opening hours
  const openHours = [];

  // Create an array to hold the opening hours from 9am to 5pm in AM/PM format
  for (let i = 9; i <= 17; i++) {
    openHours.push(`${i < 12 ? i : i - 12}${i < 12 ? "am" : "pm"}`);
  }

  // Generate time block elements for each hour using the openHours array
  openHours.forEach((hour) => {
    // Create a div element representing a time block and assign Bootstrap row class
    const timeBlockEl = $("<div>").addClass("time-block row");

    // Create a div for displaying the hour, use Bootstrap col-1 class for sizing
    const timeEl = $("<div>").addClass("col-1 hour").text(hour);
    timeBlockEl.append(timeEl); // Append the hour element to the time block

    // Create a textarea for adding descriptions, use Bootstrap col-9 class for sizing
    const descriptionEl = $("<textarea>").addClass("col-9 description");
    timeBlockEl.append(descriptionEl); // Append the description textarea to the time block

    // Create a button for saving, use Bootstrap col-2 class for sizing
    const saveBtn = $("<button>").addClass("col-2 saveBtn").text("Save");
    timeBlockEl.append(saveBtn); // Append the save button to the time block

    // Append the completed time block element to the container
    $(".container").append(timeBlockEl);
  });
});
