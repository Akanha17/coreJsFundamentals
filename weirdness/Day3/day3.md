## Welcome to hoisting which sets js apart from other languages 😂

**Key points to be covered**

- Hositing: What actually gets 'hoisted' and how?
- why ***var*** is undefined but let/const throw errors
- function declaration vs function expression confusion
- TDZ: Temporal Dead Zone

---

### what is hoisting ?

Hoisting = JS moves declaration to the top of their scope before execution.

***But only declaration, not initialization***

- **var**

```javascript
console.log(a);
var a = 5;
```

Internal behaviour:

```javascript
var a;
console.log(a); // undefined
a = 5;
```

note : ***Works with var, function declarations*** not the same for ***let, const, function expression, arrow functions***

- **let/const**

```js
console.log(b); // ReferenceError
let b = 10;
```

**why?**
let and const are hoisted but stay in a **"Temopral Dead Zone (TDZ)"** - a phase where the variables exists but can't be accessed yet.

| **Feature**    | **var**                       | **let/const**             |
| -------------- | ----------------------------- | ------------------------- |
| scope          | function-scoped               | block-scoped              |
| hoisted        | yes (initialized & undefined) | yes, but in TDZ           |
| re-declaration | allowed                       | not allowed in same scope |
| initialization | optional                      | required for <u>const</u> |

- **functions & hoisting**

**function declaration**(Hoisted)

```js
sayHi(); // ✅ works
function sayHi(){
    console.log("Hello");
}
```

**function expression**(Not Hoisted)

```js
sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function(){
    console.log("hi")
}
```

**arrow function**(Same as function expression)

```js
sayHi(); // ❌ TypeError
let sayHi = () => console.log("hi there");
```



---

## some exercises listed below for self practice

```js
//Q1
console.log(x);
var x = 5;

//Q2
console.log(y);
let y = 10;

//Q3
greet();
function greet(){
    console.log("hi kanha😎")
}

//Q4
greet()
var greet = function(){
    console.log("practice you lazy 🤓")
}


//Q5
sayHi()
let sayHi = () =>{
    console.log("strange isn't it")
}
```

# [jump to day4](../Day4/day4.md)
# [jump to day2](../Day2/day2.md)