## Data types in JS



- There are 7 primitive data types
  
  1. number
  
  2. string
  
  3. boolean
  
  4. null
  
  5. undefined
  
  6. symbol
  
  7. bigint



### 1. Number

```js
let x = 10;
let y = 3.5;
let sum = x + y;
let div = x / 0; // Infinity

console.log(sum);     // 13.5
console.log(div);     // Infinity
console.log("NaN example:", "hello" / 2); // NaN (Not a Number)
```

note: JS numbers have only one type which is floating point (64-bit IEEE format)

NaN is a special number value and still is a number

use Number.isNaN(value) to check

### 2. String

```js
let single = 'Hero';
let double = "JS";
let template = `${single} ${double} Rocks!`;

console.log(single, double, template);

// Operations

console.log("Hero".length);      // 4
console.log("Hero".toUpperCase()); // "HERO"
console.log("JS" + " Rocks!");     // Concatenation
console.log(`${5 + 5} is Ten`);    // Template literal interpolation
```

### 3. Booleans

```js
let isHero = true;
let isVillain = false;

console.log(isHero && isVillain); // false
console.log(isHero || isVillain); // true
console.log(!isHero);             // false
```

### 4. Null

```js
let life = null;
console.log(typeof life); // "object" (JS bug from 1995)
```

Means you intentionally set a variable to nothing

### 5. Undefined

```js
let mystery;
console.log(mystery);        // undefined
console.log(typeof mystery); // "undefined"
```

### 6. Symbol (ES2020+)

```js
const heroId = Symbol("id");
const anotherHeroId = Symbol("id");
console.log(heroId === anotherHeroId); // false
```

Symbols are unique even if they have the same description. Used mostly for object property keys in advanced code.

### 7. Bigint (ES2020+)

```js
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber + 2n); // Works fine
```

allows safely represent integers beyond 2^53 -1.



> A quick mini workout to do
> 
> write a js code to show console.log(`Value: ${x}, Type: ${typeof x}`);
