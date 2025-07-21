// Day 7 – Prototypes & Inheritance Practice Challenges

// 🧪 Challenge 1: Constructor function and prototype method
function Car(make) {
  this.make = make;
}
Car.prototype.honk = function () {
  console.log(this.make + " says Beep!");
};
const myCar = new Car("Honda");
myCar.honk(); // Honda says Beep!

// 🧪 Challenge 2: Object.create() and prototype chain
const animal = {
  speak() {
    console.log("Animal sound");
  },
};
const dog = Object.create(animal);
dog.name = "Tommy";
dog.speak(); // Animal sound

// 🧪 Challenge 3: Property shadowing
const bird = { canFly: true };
const penguin = Object.create(bird);
penguin.canFly = false;
console.log(penguin.canFly); // false
console.log(bird.canFly);    // true

// 🧪 Challenge 4: __proto__ and instanceof
function Human() {}
const h1 = new Human();
console.log(h1.__proto__ === Human.prototype); // true
console.log(h1 instanceof Human);              // true

// 🧪 Challenge 5: Fix broken constructor link
function A() {}
function B() {}
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;
const b = new B();
console.log(b.constructor === B); // true
console.log(b instanceof A);      // true

// 🧪 Challenge 6: Arrow vs Regular Method in prototype
function Player(name) {
  this.name = name;
}
Player.prototype.sayHi = () => {
  console.log("Hi", this.name); // ❌ Won't work as expected
};
const p = new Player("Ash");
p.sayHi(); // Hi undefined

// 🧪 Challenge 7: Rewrite above with regular function
Player.prototype.sayHi = function () {
  console.log("Hi", this.name); // ✅ Works
};
p.sayHi(); // Hi Ash

// ✅ Add more of your own if needed below: