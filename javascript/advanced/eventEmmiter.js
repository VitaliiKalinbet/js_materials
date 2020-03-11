class eventEmitter {
  constructor() {
    // с помощью Object.create(null) мы создаем объект без прототипа или можем задать кастомный прототип
    this.map = Object.create(null);
  }

  on(event, fn) {
    if (typeof fn === "function") {
      this.map[event] ? this.map[event].push(fn) : (this.map[event] = [fn]);
    } else {
      console.log(
        "вторым параметром должна быть функция, это не функция: ",
        fn
      );
    }
  }

  emit(event) {
    //this.map.hasOwnProperty(event) && this.map[event] - такую проверку ставили бы если не бьло Object.create(null) а был в 4й строке обычный объект, который бы находил toString в цепочке прототипов
    if (this.map[event]) {
      this.map[event].forEach(fn => fn());
    }
  }
}

const eventEmitterNew = new eventEmitter();

eventEmitterNew.on("someEvent", () => console.log("abc"));
eventEmitterNew.on("someEvent", () => console.log("def"));
eventEmitterNew.on("someEvent", "sdfdsf");
// eventEmitterNew.on("toString", () => console.log("hmm"));

eventEmitterNew.emit("someEvent");
// eventEmitterNew.emit("toString");

// Unit test емиттера - 1) запускать методы с конкретнвми аргументами и ожидать конкретные результаты, 2) проверить под нагрузкой эмиттер, дать миллион событий... не будет ли утечек памяти
