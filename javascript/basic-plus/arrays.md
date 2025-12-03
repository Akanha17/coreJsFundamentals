## Arrays

- An array is an ordered collection of values, string at index 0

```js
const numbers = [10, 20, 30]
```

Arrays can store mixed types:

```js
const mix = [1, 'ash', true, null]
```

so basically in JS array itself is an object behind the scene



### Accessing array elements

```js
const arr = ['a', 'b', 'c'];
console.log(arr[0]); // a
console.log(arr[2]); // c
console.log(arr[20]); // undefined

// as mentioned eariler it is an object internally we can also access

console.log(arr['2'])

// so this arr = { '0': 'a' } and so on
```

### Updating array elements

```js
const arr = [1,2,3]
arr[1] = 20;
console.log(arr) // [1,20,3]
```

### Array length

```js
const arr = [1,2,3];
console.log(arr.length) // 3
```

### Common array methods (mutating)

push() - add at end

```js
const arr = [1,2]
arr.push(3);
console.log(arr)// [1,2,3]
```

pop() - remove from end

```js
arr.pop() // removes 3
```

unshift() - add at start

```js
arr.unshift(0);
```

shift() - remove from start

```js
arr.shift();
```

### Searching inside arrays

indexOf()

```js
const names = ['ash', 'hero', 'leo'];
console.log(names.indexOf('hero')) // 1
console.log(names.indexOf('kratos')) // -1
```

includes()

```js
names.includes('ash') // true
names.includes('thor') //false
```

### Array.isArray()

```js
console.log(Array.isArray([])) // true
console.log(Array.isArray({})) //false
```

### Looping through arrays

for loop

```js
for (let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}
```

for...of

```js
for (const item of arr){
    console.log(item);
}
```

forEach()

```js
arr.forEach(num => console.log(num))
```

### Spread operator with arrays

copying array (shallow copy)

```js
const a = [1,2,3];
const b = [...a];

b[0] = 100
console.log(a); // [1,2,3]
console.log(b); // [100,2,3]
```

### Mixing arrays & objects

```js
const users = [
    { name: 'Aishi', age: 24 },
    { name: 'Hero', age: 22}
]
console.log(users[1].name) // Hero
```
