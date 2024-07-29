// 1 : accesses
const pickPc = document.querySelectorAll(".pick");
const dropPc = document.querySelectorAll(".dropzone");
const lSound = document.querySelector("#l-sound");
const cSound = document.querySelector("#c-sound");
const rSound = document.querySelector("#r-sound");
const tChange = document.querySelector("#clockButton");
const frameL = document.querySelector("#frame-l");
const frameC = document.querySelector("#frame-c");
const frameR = document.querySelector("#frame-r");
const deco = document.querySelectorAll(".deco");
const howtouse = document.querySelector("#howtouse");
const credit = document.querySelector("#credit");
const menuButton = document.querySelector("#site");

console.log(deco);

let draggedPiece;

// 2 : function

function startedDragging() {
  draggedPiece = this;
}

function draggedOVer(e) {
  e.preventDefault();
}

function dropped(e) {
  e.preventDefault();

  if (draggedPiece) {
    draggedPiece.classList.toggle("hidden", true);
  }

  const dropzone = e.target;
  if (dropzone.id === "dropbox-l") {
    frameL.classList.toggle("hidden");
    lSound.play();
  } else if (dropzone.id === "dropbox-c") {
    frameC.classList.toggle("hidden");
    cSound.play();
  } else if (dropzone.id === "dropbox-r") {
    frameR.classList.toggle("hidden");
    rSound.play();
  }

  draggedPiece = null;
}

function closeWindow(e) {
  const aWindow = e.target;
  if (aWindow.id === "dropbox-l") {
    frameL.classList.add("hidden");
    document.querySelector("#pick-win-l").classList.remove("hidden");
    lSound.pause();
  } else if (aWindow.id === "dropbox-c") {
    frameC.classList.add("hidden");
    document.querySelector("#pick-win-c").classList.remove("hidden");
    cSound.pause();
  } else if (aWindow.id === "dropbox-r") {
    frameR.classList.add("hidden");
    document.querySelector("#pick-win-r").classList.remove("hidden");
    rSound.pause();
  }
}

function closeAllWindows() {
  frameL.classList.add("hidden");
  document.querySelector("#pick-win-l").classList.remove("hidden");
  lSound.pause();

  frameC.classList.add("hidden");
  document.querySelector("#pick-win-c").classList.remove("hidden");
  cSound.pause();

  frameR.classList.add("hidden");
  document.querySelector("#pick-win-r").classList.remove("hidden");
  rSound.pause();
}

function timeChange() {
  closeAllWindows();
  if (lSound.src.includes("sound/l-day.wav")) {
    lSound.src = "sound/l-night.wav";
    cSound.src = "sound/c-night.wav";
    rSound.src = "sound/r-night.wav";
    document.querySelector("#leftWall").style.backgroundImage =
      "url(../images/gif/nightL.gif)";
    document.querySelector("#rightWall").style.backgroundImage =
      "url(../images/gif/nightR.gif)";
    document.querySelector("#middleWall").style.backgroundImage =
      "url(../images/gif/nightM.gif)";
    deco.forEach((element) => {
      element.classList.add("darkmode");
    });
  } else {
    lSound.src = "sound/l-day.wav";
    cSound.src = "sound/c-day.wav";
    rSound.src = "sound/r-day.wav";
    document.querySelector("#leftWall").style.backgroundImage =
      "url(../images/gif/dayL.gif)";
    document.querySelector("#rightWall").style.backgroundImage =
      "url(../images/gif/dayR.gif)";
    document.querySelector("#middleWall").style.backgroundImage =
      "url(../images/gif/dayM.gif)";
    deco.forEach((element) => {
      element.classList.remove("darkmode");
    });
  }
}

timeChange();

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

// 3 : the events

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
