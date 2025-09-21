// -----------------------------
// Day 12: Functions - IIFE, Rest, Default Parameters
// -----------------------------

// 1. IIFE (Immediately Invoked Function Expression)
(function(name = "Guest") {
    console.log(`Hello from IIFE, ${name}!`);
})("Ashirvad");

// IIFE with rest parameters
(function(msg = "Hi", ...names){
    names.forEach(name => console.log(`${msg}, ${name}!`));
})("Hello", "Ashirvad", "Mishra");

// -----------------------------
// 2. Rest Parameters
// -----------------------------
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3));        // 6
console.log(sum(5, 10, 15, 20));  // 50

function greet(greeting, ...names) {
    console.log(greeting, names.join(", "));
}
greet("Hello", "Ashirvad", "Mishra", "JS"); 
// Output: Hello Ashirvad, Mishra, JS

// -----------------------------
// 3. Default Parameters
// -----------------------------
function greetName(name = "Guest") {
    console.log(`Hello, ${name}`);
}
greetName("Ashirvad"); // Hello, Ashirvad
greetName();           // Hello, Guest

function multiply(a, b = 2) {
    return a * b;
}
console.log(multiply(5, 3)); // 15
console.log(multiply(5));    // 10 (b defaults to 2)

function buildName(firstName = "John", ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
console.log(buildName("Ashirvad", "Mishra", "JS")); // Ashirvad Mishra JS
console.log(buildName());                             // John

// -----------------------------
// 4. Quiz / Challenges
// -----------------------------

// Challenge 1: IIFE + sum of any arguments
(function(...nums) {
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum:", sum);
})(1, 2, 3, 4); // Sum: 10

// Challenge 2: Default parameters prediction
(function(x = 5, y = x + 5) {
    console.log(x, y);
})(undefined, 15); // 5 15

// Challenge 3: Convert 'arguments' to rest + default
function add(...nums) {
    if(nums.length === 0) return 0; // default if no arguments
    return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(add(2, 3, 4)); // 9
console.log(add());        // 0

// Extra tricky: Rest vs arguments
function testArgs(a, b, ...rest) {
    console.log("a:", a, "b:", b, "rest:", rest);
    console.log("arguments object:", arguments);
}
testArgs(1, 2, 3, 4, 5);
// a: 1 b: 2 rest: [3,4,5]
// arguments object: [1,2,3,4,5]