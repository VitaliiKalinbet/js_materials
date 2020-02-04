// // Lexical Environment
// // =========================================
​
// function makeCounter() {
//   let count = 0;
​
//   return function() {
//     return count++;
//   };
// }
// let counterFirst = makeCounter();
// let counterSecond = makeCounter();
// let counterThird = makeCounter();
​
// // console.log(counterFirst());
// // console.log(counterFirst());
​
// // console.log(counterSecond());
// // console.log(counterSecond());
// // console.log(counterSecond());
// // console.log(counterSecond());
​
// console.log(counterThird());
// console.log(counterThird());
// // // // =========================================
// let name1 = "Jonny Bootcamp 17";
​
// function sayHi() {
//   console.log("Hi, " + name1);
// }
​
// name1 = "Peter";
// sayHi();
​
// // =========================================
​
// function studentBC17() {
    
//     return function() {
//         console.log(name);
//     };
// }
​
// let name = "Pythagoras";
// name = "Archimedes";
​
// // create a function
// const study = studentBC17();
​
// // call the function
// study(); // что будет показано? "Pythagoras" (из места создания) или "Archimedes" (из места выполнения)
// // // =========================================
​
// import { name, title } from "./module11_script_copy.js";
// // console.log(name)
// // console.log(title)
// // name = "Archimedes";
// // title = "Greek philosopher";
​
// function greetings(a, b) {
//   function getDescriptions() {
//     return name + " " + title;
//   }
​
//   name = "Archimedes";
//   title = "Greek philosopher";
//   console.log("Hello, " + getDescriptions());
//   console.log("Bye, " + getDescriptions());
// }
// // console.log(name)
// // console.log(title)
// console.log(greetings(name, title));
// // =========================================
​
// // Лексическое окружение в циклах
// for (let i = 0; i < 10; i++) {
//   // У каждого цикла своё собственное лексическое окружение
//   // {i: value}
// }
// console.log(i);
// // // =========================================
// function f(a, b) {
//   const value1 = 123;
//   const value2 = 456;
//   return value1 + value2;
// }
// console.log(f(value1, value2));
// // // =========================================
​
// function f() {
//   let value = Math.random();
// //   console.log(value);
​
//   return function() {
//     console.log(value);
//   };
// }
// // console.log(f());
// // три функции в массиве, каждая из них ссылается на лексическое окружение
// // из соответствующего вызова f()
// function f2() {
//   return f() + f() + f();
// }
// console.log(f2());