$(document).ready(() => {
  // Bring in variables that I plan to use

  const today = dayjs("2023-12-12", "YYYY-MM-DD");
  const currentHour = 11;
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
    const compareHours = parseInt(hour); // Extract hour as an integer
    console.log(compareHours);
    console.log(currentHour);

    const timeBlockEl = $("<div>").addClass("time-block row");
    const timeEl = $("<div>").addClass("col-1 hour").text(hour);
    timeBlockEl.append(timeEl);

    const descriptionEl = $("<textarea>").addClass("col-9 description");
    if (compareHours < currentHour) {
      descriptionEl.addClass("past");
    } else if (compareHours > currentHour) {
      descriptionEl.addClass("future");
    } else {
      descriptionEl.addClass("present");
    }
    timeBlockEl.append(descriptionEl);

    const saveBtn = $("<button>").addClass("col-2 saveBtn").text("Save");
    timeBlockEl.append(saveBtn);

    $(".container").append(timeBlockEl);
  });
});
