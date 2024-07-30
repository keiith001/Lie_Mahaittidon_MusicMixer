// JS Outline
/* 
1: Access Points
2: Functions 
- Drag and Drop
- Close Window (mute feature)
- Close Windows (mute all)
- Switcher (theme changer)
- Lightbox Controllers
- Burger Menu
3: Events
*/

// 1: Access Points
const pickPc = document.querySelectorAll(".pick");
const dropPc = document.querySelectorAll(".dropzone");
const lSound = document.querySelector("#l-sound");
const cSound = document.querySelector("#c-sound");
const rSound = document.querySelector("#r-sound");
const tChange = document.querySelector("#clockButton");
const frameL = document.querySelector("#frame-l");
const frameC = document.querySelector("#frame-c");
const frameR = document.querySelector("#frame-r");
const frameLH = document.querySelector("#frame-l-half");
const frameCH = document.querySelector("#frame-c-half");
const frameRH = document.querySelector("#frame-r-half");
const deco = document.querySelectorAll(".deco");
const howtouse = document.querySelector("#howtouse");
const credit = document.querySelector("#credit");
const menuButton = document.querySelector("#site");

let draggedPiece;

// 2: Functions

// Drag and Drop Functions
function startedDragging() {
  draggedPiece = this;
}

function draggedOVer(e) {
  console.log("dragging over dropZone");
  e.preventDefault();
}

function dropped(e) {
  e.preventDefault();

  if (draggedPiece) {
    draggedPiece.classList.toggle("hidden", true);
  }

  const dropzone = e.target;
  switch (dropzone.id) {
    case "dropbox-l":
      frameL.classList.toggle("hidden");
      lSound.play();
      lSound.volume = 1;
      break;
    case "dropbox-l-half":
      frameLH.classList.toggle("hidden");
      lSound.play();
      lSound.volume = 0.5;
      break;
    case "dropbox-c":
      frameC.classList.toggle("hidden");
      cSound.play();
      cSound.volume = 1;
      break;
    case "dropbox-c-half":
      frameCH.classList.toggle("hidden");
      cSound.play();
      cSound.volume = 0.5;
      break;
    case "dropbox-r":
      frameR.classList.toggle("hidden");
      rSound.play();
      rSound.volume = 1;
      break;
    case "dropbox-r-half":
      frameRH.classList.toggle("hidden");
      rSound.play();
      rSound.volume = 0.5;
      break;
  }

  draggedPiece = null;
}

// Close Window (mute feature)
function closeWindow(e) {
  const aWindow = e.target;
  switch (aWindow.id) {
    case "dropbox-l":
      frameL.classList.add("hidden");
      frameLH.classList.add("hidden");
      document.querySelector("#pick-win-l").classList.remove("hidden");
      lSound.pause();
      break;
    case "dropbox-l-half":
      frameL.classList.add("hidden");
      frameLH.classList.add("hidden");
      document.querySelector("#pick-win-l").classList.remove("hidden");
      lSound.pause();
      break;
    case "dropbox-c":
      frameC.classList.add("hidden");
      frameCH.classList.add("hidden");
      document.querySelector("#pick-win-c").classList.remove("hidden");
      cSound.pause();
      break;
    case "dropbox-c-half":
      frameC.classList.add("hidden");
      frameCH.classList.add("hidden");
      document.querySelector("#pick-win-c").classList.remove("hidden");
      cSound.pause();
      break;
    case "dropbox-r":
      frameR.classList.add("hidden");
      frameRH.classList.add("hidden");
      document.querySelector("#pick-win-r").classList.remove("hidden");
      rSound.pause();
      break;
    case "dropbox-r-half":
      frameR.classList.add("hidden");
      frameRH.classList.add("hidden");
      document.querySelector("#pick-win-r").classList.remove("hidden");
      rSound.pause();
      break;
  }
}

// Close Windows (mute all)
function closeAllWindows() {
  frameL.classList.add("hidden");
  frameLH.classList.add("hidden");
  document.querySelector("#pick-win-l").classList.remove("hidden");
  lSound.pause();

  frameC.classList.add("hidden");
  frameCH.classList.add("hidden");
  document.querySelector("#pick-win-c").classList.remove("hidden");
  cSound.pause();

  frameR.classList.add("hidden");
  frameRH.classList.add("hidden");
  document.querySelector("#pick-win-r").classList.remove("hidden");
  rSound.pause();
}

// Switcher (theme changer)
function timeChange() {
  closeAllWindows();
  if (lSound.src.includes("sound/l-day.wav")) {
    lSound.src = "sound/l-night.wav";
    cSound.src = "sound/c-night.wav";
    rSound.src = "sound/r-night.wav";
    document.querySelector("#leftWall").style.backgroundImage =
      "url(./images/gif/nightL.gif)";
    document.querySelector("#rightWall").style.backgroundImage =
      "url(./images/gif/nightR.gif)";
    document.querySelector("#middleWall").style.backgroundImage =
      "url(./images/gif/nightM.gif)";
    deco.forEach((element) => {
      element.classList.add("darkmode");
    });
  } else {
    lSound.src = "sound/l-day.wav";
    cSound.src = "sound/c-day.wav";
    rSound.src = "sound/r-day.wav";
    document.querySelector("#leftWall").style.backgroundImage =
      "url(./images/gif/dayL.gif)";
    document.querySelector("#rightWall").style.backgroundImage =
      "url(./images/gif/dayR.gif)";
    document.querySelector("#middleWall").style.backgroundImage =
      "url(./images/gif/dayM.gif)";
    deco.forEach((element) => {
      element.classList.remove("darkmode");
    });
  }
}

// Lightbox Controllers
function showHowToUse() {
  document.querySelector("#lightBox").classList.toggle("hidden");
  if (!document.querySelector("#lightBoxCredit").classList.contains("hidden")) {
    document.querySelector("#lightBoxCredit").classList.add("hidden");
  }
}

function showCredit() {
  document.querySelector("#lightBoxCredit").classList.toggle("hidden");
  if (!document.querySelector("#lightBox").classList.contains("hidden")) {
    document.querySelector("#lightBox").classList.add("hidden");
  }
}

// Burger Menu
function openMenu() {
  const linkElement = document.querySelector("#link");
  if (
    linkElement.style.display === "none" ||
    linkElement.style.display === ""
  ) {
    linkElement.style.display = "block";
  } else {
    linkElement.style.display = "none";
    document.querySelector("#lightBox").classList.add("hidden");
    document.querySelector("#lightBoxCredit").classList.add("hidden");
  }
}

// 3: Events

tChange.addEventListener("click", timeChange);

pickPc.forEach((piece) => {
  piece.addEventListener("dragstart", startedDragging);
});

dropPc.forEach((drop) => {
  drop.addEventListener("dragover", draggedOVer);
  drop.addEventListener("drop", dropped);
  drop.addEventListener("click", closeWindow);
});

howtouse.addEventListener("click", showHowToUse);
credit.addEventListener("click", showCredit);
menuButton.addEventListener("click", openMenu);
