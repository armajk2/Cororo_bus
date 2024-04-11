window.addEventListener('scroll', function() {
  moveBus(); // Call the function to move the bus
  lightCircles(); // Call the function to light up circles
});

function moveBus() {
  // Your code to move the bus along the path
}

function lightCircles() {
  let scrollPosition = window.pageXOffset;
  let threshold = 1520;
  let circles = document.querySelectorAll('.circle');

  circles.forEach(function(circle, index) {
    let xPos = (index + 1) * threshold;
    if (scrollPosition >= xPos) {
      // Calculate the position within the threshold
      let positionWithinThreshold = (scrollPosition - (index * threshold)) / threshold;
      
      // Determine the color based on the position within the threshold
      let color;
      if (positionWithinThreshold < 0.5) {
        color = `rgb(${Math.round(255 * (1 - positionWithinThreshold * 2))}, 255, 0)`; // Green to Yellow
      } else {
        color = `rgb(255, ${Math.round(255 * (1 - (positionWithinThreshold - 0.5) * 2))}, 0)`; // Yellow to Red
      }
      
      circle.style.backgroundColor = color;
    } else {
      circle.style.backgroundColor = "rgb(0, 250, 63)"; // Default color is green
    }
  });
}




function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

window.onscroll = function() {
  lightCircles(); // Call the function to light up circles
  moveBus(); // Call the function to move the bus
};


function moveBus() {
  let scrollPositionX = window.pageXOffset; // Get the horizontal scroll position

  // Get the width of the path
  let pathWidth = document.querySelector('.path').offsetWidth;

  // Get the width of the bus
  let busWidth = document.getElementById('bus').offsetWidth;

  // Calculate the maximum scrollable width of the page (700% + 500px)
  let totalWidth = (600 / 135) * window.innerWidth + 0;

  // Calculate the maximum position of the bus within the path
  let maxPosition = (pathWidth - busWidth) * (scrollPositionX / totalWidth);

  // Apply the new position to the bus element
  document.getElementById('bus').style.left = maxPosition + 'px';
}


let inactivityTimer;

function closePageAndOpenMain() {
    window.close(); // Close the current page
    window.open('index.html', '_self'); // Open main.html in the same tab
}

function resetTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(closePageAndOpenMain, 300000); 
}

document.addEventListener('mousemove', resetTimer);

resetTimer();




