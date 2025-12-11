### Numbers & Math

### 1. Numbers in JS

js has only number type -> 64-bit floating point.

```js
const a = 10;
const b = 10.5
```

### 2. Checking type

```js
typeof 10; // number
typeof NaN; // number (yes Not a Number is also a number)
typeof Infinity; // number
```

### 3. Number conversion

Using **Number()**

```js
Number("42"); // 42
Number("Hi"); // NaN
```

**Unary +**

```js
+"100" // 100
```

**parseInt(), parseFloat()**

```js
parseInt('10px'); // 10
parseFloat('5.99'); // 5.99
parseInt('010'); // 10
```

### 4. NaN (Not a Number)

```js
Number("aishi") // NaN
```

- to check:

```js
Number.isNaN(value);
```

NaN != NaN ( weird Js fact but makes sense (as infinity and string are not equal as simple example)

### 5. Infinity

```js
10/0 // Infinity
-10/0 // -Infinity
```

### 6. Floating-Point issues (Important)

```js
0.1 + 0.2; // 0.30000000000000004
```

fix:

```js
+((0.1 + 0.2).toFixed(2)); // 0.3
```

### 7. Math object

- Math.round()

```js
Math.round(4.4) // 4
Math.round(4.6) // 5
```

- Math.floor()

```js
Math.floor(4.9); // 4
```

- Math.ceil()

```js
Math.ceil(4.1); // 5
```

- Math.min()/ Math.max()

```js
Math.max(5,2,9) // 9
Math.min(1,100,10) // 1
```

- Math.random()

Generate number in [0,1)

```js
Math.random(); // 0.12345....
```

  Random integer (1-10);

```js
Math.floor(Math.random() * 10) + 1;
```

### 8. Converting numbers to string

```js
(42).toString(); // '42'
String(42); // '42'
```

### 9. BigInt (for very large numbers)

```js
const big = 12345678901234567890n;
console.log(typeof big) // 'bigint'
```

cannot mix BigInt with normal numbers:

```js
10n + 10; // error
```

### 10. Useful number tricks

check if integer

```js
Number.isInteger(10) // true
```

fixed decimal

```js
(5.678).toFixed(2); // '5.68'
```

scientific notation

```js
1e6; // 1000000
5e-3 // 0.005
```
