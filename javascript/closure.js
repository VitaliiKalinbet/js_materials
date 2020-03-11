"use strict";
let a = 10;

function some() {
  console.log(a);
}

function some2() {
  const a = 5;
  some();
}

a = 15;

some2();

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
  // env: makeCounter
  // Parent: Global
  let count = 0;
  //env: m
  // Parent: Global
  // count

  // [[Env: makeCounter]]
  return function() {
    // env ananim
    // Parent: makeCounter
    return count++; // есть доступ к внешней переменной "count"
  };
}
// let count = 0;
let counter = makeCounter();
// console.log(counter);
// let count = 0;
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
// let count = 0;

let counter2 = makeCounter();
console.log(counter2()); // 0
console.log(counter2()); // 1
console.log(counter2()); // 2
