// функция принимает строку и возвращает true, false
const checkValidBrackets = expression => {
  let stack = [];
  let map = { "(": ")" };

  for (let i = 0; i < expression.length; i++) {
    if (Object.keys(map).some(key => key === expression[i])) {
      stack.push(expression[i]);
    } else {
      //проверка для букв и пробелов
      if (
        !Object.keys(map).some(
          key => key === expression[i] || map[key] === expression[i]
        )
      ) {
        continue;
      }

      if (map[stack.pop()] !== expression[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(
  ["()", ") ()", "( )(", "(( )", "())", "(())", "()()"].map(checkValidBrackets)
); //[true, false, false, false, false, true, true])

console.log(
  ["({})", "{({)}}", "{} ()", "{()[]}", "{[}]"].map(checkValidBrackets)
); // true, false, true, true, false
