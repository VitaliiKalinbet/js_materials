var abc = "Hello world";
console.log(abc);
var isFetching = true;
var isLoading = false;
var int = 42;
var int2 = 345;
int2 = 54;
var float = 4.2;
var num = 3e10;
var message = "Hello typescript";
var numberArr = [1, 1, 2, 3, 5, 6, 13];
// generic запись:
var numberArr2 = [1, 1, 2, 3, 5, 6, 13];
var words = ["Hello", "typescript"];
// Tuple - массив из разных типов данных
var contact = ["Vitalii", 234244];
// Any - любой тип данных
var variable = 43;
// ...
variable = "fdf";
// Functions
// void - значит ничего не вернет функция
function sayMyName(name) {
    console.log(name);
}
sayMyName("Ababgalamaga");
// Never - 1) когда функция возвращает ошибку и никогда не заканчивает свое выполнение   2) либо когда она постоянно что либо делает
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
        console.log("work infinite");
    }
}
var login = "admin";
var id1 = 1234;
var id2 = "1234";
