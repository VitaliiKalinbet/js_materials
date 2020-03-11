const programmer = {
  name: "Petya",
  writeCode(language) {
    console.log(this);
    console.log("write on " + language);
  }
};

// Первая возможность вызвать метод в контексте объекта
// programmer.writeCode();
const programmer2 = {
  name: "Vasya"
};

// call, apply, bind
// console.log(programmer.writeCode);

// call
// programmer.writeCode.call(programmer2, "js");

// apply
// programmer.writeCode.apply(programmer2, ["python"]);

// bind
const newWriteCode = programmer.writeCode.bind(programmer2, "java");
newWriteCode();

// const newWriteCode2 = newWriteCode.bind(programmer, "c#");
// newWriteCode2();
