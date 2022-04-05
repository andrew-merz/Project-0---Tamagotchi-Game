// let hunger = document.querySelector(".hunger");
// let boredom = document.querySelectorAll(".boredom");
// let sleepiness = document.querySelector(".boredom");

// class Status {
//   constructor(hunger, boredom, sleepiness, age) {
//     this.hunger = 5;
//     this.boredom = 6;
//     this.sleepiness = 7;
//     this.age = age;
//   }
// }
// console.log(this.hunger);

const hungry = {
  feedMe() {
    const foodTimer = setInterval(() => {
      console.log("hi");
    }, 2000);
  },
};
console.log(hungry);
