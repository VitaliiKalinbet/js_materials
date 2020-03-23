function deepEqual() {
  // ...
}

let obj = { a: 1, b: "22", c: 3, d: { e: 4, f: true } };
let obj2 = { a: 1, b: "22", c: 3, d: { e: 4, f: false } };

function deepCopy() {
  // ...
}

let obj = { a: 1, b: "22", c: 3, d: { e: 4, f: true } };

console.log("init", obj);
console.log("deepCopy", deepCopy(obj));
