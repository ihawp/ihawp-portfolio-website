// ihawp
// we chillin

const portfolioDictionary = {
  p0: {
    projectName: 'tech stack.',
    projectLink: '',
    projectDesc: '- html, css, php, js, python',
    projectLang: '- html, css, javascript',
    projectImageURL: 'techStackImage.png',
    projectColor: "purple"
  },
  p1: {
    projectName: 'futurecar.',
    projectLink: '/carssite/index.html',
    projectDesc: '- car website for buying, selling and auctioning cars.',
    projectLang: '- html, css, javascript',
    projectImageURL: 'future-car-portfolio-image.png',
    projectColor: "#dd1f1f"
  },
  p2: {
    projectName: 'currentweed.',
    projectLink: 'https://www.currentweed.site',
    projectDesc: '- ???',
    projectLang: '- html, css, javascript, php',
    projectImageURL: 'currentweed-portfolio-image.png',
    projectColor: "#51f29c"
  }
};

let currentIndex = 0;

function loadMainContent() {
  const mainContent = document.getElementById("main-content");
  const backButton = document.getElementById("back-slide-button");
  const homeButton = document.getElementById("back-to-home");
  homeButton.style.opacity = 1;
  const headerOptions = document.getElementById("header-options-button");
  headerOptions.style.transform = 'scale(0)';
  const headerOptions2 = document.getElementById("header-options-button2");
  headerOptions2.style.transform = 'scale(0)';

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
  if (isMobileDevice()) {
    const forwardButton = document.getElementById("next-slide-button");
    forwardButton.style.transform = 'scale(0)';
    const backButton = document.getElementById("back-slide-button");
    backButton.style.transform = 'scale(0)';
      // Create a new slide div
  const newSlide = document.createElement("div");
  newSlide.innerHTML = `
  <div class="above-img">
  <ai-image-block>
      <img id="above-image-img" draggable="false" src='${slideData.projectImageURL}'></img>
  </ai-image-block>
  <ai-text-block>
      <a target="_blank" id="above-image-a" href="${slideData.projectLink}">${slideData.projectName}</a>
      <p>${slideData.projectDesc}</p>
      <p>${slideData.projectLang}</p>
  </ai-text-block>
  <mc-button>
    <button id="mobile-back-slide-button" onclick="backwardButton()"><</button>
    <button id="mobile-next-slide-button" onclick="forwardButton()">></button>
  </mc-button>
  </div>
`;
newSlide.style.backgroundColor = slideData.projectColor;

// Clear the current content of the mainContent div
mainContent.innerHTML = "";

// Append the new slide to the mainContent div
mainContent.appendChild(newSlide);
  } else {
    const forwardButton = document.getElementById("next-slide-button");
    forwardButton.style.transform = 'scale(1)';
    const backButton = document.getElementById("back-slide-button");
    backButton.style.transform = 'scale(1)';
      // Create a new slide div
  const newSlide = document.createElement("div");
  newSlide.innerHTML = `
  <div class="above-img">
  <ai-image-block>
      <img id="above-image-img" draggable="false" src='${slideData.projectImageURL}'></img>
  </ai-image-block>
  <ai-text-block>
      <a target="_blank" id="above-image-a" href="${slideData.projectLink}">${slideData.projectName}</a>
      <p>${slideData.projectDesc}</p>
      <p>${slideData.projectLang}</p>
  </ai-text-block>
  </div>
`;
newSlide.style.backgroundColor = slideData.projectColor;

// Clear the current content of the mainContent div
mainContent.innerHTML = "";

// Append the new slide to the mainContent div
mainContent.appendChild(newSlide);
  }
}

function forwardButton() {
  if (isMobileDevice()) {
    const forwardButton = document.getElementById("next-slide-button");
    forwardButton.style.transform = 'scale(0)';
    const backButton = document.getElementById("back-slide-button");
    backButton.style.transform = 'scale(0)';
  } else {
    const forwardButton = document.getElementById("next-slide-button");
    forwardButton.style.transform = 'scale(1)';
    const backButton = document.getElementById("back-slide-button");
    backButton.style.transform = 'scale(1)';
  }
  const mainContent = document.getElementById("main-content");
  currentIndex++;
  if (currentIndex > Object.keys(portfolioDictionary).length - 1) {
    currentIndex = 0;
  }
  mainContent.style.animation = "moveLeft 2s";
  setTimeout(() => {
    loadMainContent();
    mainContent.style.animation = "";
  }, 500);
}

function backwardButton() {
  const mainContent = document.getElementById("main-content");
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = Object.keys(portfolioDictionary).length - 1;
  }
  mainContent.style.animation = "moveLeft 2s";
  setTimeout(() => {
    loadMainContent();
    mainContent.style.animation = "";
  }, 500);
}

