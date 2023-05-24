// Define your portfolio dictionary
const portfolioDictionary = {
    p0: {
      projectName: 'tech stack.',
      projectLink: '',
      projectDesc: 'html, css, php, js, python',
      projectImageURL: ''
    },
    p1: {
      projectName: 'futurecar.',
      projectLink: '/carssite/index.html',
      projectDesc: 'car website for buying, selling and auctioning cars.',
      projectImageURL: ''
    },
    p2: {
      projectName: 'currentweed.',
      projectLink: 'https://www.currentweed.site',
      projectDesc: 'a website for thoughtful marijuana use.',
      projectImageURL: ''
    }
  };
  
  let currentIndex = 0;
  
  function loadMainContent() {
    const mainContent = document.getElementById("main-content");
    const backButton = document.getElementById("back-slide-button");
    const homeButton = document.getElementById("back-to-home");
    homeButton.style.opacity = 1;
    const headerOptions = document.getElementById("header-options-button");
    headerOptions.style.opacity = '0';
    const headerOptions2 = document.getElementById("header-options-button2");
    headerOptions2.style.opacity = '0';
  
    // Check if currentIndex is the first slide
    if (currentIndex === 0) {
      // Hide the back button
      backButton.style.opacity = 0;
    } else {
      // Show the back button
      backButton.style.opacity = 1;
    }
  
    // Get the data for the current slide from the dictionary
    const slideData = portfolioDictionary["p" + currentIndex];
  
    // Create a new slide div
    const newSlide = document.createElement("div");
    newSlide.innerHTML = `
      <a href="${slideData.projectLink}">${slideData.projectName}</a>
      <p>${slideData.projectDesc}</p>
    `;
  
    // Clear the current content of the mainContent div
    mainContent.innerHTML = "";
  
    // Append the new slide to the mainContent div
    mainContent.appendChild(newSlide);
  }
  
  function forwardButton() {
    const mainContent = document.getElementById("main-content");
  
    // Increment the currentIndex
    currentIndex++;
  
    // Check if the currentIndex exceeds the last slide
    if (currentIndex > Object.keys(portfolioDictionary).length - 1) {
      currentIndex = 0;
    }
  
    // Apply animation to the mainContent div
    mainContent.style.animation = "moveLeft 2s";
  
    // Wait for the animation to finish
    setTimeout(() => {
      // Load the main content with the updated currentIndex
      loadMainContent();
  
      // Reset the animation
      mainContent.style.animation = "";
    }, 1000);
  }
  
  function backwardButton() {
    const mainContent = document.getElementById("main-content");
  
    // Decrement the currentIndex
    currentIndex--;
  
    // Check if the currentIndex goes below the first slide
    if (currentIndex < 0) {
      currentIndex = Object.keys(portfolioDictionary).length - 1;
    }
  
    // Apply animation to the mainContent div
    mainContent.style.animation = "moveRight 2s";
  
    // Wait for the animation to finish
    setTimeout(() => {
      // Load the main content with the updated currentIndex
      loadMainContent();
  
      // Reset the animation
      mainContent.style.animation = "";
    }, 1000);
  }
  
function displayPortfolio() {
    const headerSize = document.getElementById("header");
    headerSize.style.height = '30vh';
    const headerText = document.getElementById("header-text");
    headerText.style.fontSize = '10vh';
    loadMainContent();
}

function returnHomeButton() {
    const headerSize = document.getElementById("header");
    headerSize.style.height = '100vh';
    const headerText = document.getElementById("header-text");
    headerText.style.fontSize = '11vh';
    const homeButton = document.getElementById("back-to-home");
    homeButton.style.opacity = 0;
    const headerOptions = document.getElementById("header-options-button");
    headerOptions.style.opacity = '1';
    const headerOptions2 = document.getElementById("header-options-button2");
    headerOptions2.style.opacity = '1';
}