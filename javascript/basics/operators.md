## Operators

## 1. Arithmetic Operators

+, -, *, /, %, ** are the arithmetic operators which do addition, substraction, multiplication, division, remainder and exponent respectively.



```js
console.log("5" + 2);     // "52"  (string + number => string concatenation)
console.log("5" - 2);     // 3     (string -> number conversion)
console.log(10 / 0);      // Infinity
console.log("hello" * 2); // NaN
```

## 2. Comparision Operators

==, ===, !=, !==, (>,<,>=,<=) are the equality (loose), strict equality, not equal, strict not equal and standard comparisions



```js
console.log(5 == "5");  // true  (type coercion happens)
console.log(5 === "5"); // false (no coercion)

// Coercion 

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log("" == 0); // true
console.log("" === 0); // false

console.log(true == 1); // true
console.log(false == 0); // true
```

## 3. Logical Operators (&&,||,!)

&& AND

```js
console.log(true && false) //false
```

|| OR

```js
console.log(false || 'hero') // hero
```

! NOT

```js
console.log(!true) //false
```

**logic operators return values, not boolean**

```js
console.log("Ash" && 42); // 42
console.log(0 || "fallback"); // "fallback"
```

## 4. Ternary Operator (? :)

shrotcut for if/else

```js
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);
```

Nested ternary ( avoid in production but good to know )

```js
let x = 10;
let type = x > 0 ? "Positive" : x < 0 ? "Negative" : "Zero";
```



## Quirks to know



```js
// arithmetic + string

console.log(1+2+'3') // '33'
console.log("3" + 1+2) // '312'

// boolean conversation
console.log(Boolean("")) // false
console.log(Boolean("0")) // true
console.log(Boolean(0)) // false
console.log(Boolean([])) // true

// crazy interview classics
console.log([]==[]) // false different references
console.log([] == 0) // true
console.log([1]==1) // true
```



> Task to do
> 
> write a small JS to take 2 nuber as input and print sum, difference, product, comparision results (a>b, a==b, a===b), a ternary result