function displayPortfolio() {
  if (isMobileDevice()) {
    const forwardButton = document.getElementById("next-slide-button");
    forwardButton.style.transform = 'scale(1)';
    const backButton = document.getElementById("back-slide-button");
    backButton.style.transform = 'scale(1)';
    const headerSize = document.getElementById("header");
    headerSize.style.height = '30vh';
    const headerText = document.getElementById("header-text");
    headerText.style.fontSize = '0vh';
    const mainID = document.getElementById("main");
    mainID.style.height = '50vh';
  } else {
    const forwardButton = document.getElementById("next-slide-button");
    forwardButton.style.transform = 'scale(1)';
    const backButton = document.getElementById("back-slide-button");
    backButton.style.transform = 'scale(1)';
    const headerSize = document.getElementById("header");
    headerSize.style.height = '30vh';
    const headerText = document.getElementById("header-text");
    headerText.style.fontSize = '10vh';
    const mainID = document.getElementById("main");
    mainID.style.height = '50vh';
  }
  loadMainContent();
}

function displayContactMenu() {
  const headerSize = document.getElementById("header");
  headerSize.style.height = '30vh';
  const headerText = document.getElementById("header-text");
  headerText.style.fontSize = '10vh';
  loadContactMenu();
}

function loadContactMenu() {
  const mainContent = document.getElementById("main-content");
  const backButton = document.getElementById("back-slide-button");
  backButton.style.transform = 'scale(0)';
  const forwardButton = document.getElementById("next-slide-button");
  forwardButton.style.transform = 'scale(0)';
  const homeButton = document.getElementById("back-to-home");
  homeButton.style.opacity = 1;
  const headerOptions = document.getElementById("header-options-button");
  headerOptions.style.transform = 'scale(0)';
  const headerOptions2 = document.getElementById("header-options-button2");
  headerOptions2.style.transform = 'scale(0)';
  if (isMobileDevice()) {
    const mainID = document.getElementById("main");
    mainID.style.height = '50vh';
  }
  if (isMobileDevice()) {
    const headerSize = document.getElementById("header");
    headerSize.style.height = '30vh';
    const headerText = document.getElementById("header-text");
    headerText.style.fontSize = '0vh';
    const mainID = document.getElementById("main");
    mainID.style.height = '50vh';
  } else {
    const headerSize = document.getElementById("header");
    headerSize.style.height = '30vh';
    const headerText = document.getElementById("header-text");
    headerText.style.fontSize = '10vh';
  }

  const newSlide = document.createElement("div");
  newSlide.innerHTML = `
  <div class="above-img">
  <form id="maincontentdivform">
      <h1>get a quote</h1>
      <input id="name-box" placeholder="name" type="entry" required>
      <input id="email-box" placeholder="email" type="email" required>
      <input id="message-box" placeholder="message" type="entry" required>
      <button type="submit" required>submit</button>
  </form>
  <block id="contactform-text-block">
      <a target="_blank" href="https://www.instagram.com/ihawp1"><img id="cftb-img" draggable="false" src="instagram.png"></img></a>
      <a target="_blank" href="https://youtube.com/ihawp"><img id="cftb-img" draggable="false" src="youtube.png"></img></a>
      <a target="_blank" href="https://github.com/ihawp"><img id="cftb-img" draggable="false" src="github.png"></img></a>
      <a href="mailto:ihawp@ihawp.com"><img id="cftb-img" draggable="false" src="email.png"></img></a>
  </block>
  </div> 
`;
  newSlide.style.backgroundColor = 'rgb(0,0,0,0.63)';
  // Clear the current content of the mainContent div
  mainContent.innerHTML = "";

  // Append the new slide to the mainContent div
  mainContent.appendChild(newSlide);
}

function returnHomeButton() {
  const headerSize = document.getElementById("header");
  headerSize.style.height = '100vh';
  const headerText = document.getElementById("header-text");
  headerText.style.fontSize = '11vh';
  const homeButton = document.getElementById("back-to-home");
  homeButton.style.opacity = 0;
  const headerOptions3 = document.getElementById("header-options-button");
  headerOptions3.style.transform = 'scale(0)';
  const headerOptions4 = document.getElementById("header-options-button2");
  headerOptions4.style.transform = 'scale(0)';
  setTimeout(() => {
      const headerOptions = document.getElementById("header-options-button");
      headerOptions.style.opacity = '1';
      const headerOptions2 = document.getElementById("header-options-button2");
      headerOptions2.style.opacity = '1';
      const headerOptions3 = document.getElementById("header-options-button");
      headerOptions3.style.transform = 'scale(1)';
      const headerOptions4 = document.getElementById("header-options-button2");
      headerOptions4.style.transform = 'scale(1)';
      if (isMobileDevice()) {
        const forwardButton = document.getElementById("next-slide-button");
        forwardButton.style.transform = 'scale(0)';
        const backButton = document.getElementById("back-slide-button");
        backButton.style.transform = 'scale(0)';
        const mainID = document.getElementById("main");
        mainID.style.height = '70vh';
      } else {
        const forwardButton = document.getElementById("next-slide-button");
        forwardButton.style.transform = 'scale(1)';
        const backButton = document.getElementById("back-slide-button");
        backButton.style.transform = 'scale(1)';
      }
    }, 500);
}

function isMobileDevice() {
  const mediaQuery = window.matchMedia('(pointer: coarse)');
  return mediaQuery.matches;
}