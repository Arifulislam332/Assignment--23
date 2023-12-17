"use strict";

// convertting numbers
// Decimal to binary,octal,hexadecimal
const decimalNum = 101;
const binaryNum = decimalNum.toString(2);
const octalNum = decimalNum.toString(8);
const hexaNum = decimalNum.toString(16);

// console.log(hexaNum);

// binary to decimal
const binaryStr = "10011";
const binaryToDecimal = parseInt(binaryStr, 2);
// console.log(binaryToDecimal);

// octal to decimal
const octalStr = "67";
const octalToDecimal = parseInt(octalStr, 8);
// console.log(octalToDecimal);

// hexa to decimal
const hexaStr = "809";
const hexaToDecimal = parseInt(hexaStr, 16);
// console.log(hexaToDecimal);

// inInteger()
const num = 1000;

// if (Number.isInteger(num)) {
//   console.log(`${num} is an integer`);
// } else {
//   console.log(`${num} is not integer`);
// }
const num2 = 55.34;

// if (Number.isInteger(num2)) {
//   console.log(`${num2} is an integer`);
// } else {
//   console.log(`${num2} is not integer`);
// }

// NaN --> not a number
const str = "Bangladesh";

// if (isNaN(str)) {
//   console.log(`${str} is not a number.`);
// } else {
//   console.log(`${str} is a number.`);
// }

// parseIn() --> counting  whole number
const width = "350px";
const widthNumber = parseInt(width);
// console.log(widthNumber);

// parseFloat --> counting Fraction number
const hight = "350.567px";
const hightNumber = parseFloat(hight);
// console.log(hightNumber);

//Math
//5^2
// console.log(Math.pow(5, 4));
// console.log(Math.sqrt(5));
// console.log(Math.abs(-45));

const floatNum = 2.86;
// console.log(Math.round(floatNum));
// console.log(Math.ceil(floatNum)); //3
// console.log(Math.floor(floatNum)); //2
// console.log(Math.trunc(floatNum)); //2

// dates
const currntDate = new Date(); //()-->I can accees any date

// console.log(currntDate);
// console.log(currntDate.getDate());//1-31
// console.log(currntDate.getFullYear());
// console.log(currntDate.getMonth()); //0-11
// console.log(currntDate.getDay());
// console.log(currntDate.getHours());
// console.log(currntDate.getMinutes());
// console.log(currntDate.getSeconds());
// console.log(currntDate.getMilliseconds())++)

// const formattedDate = currntDate.toLocaleTimeString();
const formattedDate = currntDate.toLocaleTimeString("bn-BD", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  dayPeriod: "long",
});
// console.log(formattedDate);

// console.log(new Date().getFullYear() - 2004);

const todayDate = new Date();
const upCommingDate = new Date(todayDate.getTime() + 24 * 60 * 60 * 1000);

// console.log(upCommingDate);

const birthDate = new Date("10/04/2004").getTime();
const presentDate = new Date().getTime();
// console.log(presentDate - birthDate) / (365 * 24 * 60 * 60 * 1000);

// setTimeout()
/* function actonTime() {
  console.log("Bangladesh");
}
console.log("Hi!");
setTimeout(actonTime, 2000); //1s = 1000ms
console.log("Iam from..."); */

/* setTimeout(() => {
  const a = 10;
  const b = 34;
  const c = a + b;

  // console.log(c);
}, 5000);
 */
// setInterval()
/* const breakTime = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(breakTime);
}, 10000); */

// p-->clock
/* const clock = document.querySelector(".clock");

function buildClock() {
  const playWithTheGhost = setInterval(() => {
    const time = new Date().toLocaleTimeString("en-BD", {
      dayPeriod: "long",
      hour: "2-digit",
      second: "2-digit",
      minute: "2-digit",
    });
    clock.textContent = time;
  }, 1000);
  stopClock(playWithTheGhost);
}

function stopClock(playWithTheGhost) {
  setTimeout(() => {
    clearInterval(playWithTheGhost);
    clock.textContent = "Happy New Year👻";
    setTimeout(buildClock, 2000);
  }, 5000);
}

buildClock();
 */

// console.log(Math.ceil(Math.random() * 100));

// console.log(Math.floor(Math.random() * 100));

const randomPassGen = (digitlimit) => {
  const genPass =
    "abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$_";

  let pass = "";
  for (let i = 0; i <= digitlimit; i++) {
    pass += genPass[Math.ceil(Math.random() * genPass.length - 1)];
  }
  return pass;
};

console.log(randomPassGen(8));
