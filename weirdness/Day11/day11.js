// Day 11 — Arrays Deep Dive

/* Q1 — Array type check */
const arr1 = [10, 20, 30];
console.log("Q1 typeof:", typeof arr1); // ?

/* Q2 — Delete trap */
const arr2 = [1, 2, 3];
delete arr2[1];
console.log("Q2:", arr2);       // ?
console.log("Q2 length:", arr2.length); // ?

/* Q3 — Length modification */
const arr3 = [1, 2, 3, 4];
arr3.length = 2;
console.log("Q3:", arr3); // ?

/* Q4 — Map vs Filter vs Reduce */
const nums = [1, 2, 3, 4];
console.log("Q4 map:", nums.map(x => x * 2)); // ?
console.log("Q4 filter:", nums.filter(x => x % 2 === 0)); // ?
console.log("Q4 reduce:", nums.reduce((a, b) => a + b, 0)); // ?

/* Q5 — Find, some, every */
const testArr = [1, 2, 3, 4];
console.log("Q5 find:", testArr.find(x => x > 2)); // ?
console.log("Q5 some:", testArr.some(x => x > 5)); // ?
console.log("Q5 every:", testArr.every(x => x > 0)); // ?

/* Q6 — Slice vs Splice */
const arr4 = [1, 2, 3, 4];
console.log("Q6 slice:", arr4.slice(1, 3)); // ?
console.log("Q6 splice:", arr4.splice(1, 2)); // ?
console.log("Q6 after splice:", arr4); // ?

/* Q7 — Flatten */
const nested = [1, [2, [3, 4]]];
console.log("Q7 flat(1):", nested.flat());   // ?
console.log("Q7 flat(2):", nested.flat(2));  // ?

/* Q8 — Spread vs Concat */
const a = [1, 2];
const b = [3, 4];
console.log("Q8 spread:", [...a, ...b]);  // ?
console.log("Q8 concat:", a.concat(b));   // ?

/* Q9 — Practice 1: Remove duplicates */
const dupes = [1, 2, 2, 3, 3, 4];
const noDupes = [...new Set(dupes)];
console.log("Q9:", noDupes); // ?

/* Q10 — Practice 2: Reverse manually */
const arr5 = [1, 2, 3, 4];
const reversed = arr5.reduce((acc, val) => [val, ...acc], []);
console.log("Q10:", reversed); // ?

/* Q11 — Practice 3: Full flatten */
const deepNested = [1, [2, [3, 4]]];
function flatten(arr) {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    []
  );
}
console.log("Q11:", flatten(deepNested)); // ?

/* Q12 — Practice 4: Custom map using reduce */
function customMap(arr, fn) {
  return arr.reduce((acc, val, i) => {
    acc.push(fn(val, i));
    return acc;
  }, []);
}
console.log("Q12:", customMap([1, 2, 3], x => x * 3)); // ?