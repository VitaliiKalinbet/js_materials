const abc: string = "Hello world";

console.log(abc);

const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
let int2: number = 345;
int2 = 54;

const float: number = 4.2;
const num: number = 3e10;

const message = "Hello typescript";

const numberArr: number[] = [1, 1, 2, 3, 5, 6, 13];
// generic запись:
const numberArr2: Array<number> = [1, 1, 2, 3, 5, 6, 13];

const words: string[] = ["Hello", "typescript"];

// Tuple - массив из разных типов данных
const contact: [string, number] = ["Vitalii", 234244];

// Any - любой тип данных
let variable: any = 43;
// ...
variable = "fdf";

// Functions
// void - значит ничего не вернет функция
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("Ababgalamaga");

// Never - 1) когда функция возвращает ошибку и никогда не заканчивает свое выполнение   2) либо когда она постоянно что либо делает
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {
    console.log("work infinite");
  }
}

// Type
type Login = string;

const login: Login = "admin";
// const login2: Login = 2; - ошибка

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";
// const id3: ID = true; - ошибка

type someType = string | null | undefined;
