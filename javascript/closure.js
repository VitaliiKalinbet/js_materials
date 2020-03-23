"use strict";
// let a = 10;

// function some() {
//   console.log(a);
// }

// function some2() {
//   const a = 5;
//   some();
// }

// a = 15;

// some2();

// // 2

// let a = 10;
// debugger

// function some() {
//     debugger
//   console.log(a);
// }

// function some2() {
// debugger
//   const a = 5;
//   some();
// }

// a = 15;

// some2();

// 3
// [[Env: Global]]

function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

let counter = makeCounter();
console.dir(counter);
