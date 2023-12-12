$(document).ready(() => {
  const today = dayjs("2023-12-12", "YYYY-MM-DD");
  // Get current hour in AM/PM format
  const currentHour = dayjs().format("H");
  // Convert current hour to number
  const formatCurHour = parseInt(currentHour);
  console.log(today.format("dddd, Do MMMM"));

  const currentDayEl = $("#currentDay");
  currentDayEl.text(today.format("dddd, Do MMMM"));

  const openHours = [];

  for (let i = 9; i <= 17; i++) {
    openHours.push(dayjs().hour(i).format("H")); // Generate hours in 24-hour format
  }

  openHours.forEach((hour) => {
    const hourNumber = parseInt(hour); // Extract the hour as a number

    const timeBlockEl = $("<div>").addClass("time-block row");
    const timeEl = $("<div>").addClass("col-1 hour").text(hour);
    timeBlockEl.append(timeEl);

    console.log(hourNumber);

    const descriptionEl = $("<textarea>").addClass("col-9 description");
    if (hourNumber < formatCurHour) {
      descriptionEl.addClass("past");
    } else if (hourNumber > formatCurHour) {
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
