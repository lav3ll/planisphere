$(document).ready(() => {
  const today = dayjs("2023-12-12", "YYYY-MM-DD");
  const currentHour = dayjs().format("H");
  const formatCurHour = parseInt(currentHour);
  console.log(today.format("dddd, Do MMMM"));

  const currentDayEl = $("#currentDay");
  currentDayEl.text(today.format("dddd, Do MMMM"));

  const openHours = [];

  for (let i = 9; i <= 17; i++) {
    openHours.push(dayjs().hour(i).format("H"));
  }

  openHours.forEach((hour) => {
    const hourNumber = parseInt(hour);

    const timeBlockEl = $("<div>").addClass("time-block row");
    const timeEl = $("<div>").addClass("col-1 hour").text(hour);
    timeBlockEl.append(timeEl);

    const descriptionEl = $("<textarea>").addClass("col-9 description");
    if (hourNumber < formatCurHour) {
      descriptionEl.addClass("past");
    } else if (hourNumber > formatCurHour) {
      descriptionEl.addClass("future");
    } else {
      descriptionEl.addClass("present");
    }
    const savedDescription = localStorage.getItem(hour); // Retrieve text from local storage
    if (savedDescription) {
      descriptionEl.val(savedDescription); // Set the textarea value if there's saved text
    }
    timeBlockEl.append(descriptionEl);

    const saveBtn = $("<button>").addClass("col-2 saveBtn").text("Save");
    saveBtn.on("click", () => {
      const descriptionText = descriptionEl.val();
      localStorage.setItem(hour, descriptionText);
    });
    timeBlockEl.append(saveBtn);

    $(".container").append(timeBlockEl);
  });
});
