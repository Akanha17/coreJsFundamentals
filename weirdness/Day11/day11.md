# Arrays Deep Dive



### concepts to be covered:

1. Array Internals ( how JS arrays really work )

2. Common Array traps ( delete, holes, length quirks )

3. Must know methods ( map, filter, reduce, find, some, every )

4. Mutating vs Non-mutating methods

5. Itreation ( for...of, .forEach(), .entries())

6. Advanced tricks ( flat, slice vs splice, spread vs concat )



## Array Under The Hood

- Arrays in JS are really **objects with numeric keys**

```js
const arr = [10,20,30];
console.log(typeof arr); // "object"
```

Internally:

```js
{
    0: 10,
    1: 20,
    3: 30,
    length: 3
}
```

## Array Quirks

```js
const arr = [10,20,30];
delete arr[1];

console.log(arr); // [10, <empty>, 30]
console.log(arr.length); // 3 
```

- <u>delete</u> doesn't shrink array, it just creates a **hole**

```js
const arr = [1,2,3];
arr.length = 1;
console.log(arr) // [1]
```

- modifying .length directly truncates the array



## Must-know Array Methods

| Method    | mutates ? | Example                       | Output       |
|:--------- | --------- | ----------------------------- |:------------ |
| .map()    | No        | [1,2,3].map(e=>e*2)           | [2,4,6]      |
| .filter() | No        | [1,2,3].filter(e=>e>1)        | [2,3]        |
| .reduce() | No        | [1,2,3].reduce((a,b)=> a+b,0) | 6            |
| .find()   | No        | [1,2,3].find(a=>a>1)          | 2            |
| .some()   | No        | [1,2,3].some(s=>s>2)          | true         |
| .push()   | Yes       | [1,2,3].push('hi')            | [1,2,3,'hi'] |
| .pop()    | Yes       | [1,2,3,'remove'].pop()        | [1,2,3]      |
| .shift()  | Yes       | [1,2,3].shift()               | [2,3]        |
| .unshift  | Yes       | [1,2,3].unshift(0)            | [0,1,2,3]    |



## Slice vs Splice

```js
const arr = [1,2,3,4];
console.log(arr.slice(1,3)); // [2,3] (non-mutating)
console.log(arr.splice(1,2)); // [2,3] (mutates original)
```



## Flattening Arrays

```js
const arr = [1, [2, [3, 4]]];
console.log(arr.flat());       // [1, 2, [3,4]]
console.log(arr.flat(2));      // [1, 2, 3, 4]
```



## Spread vs Concat

```js
const a = [1,2];
const b = [3,4];

console.log([...a, ...b]);   // [1,2,3,4]
console.log(a.concat(b));    // [1,2,3,4]
```


# [jump to day10](../Day10/day10.md)