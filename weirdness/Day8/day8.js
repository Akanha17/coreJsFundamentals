// Day 8 – Event Loop & Concurrency: JS Challenges

/* Challenge 1: Microtask vs Macrotask */
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

// Expected Output: A, D, C, B

/* Challenge 2: Event Loop Execution Order */
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 100);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// Expected Output: Start, End, Promise, Timeout

/* Challenge 3: Deep nesting */
setTimeout(() => {
  console.log("setTimeout 1");

  Promise.resolve().then(() => {
    console.log("promise inside timeout");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("promise 1");

  setTimeout(() => {
    console.log("timeout inside promise");
  }, 0);
});

// Expected Output:
// promise 1
// setTimeout 1
// promise inside timeout
// timeout inside promise

/* Challenge 4: Blocking the call stack */
console.log("Blocking begins");

setTimeout(() => {
  console.log("Inside timeout");
}, 0);

for (let i = 0; i < 1000000000; i++) {} // simulate blocking

console.log("Blocking ends");

// Expected Output:
// Blocking begins
// Blocking ends
// Inside timeout
