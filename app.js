//Status Bars
let hunger = document.querySelector(".hunger");
let boredom = document.querySelector(".boredom");
let sleepiness = document.querySelector(".sleepiness");
let age = document.querySelector(".age");
//Buttons
let feedBtn = document.querySelector(".feed");
let boredBtn = document.querySelector(".play");
let sleepBtn = document.querySelector(".lights");
let startBtn = document.querySelector(".start");

//Starting Status
let hungerStatus = 10;
let lightStatus = 10;
let boredStatus = 10;
let ageStatus = 1;

function feedMe() {
  if (hungerStatus > 0) {
    setInterval(() => {
      hunger.innerHTML = `Hunger: ${hungerStatus--}`;
    }, 2000);
  } else {
    console.log("You Lost");
  }
}

function playWith() {
  const playTimer = setInterval(() => {
    boredom.innerHTML = `Boredom: ${boredStatus--}`;
  }, 2000);
}

function lightSwitch() {
  const sleepTimer = setInterval(() => {
    sleepiness.innerHTML = `Sleepiness: ${lightStatus--}`;
  }, 2000);
}

function aging() {
  const ageTimer = setInterval(() => {
    age.innerHTML = `Age: ${ageStatus++}`;
  }, 10000);
}

startBtn.addEventListener("click", () => {
  feedMe();
  playWith();
  lightSwitch();
  aging();
});

feedBtn.addEventListener("click", () => {
  hungerStatus = 10;
});
sleepBtn.addEventListener("click", () => {
  lightStatus = 10;
});
boredBtn.addEventListener("click", () => {
  boredStatus = 10;
});
