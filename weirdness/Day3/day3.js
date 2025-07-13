// 🔥 Challenge 1: Shadowing with var
var name = "global";
function printName() {
  console.log(name); // undefined (local var hoisted)
  var name = "local";
}
printName();


// 🔥 Challenge 2: Function declaration vs expression hoisting
console.log(typeof fn); // "function"
var fn = function () {
  console.log("I am a function expression");
};
function fn() {
  console.log("I am a function declaration");
}


// 🔥 Challenge 3: TDZ with const
{
//   console.log(a); // ReferenceError
  const a = 10;
}


// 🔥 Challenge 4: Block-scoped function hoisting (non-strict vs strict mode)
{
  greet(); // Works in non-strict mode
  function greet() {
    console.log("Block hoisted!");
  }
}


// 🔥 Challenge 5: Local var shadowing outer var
var a = 1;
function test() {
  console.log(a); // undefined
  var a = 2;
}
test();


// 🔥 Challenge 6: Arrow function vs function declaration
shout(); 

var shout = () => console.log("Arrow shout"); // TypeError: shout is not a function

function shout() {
  console.log("Declared shout");
}