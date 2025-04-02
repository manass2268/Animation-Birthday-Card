// Set your target date here
const targetDate = new Date("2024-12-31T00:00:00").getTime();

// Get the current date and time
const now = new Date().getTime();

// Check if the target date is already stored in local storage
const storedTargetDate = localStorage.getItem("targetDate");

// If the target date is not stored, store it in local storage
if (!storedTargetDate) {
  localStorage.setItem("targetDate", targetDate);
}

// Get the stored target date from local storage
const storedTargetDateValue = localStorage.getItem("targetDate");

// Calculate the time difference between the stored target date and the current date
const distance = storedTargetDateValue - now;

// Time calculations for days, hours, minutes, and seconds
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the countdown element
document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;

// Update the countdown timer every second
setInterval(() => {
  const now = new Date().getTime();
  const distance = storedTargetDateValue - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the countdown element
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}, 1000);

// If the countdown is finished, write some text
if (distance < 0) {
  clearInterval(countdownFunction);
  document.getElementById("countdown").innerHTML = "EXPIRED";
}