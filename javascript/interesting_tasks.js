// #1
const x = ["ab"];
function f(arr) {
  arr.push("js");
  arr = undefined;
  console.log("first ", arr);
}
f(x);
console.log("second ", x);
