// ===== New Year Countdown Script =====

// Target Date: January 1, 2026 (Midnight)
const targetDate = new Date("Jan 1, 2026 00:00:00").getTime();

// Update countdown every 1 second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const difference = targetDate - now;

  // Time calculations
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update the HTML
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // When the countdown ends
  if (difference < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").innerHTML =
      "<h2>🎉 Happy New Year 2026! 🥳</h2>";
  }
}, 1000);
