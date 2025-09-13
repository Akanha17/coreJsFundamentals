// Day 10 Challenges — Object Internals & Cloning

// Q1 — Reference behavior
const obj1 = { a: 1 };
const obj2 = obj1;
obj2.a = 42;
console.log("Q1:", obj1.a); // ?

// Q2 — Shallow copy trap
const original1 = { a: 1, nested: { b: 2 } };
const shallowCopy = Object.assign({}, original1);
shallowCopy.nested.b = 99;
console.log("Q2:", original1.nested.b); // ?

// Q3 — Deep copy with JSON (limitations)
const original2 = { a: 1, nested: { b: 2 }, func: () => "hi" };
const deepCopyJSON = JSON.parse(JSON.stringify(original2));
deepCopyJSON.nested.b = 100;
console.log("Q3 nested.b:", original2.nested.b); // ?
console.log("Q3 func:", deepCopyJSON.func); // ?

// Q4 — structuredClone
const original3 = { a: 1, nested: { b: 2 }, date: new Date() };
const deepCloneStructured = structuredClone(original3);
deepCloneStructured.nested.b = 200;
console.log("Q4:", original3.nested.b); // ?

// Q5 — Manual deep copy example
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj);
  if (Array.isArray(obj)) return obj.map(item => deepClone(item));

  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

const original4 = { a: 1, nested: { b: 2, arr: [1, 2, 3] } };
const deepCopyManual = deepClone(original4);
deepCopyManual.nested.arr[0] = 99;
console.log("Q5:", original4.nested.arr[0]); // ?