// Initialize today's date using Day.js
const today = dayjs("2023-12-12", "YYYY-MM-DD");

// Get the current hour in 24-hour format
const currentHour = dayjs().format("H");

// Convert the current hour to a number for comparison
const formatCurHour = parseInt(currentHour);

// Log the current formatted date in the console
console.log(today.format("dddd, Do MMMM"));

// Get the element where the current day will be displayed and set its text content
const currentDayEl = $("#currentDay");
currentDayEl.text(today.format("dddd, Do MMMM"));

// Create an array to hold the hours from 9AM to 5PM in 24-hour format
const openHours = [];
for (let i = 9; i <= 17; i++) {
  openHours.push(dayjs().hour(i).format("H"));
}

// Iterate through each hour and create time blocks for them
openHours.forEach((hour) => {
  // Convert the hour to a number for comparison
  const hourNumber = parseInt(hour);

  // Create a time block element and set its class
  const timeBlockEl = $("<div>").addClass("time-block row");

  // Create an element to display the hour and set its class and text
  const timeEl = $("<div>").addClass("col-1 hour").text(hour);
  timeBlockEl.append(timeEl);

  // Create a textarea element for description and set its class
  const descriptionEl = $("<textarea>").addClass("col-9 description");

  // Determine if the hour is past, present, or future and set appropriate class
  if (hourNumber < formatCurHour) {
    descriptionEl.addClass("past");
  } else if (hourNumber > formatCurHour) {
    descriptionEl.addClass("future");
  } else {
    descriptionEl.addClass("present");
  }

  // Retrieve saved text from local storage for this hour
  const savedDescription = localStorage.getItem(hour);
  if (savedDescription) {
    descriptionEl.val(savedDescription); // Set the textarea value if there's saved text
  }
  timeBlockEl.append(descriptionEl);

  // Create a button for saving text and set its class and functionality
  const saveBtn = $("<button>").addClass("col-2 saveBtn").text("Save");
  saveBtn.on("click", () => {
    const descriptionText = descriptionEl.val();
    localStorage.setItem(hour, descriptionText); // Save text to local storage for this hour
  });
  timeBlockEl.append(saveBtn);

  // Append the completed time block element to the container
  $(".container").append(timeBlockEl);
});
