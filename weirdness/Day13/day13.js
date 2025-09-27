// Day 13 — Error Handling in JavaScript

/* Q1 — ReferenceError vs TypeError */
try {
  console.log(undeclaredVar); // ReferenceError
} catch (err) {
  console.log("Q1 caught:", err.name, "-", err.message);
}

try {
  null.foo(); // TypeError
} catch (err) {
  console.log("Q1 caught:", err.name, "-", err.message);
}

/* Q2 — try...catch...finally */
function risky() {
  throw new Error("Something went wrong!");
}

try {
  risky();
} catch (err) {
  console.log("Q2 catch:", err.message);
} finally {
  console.log("Q2 finally: Always runs");
}

/* Q3 — Throwing custom error */
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero!");
  return a / b;
}
try {
  console.log(divide(10, 0));
} catch (err) {
  console.log("Q3:", err.name, "-", err.message);
}

/* Q4 — Error object details */
try {
  JSON.parse("{bad json}");
} catch (err) {
  console.log("Q4 name:", err.name);
  console.log("Q4 message:", err.message);
  console.log("Q4 stack (short):", err.stack.split("\n")[0]); // only first line
}

/* Q5 — Promises with .catch */
Promise.reject("Q5: Fail")
  .catch(err => console.log("Caught with .catch:", err));

/* Q6 — Async/Await with try/catch */
async function run() {
  try {
    await Promise.reject("Q6: Async fail");
  } catch (err) {
    console.log("Caught with async/await:", err);
  } finally {
    console.log("Q6 finally: Done async");
  }
}
run();

/* Q7 — Async error trap */
try {
  setTimeout(() => {
    throw new Error("Q7: Timeout error");
  }, 0);
} catch (err) {
  console.log("Q7 caught?", err.message);
}
// ❗ Will NOT be caught — runs async outside this try/catch

/* Q8 — Custom Error Class */
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
try {
  throw new ValidationError("Invalid input!");
} catch (err) {
  console.log("Q8:", err.name, "-", err.message);
}

/* Q9 — Safe JSON Parse */
function safeJSONParse(str) {
  try {
    return JSON.parse(str);
  } catch (err) {
    return { error: err.message };
  }
}
console.log("Q9 good:", safeJSONParse('{"ok":true}'));
console.log("Q9 bad:", safeJSONParse("{oops}"));

/* Q10 — Catch vs Finally return trap */
function tricky() {
  try {
    throw new Error("oops");
  } catch (e) {
    return "from catch";
  } finally {
    return "from finally"; // overrides catch return
  }
}
console.log("Q10:", tricky()); // ?

