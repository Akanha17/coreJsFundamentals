## Higher-order functions

- A higher-order function is a function that:
  
  1. takes another function as input
  
  2. or returns a function

map, filter, reduce all take callbacks -> making them higher-order

### map() - transform each element (return NEW array)

```js
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2,3,4]
console.log(nums);    // original unchanged
```

map always returns a new array of SAME LENGTH

### filter() - keep elements that pass a condition

```js
const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens) // [2, 4]
```

filter returns a new array of EQUAL or SMALLER length

### reduce() - accumulate values into ONE result

```js
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10
```

parts:

- acc -> accumulator

- curr -> current element

- 0 -> initial value of accumulator

### More reduce() examples

find maximum

```js
const max = nums.reduce((a,b)=> Math.max(a, b));
```

count occurrences

```js
const chars = ['a', 'b', 'a'];
const count = chars.reduce((acc, c) => {
    acc[c] = (acc[c] || 0) + 1;
    return acc;
}, {});
console.log(count) // { a: 2, b: 1 }
```

flatten array

```js
const arr = [[1,2],[3,4]]
const flat = arr.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat) // [1,2,3,4]
```

### map, filter, reduce chain

```js
const nums = [1, 2, 3, 4, 5];
const result = nums
    .filter(n => n % 2 === 0)
    .map(n => n * 10)
    .reduce((a,b) => a + b, 0);

console.log(result); // 60
```

### Do not mutate array inside map/filter

```js
nums.map(n => nums.push(n*2));
```

keep transformation pure 

(map, filter should not modify original array)

### forEach() vs map()

```js
arr.forEach(fn) // executes fn, returns undefined
arr.map(fn)     // executes fn, returns NEW array
```

### important notes

map -> transform

filter -> select

reduce -> accumulate
