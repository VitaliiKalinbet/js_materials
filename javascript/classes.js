// . Что такое ООП и в чем разница с процедурным программированием ?
​
// . Какие основые понятия есть в ООП?
​
// . Что такое классы? Зачем они нужны?
​
// . Что такое объект (или экземпляр класса)?
// . Что такое интерфейс класса?
​
// . Какая форма записи классов в ES5 и ES6?
//
// ES5
//  const Hero = function(name='adf', xp=0) {
//   this.name = name;
//   this.xp = xp;
// };
​
// Hero.prototype.gainXp = function(amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };
​
// const hero = new Hero('sdfs',50);
// console.dir(hero);
​
// const Warrior = function(name, xp, weapon) {
//   Hero.call(this, name, xp);
//   this.weapon = weapon;
// };
// Warrior.prototype = Hero.prototype;
​
// Warrior.prototype = Object.create(Hero.prototype);
// // Warrior.prototype.constructor = Warrior;
​
// Warrior.prototype.attack = function() {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };
​
// const poly = new Warrior('Poly', 200, 'sword');
// console.dir(poly);
​
{
} // ES6
​
class Hero {
  constructor(name = "unknown artist", xp = 0, abc) {
    this._name = name;
    this._xp = xp;
    this.abc = abc;
  }
​
  get name() {
    return this._name;
  }
  get xp() {
    return this._xp;
  }
​
  set name(newName) {
    return (this._name = newName);
  }
​
  set xp(amount) {
    this._xp += amount;
  }
​
  gainXp(amount) {
    console.log(`${this.name} gained ${amount} experience points`);
    this.xp += amount;
  }
}
​
class Warrior extends Hero {
  constructor(name, xp, abc, weapon = "fingers", mood = 0) {
    super(name, xp, abc);
    this.weapon = weapon;
    this.mood = mood;
  }
​
​
​
  easyTouchAttack(attackArea = "breast", target = "her") {
    console.log(
      `${this.name} used his ${this.weapon} to ${target} ${attackArea} and gained 100xp`
    );
    super.gainXp(100);
    this.xp += 100;
    this.mood += 1;
  }
}
​
const hero = new Hero();
hero.name = "Some";
console.dir(hero);
​
const warrior = new Warrior("Tarzan", 0, 'qwerty', "Knife", 10);
console.dir(warrior);
// warrior.gainXp(500);
warrior.easyTouchAttack();
console.log(warrior);
​
// . Что такое свойства классa,  и как применяются?
// . Что такое методы класса, и как применяются?
// . Что такое статические свойства, и как они пременяются?
​
// . Что такое this? Как он используется ? Как он применяется в классах и вне классов?
//
// 9 - Значение контекста внутри функции определятся не в момент ее создания,
// а в момент вызова. То есть значение this определяется тем, как вызывается функция,
// а не где она была объявлена.
​
// . Что такое конструктор класса и зачем он нужен?
​
// . Как использовать наследование классов и зачем нужны ключевые слова extend и super ?
​
{
  // ... еще ?
  //  . Что такое инкапсуляция в классах ?
  //  . Что такое абстракция в классах ?
  //  . Что такое полиморфизм?
  // . Что такое функции конструкторы в ES5 (подкапотная классов)?
  // . Какой синтаксис функций конструкторов ?
  // . Как добавлять свойства и методы функциям конструкторам ?
  // . Как прописывать и добавлять статические свойста функциям конструкторам ?
}
