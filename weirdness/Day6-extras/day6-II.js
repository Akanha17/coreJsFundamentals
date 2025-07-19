
// Day 6-II: call(), apply(), bind() & Function Borrowing

/* Challenge 1: Basic call() */
function sayHi(age) {
  console.log(`Hi, I'm ${this.name} and I'm ${age}`);
}
const user1 = { name: "Ashirvad" };
sayHi.call(user1, 24); // Expected: Hi, I'm Ashirvad and I'm 24

/* Challenge 2: apply() with array arguments */
sayHi.apply(user1, [25]); // Expected: Hi, I'm Ashirvad and I'm 25

/* Challenge 3: bind() and delayed call */
const boundHi = sayHi.bind(user1);
boundHi(26); // Expected: Hi, I'm Ashirvad and I'm 26

/* Challenge 4: Function borrowing */
const personA = {
  name: "Kanha",
  greet() { console.log("Hello", this.name); }
};
const personB = { name: "Radha" };
personA.greet.call(personB); // Expected: Hello Radha

/* Challenge 5: Losing 'this' context */
const obj = {
  name: "Ash",
  greet() {
    console.log(this.name);
  }
};
const detached = obj.greet;
detached(); // Expected: undefined
detached.call(obj); // Expected: Ash

/* Challenge 6: Using call to find max */
const nums = [3, 7, 2, 9];
console.log(Math.max.apply(null, nums)); // Expected: 9
console.log(Math.max(...nums)); // Expected: 9
