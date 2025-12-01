## Functions

- A function is a reusable block of code that performs a specific task



### Function Declaratioin

```js
function greet(){
    console.log('Welcome')
}
greet()
```

- hoisted -> can be called before they appear in the code



### Function Expression

```js
const greet = function (){
    console.log('Welcome from expression')
}

greet()
```

- Not hoisted -> must be defined before calling

- useful for passing functions as values



### Arrow Functions

Modern, shorter syntax

```js
const add = (a,b) => {
    return a + b;
}
console.log(add(2,3))
```

Implicit return( when one line )

```js
const sq = n => n*n
```

- arrow functions do not have their own this

- important for OOP, objects and callbacks

### Parameters & arguments

```js
function multiply(a,b){
    return a*b;
}
console.log(multiply(11,12))
```

### Default parameters

```js
function welcome(name='Akanha'){
    console.log("Welcome "+name);
}
welcome();
welcome('Kid')
```

### Return statement

```js
function area(w, h){
    return w * h // function stops here
    console.log('never executes');
}
console.log(area(5, 3))
```

### Function returning another function

```js
function outer() {
    return function inner() {
        console.log('Inside inner');
    }
}
outer()(); //calling both
```

### Function inside objects

```js
const user = {
    name: "aishi",
    sayHi(){
        console.log("hi " + this.name);
    }
}
user.sayHi();
```

- arrow functions should not be used as object methods:

```js
const obj = {
    name: "Hero",
    hi: () => console.log(this.name) // this = window/global
};
```
