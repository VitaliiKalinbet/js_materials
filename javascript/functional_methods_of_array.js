const arr = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909
  }
];

// Example 1 start
// arr.forEach(el => {
//   const name = el.first === "Marie" ? (el.first = "Bob") : el.first;
//   console.log(name);
// });
// console.log(arr);
// arr.forEach((el, indx, arr) =>
//   console.log(el.first === "Marie" ? (el.first = "Bob") : el.first)
// );
// console.log(arr);
// const newArr = arr.map((el, indx, arr) => {
//   console.log(el.first === "Marie" ? (el.first = "Bob") : el.first);
//   return el;
// });
// Example 1 end

// Example 2 start (Пример того как каждый функциональный массив может пол ссылке мутировать свои элементы и элементы )
// const newArr = arr.map(el =>
// el.first === "Marie" ? { ...el, first: "Bob" } : el
// );
// // console.log(newArr);
// // console.log(arr);
// newArr[0].first = "Mark";
// console.log(newArr);
// console.log(arr);
// console.log(newArr[0] === arr[0]);
// console.log(newArr === arr);
// Example 2 end

// Example 3 start (Вывести массив фамилий ученых)
// const newArr = arr.map(el => el.last);
// const newArr = arr.map(el => {
//   const x = el.last;
//   console.log(x);
//   return x;
// });
// const newArr = arr.map(function(el, indx, arr) {
//   return el.last;
// });
// console.log(newArr);
// Example 3 end

// Example 4 start (Добавить в новый массив объекты всех ученых и под ключем firstName вывести имя, под ключем lastName фамилию, кроме этих объектов в массиве не должно быть ничего)
// const newArr = arr.map(el => ({ firstName: el.first, lastName: el.last }));
// console.log(newArr);
// Example 4 end

// Example 5 start (Узнать, все ли ученые родились позднее 1500 года - результат правда или нет)
// const newArr = arr.every(el => el.year >= 1500);
// console.log(newArr);
// Example 5 end

// Example 6 start (Узнать, есть ли ученые родившиеся в 17 столетии - результат правда или нет)
// const newArr = arr.some(el => 1599 < el.year < 1700);
// console.log(newArr);
// Example 6 end

// Example 7 start (Вывести массив имен ученых которые родились в 19 столетии)
// const newArr = arr
//   .filter(el => el.year >= 1800 && el.year < 1900)
//   .map(el => el.first);
// console.log(newArr);
// Example 7 end

// Example 8 start
// const newArr = arr.find(el => el.first === "Albert");
// console.log(newArr);
// Example 8 end

// Example 9 start (Вывести сумму лет жизни всех ученых)
// const x = arr.reduce(function(acc, el, indx, arr) {
//   return acc + (el.passed - el.year);
// }, 0);
// console.log(x);
// Example 9 end

// Example 10 start ()
// Создать объект
// const obj = arr.reduce(
//   (acc, el, indx, arr) => ({
//     sumBornYear: acc.sumBornYear + el.year,
//     sumPasssedYear: acc.sumPasssedYear + el.passed,
//     sumAllYear: acc.sumAllYear + el.year + el.passed
//   }),
//   {
//     sumBornYear: 0,
//     sumPasssedYear: 0,
//     sumAllYear: 0
//   }
// );
// console.log(obj);

// const initialAcc = {
//     sumBornYear: 0,
//     sumPasssedYear: 0,
//     sumAllYear: 0
//   };
//   const obj = arr.reduce(
//     (acc, el, indx, arr) => ({
//       sumBornYear: acc.sumBornYear + el.year,
//       sumPasssedYear: acc.sumPasssedYear + el.passed,
//       sumAllYear: acc.sumAllYear + el.year + el.passed
//     }),
//     initialAcc
//   );
//   console.log(obj);
// Example 10 start

// 1. Создать новый массив объектов всех ученых и под ключем firstName вывести имя, под ключем lastName фамилию, кроме этих объектов в массиве не должно быть ничего
// const newArr = arr.map(item => ({
//   firstName: item.first,
//   lastName: item.last
// }));
// console.log(newArr);

// 2. Узнать, все ли ученые родились позднее 1500 года включительно - результат правда или нет
// const x = arr.every(el => el.year >= 1500);
// console.log("x :", x);

// 3. Вывести сумму лет жизни всех ученых

// 4. Узнать, есть ли ученые родившиеся в 17 столетии - результат правда или нет
// console.log(arr.some(arr => arr.year >= 1600 && arr.year < 1700));

// Создать объект,
// {
//      sumBornYear: 0,
//      sumPasssedYear: 0,
// }
// sumBornYear - сумма всех годов рождений всех ученых
// sumPasssedYear - сумма всех годов смерти всех ученых
// const x = arr.reduce(
//   (acc, el) => ({
//     sumBornYear: acc.sumBornYear + el.year,
//     sumPasssedYear: acc.sumPasssedYear + el.passed,
//     allSumYear: acc.allSumYear + el.year + el.passed
//   }), {
//     sumBornYear: 0,
//     sumPasssedYear: 0,
//     allSumYear: 0
//   }
// );
// console.log(x);

// 1) отримати масив вчених що народилися в 19 ст
// 2) знайти суму років скільки прожили всі вченні
// 3) Відсортувати вчених по алфавіту
// 4) Відсортувати вчених по даті народження
// 5) Відсортувати вчених по кількості прожитих років
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
// 7) Знайти вченого який народився найпізніше.
// 8) Знайти рік народження Albert Einstein
// 9) Знайти вчених прізвище яких починається на літеру С
// 10) Видалити з масива всіх вчених імя яких починається на A
