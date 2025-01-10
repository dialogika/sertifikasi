document.addEventListener("DOMContentLoaded", () => {
    const countdownContainer = document.getElementById("countdown-pelatihan");
  
    const countdownValues = {
      hari: 0,
      jam: 0,
      menit: 0,
      detik: 0,
    };
  
    // Define colors for each circle
    const circleColors = {
      hari: "#0F5EA5",
      jam: "#0F5EA5",
      menit: "#0F5EA5",
      detik: "#0F5EA5",
    };
  
    function updateCountdown() {
        const targetDate = new Date("January 31, 2025 05:00:00").getTime();
      const currentDate = new Date().getTime();
      const distance = targetDate - currentDate;
  
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
  
      countdownValues.hari = Math.floor(distance / (1000 * 60 * 60 * 24));
      countdownValues.jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      countdownValues.menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      countdownValues.detik = Math.floor((distance % (1000 * 60)) / 1000);
  
      updateUI();
    }
  
    function updateUI() {
      Object.keys(countdownValues).forEach((key) => {
        const countdownItem = document.getElementById(key);
        const timeValue = countdownItem.querySelector(".time-value");
        const path = countdownItem.querySelector("path");
        const maxValue = key === "hari" ? 30 : key === "jam" ? 24 : 60;
        const radius = mapNumber(countdownValues[key], maxValue, 0, 0, 360);
  
        timeValue.textContent = countdownValues[key];
        path.setAttribute("d", describeArc(50, 50, 48, 0, radius));
        path.setAttribute("stroke", circleColors[key]); // Change circle color
      });
    }
  
    // Utility functions
    function mapNumber(number, inMin, inMax, outMin, outMax) {
      return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    }
  
    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
      };
    }
  
    function describeArc(x, y, radius, startAngle, endAngle) {
      const start = polarToCartesian(x, y, radius, endAngle);
      const end = polarToCartesian(x, y, radius, startAngle);
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
      return [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      ].join(" ");
    }
  
    // Start the countdown
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to update immediately on load
  });
  