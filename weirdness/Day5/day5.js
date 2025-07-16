// ==== Challenge 1: Basic Closure Counter ====
function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counterA = createCounter();
counterA(); // 1
counterA(); // 2


// ==== Challenge 2: Closure for Data Privacy ====
function secretVault() {
  let secret = "hidden";
  return {
    getSecret: () => secret,
    setSecret: val => secret = val
  };
}
const vault = secretVault();
console.log(vault.getSecret()); // "hidden"
vault.setSecret("classified");
console.log(vault.getSecret()); // "classified"


// ==== Challenge 3: Closure in a Loop with var ====
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var loop:", i), 100);
}
// Output: 3, 3, 3


// ==== Challenge 4: Closure in a Loop with let (fix) ====
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("let loop:", i), 100);
}
// Output: 0, 1, 2


// ==== Challenge 5: makeAdder Factory ====
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add5(2));  // 7
console.log(add10(2)); // 12


// ==== Challenge 6: Return Function From Function ====
function greetMaker(name) {
  return function () {
    console.log(`Hello, ${name}`);
  };
}
const greetAsh = greetMaker("Ashirvad");
greetAsh(); // "Hello, Ashirvad"


// ==== Challenge 7: Closure Trap (Shadowing) ====
let outer = "global";
function shadowDemo() {
  let outer = "local";
  return function () {
    console.log(outer); // "local"
  };
}
const shout = shadowDemo();
shout();