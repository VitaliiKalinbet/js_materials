"use strict";

// function writeCode(language) {
//   console.log(this);
//   console.log("write on " + language);
// }

// const writeCode = language => {
//   console.log(this);
//   console.log("write on " + language);
// };

// writeCode.call({ name: "Petro" }, "js");

//2 пример того как стрелка берет родительский контекст
function foo() {
  const writeCode = language => {
    console.log(this);
    console.log("write on " + language);
  };
  writeCode("js");
}

foo.call({ name: "Ivan" });
