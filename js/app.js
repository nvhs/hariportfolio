const technologies = ["AWS Certified 🌟", "NLP Researcher 🔬", "Master's Student 🧑🏻‍🎓","Software Engineer 👨🏻‍💻"];
let currentTechIndex = 0; // Start with the first technology


function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start) + "+";
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  // On load, animate each stats number
  window.onload = function() {
    const statsNumbers = document.querySelectorAll('.stats-number');
    statsNumbers.forEach(num => {
      const finalNumber = parseInt(num.getAttribute('data-target'), 10);
      animateValue(num, 0, finalNumber, 2000); // 2000ms is the duration of the count
    });
  };
function updateTechnology() {
  const techSpan = document.getElementById('technology');
  // Apply fade-out class
  techSpan.className = 'fade-out';
  
  // Wait for the fade-out animation to finish before changing the text and fading back in
  setTimeout(() => {
    // Update the technology displayed
    currentTechIndex = (currentTechIndex + 1) % technologies.length;
    techSpan.textContent = technologies[currentTechIndex];
    
    // Apply fade-in class
    techSpan.className = 'fade-in';
  }, 2000); // This duration should match the fade-out animation time
}

// Update the technology every 4 seconds (includes both fade-out and fade-in times)
setInterval(updateTechnology, 4000);

function toggleAchievements() {
          
    var list = document.getElementById("achievementsList");
    var toggleLink = document.getElementById("toggleLink");
    if (list.style.display === "none") {
        list.style.display = "block"; // Show the list
        toggleLink.innerHTML = "Less"; // Change text to Less
    } else {
        list.style.display = "none"; // Hide the list
        toggleLink.innerHTML = "More"; // Change text to More
    }

}
function toggleAchievements1() {
  
  var list = document.getElementById("achievementsList1");
  var toggleLink = document.getElementById("toggleLink1");
  if (list.style.display === "none") {
      list.style.display = "block"; // Show the list
      toggleLink.innerHTML = "Less"; // Change text to Less
  } else {
      list.style.display = "none"; // Hide the list
      toggleLink.innerHTML = "More"; // Change text to More
  }

}
