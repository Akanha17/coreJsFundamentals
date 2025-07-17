
// Day 6 - Challenge: Mastering `this`, Arrow Functions, Context Traps

/* Challenge 1: Context Loss with Regular Function */
const hero = {
  power: 99,
  getPower() {
    return this.power;
  }
};
const fetchPower = hero.getPower;
console.log(fetchPower()); // Expected: undefined

/* Challenge 2: Arrow vs Regular Function in Object */
const ninja = {
  name: "Hanzo",
  shuriken: () => this.name,
  katana() {
    return this.name;
  }
};
console.log(ninja.shuriken()); // Expected: undefined
console.log(ninja.katana());   // Expected: Hanzo

/* Challenge 3: Arrow vs Regular in setTimeout */
const tracker = {
  id: 42,
  start: function () {
    setTimeout(function () {
      console.log("Regular:", this.id); // Expected: undefined
    }, 500);

    setTimeout(() => {
      console.log("Arrow:", this.id);   // Expected: 42
    }, 500);
  }
};
tracker.start();

/* Challenge 4: Detached Class Method */
class Warrior {
  constructor(name) {
    this.name = name;
  }

  intro() {
    console.log(`I am ${this.name}`);
  }
}
const w = new Warrior("Ashirvad");
const ref = w.intro;
ref(); // Expected: undefined
const bound = w.intro.bind(w);
bound(); // Expected: Ashirvad

/* Challenge 5: Arrow in Constructor */
function Person(name) {
  this.name = name;

  this.sayHi = () => {
    console.log("Hi from", this.name);
  };
}
const p1 = new Person("Ashirvad");
const p2 = { sayHi: p1.sayHi };
p2.sayHi(); // Expected: Hi from Ashirvad
