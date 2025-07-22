## The power and pain of this



what is **this** ? I mean this -> "this" keyword 😅

> In JavaScript, *this* keyword that refers to **execution context** of the current function.
> 
> But its value is not based on where it's written - it's based on how it's called



### 1. **this in the Global Scope**

```js
console.log(this)
```

- In the **browser**, this refers to the window object.

- In **Node.js**, this in a file-level script refers to {} (an empty object) - not the global object

**2. this inside Functions**

```js
function sayHi(){
    console.log(this)
}
sayHi();
```

- in **non-strict mode**, this inside a regular function still points to window (in browser).

- in **strict mode** ('use strict'), this becomes undefined

**3. this inside Objects (Object Methods)**

```js
const person = {
    name: "Ashirvad",
    greet(){
        console.log("Hi, I am", this.name)
    }
};
person.greet(); // Hi, I am Ashirvad
```

- this referes to the object calling the method

**4. this in Arrow Functions**

```js
const obj ={
    value: 42,
    getValue: () => { console.log(this.value) };
};
obj.getValue(); // undefined
```

- **Arrow Functions do NOT have their own this**, they inherit this from lexical (outer) scope

**5. this in setTimeout**

```js
const obj = {
    count: 10,
    start(){
        setTimeout(function () {
            console.log(this.count); // undefined or error
        }, 1000)
    }
};
obj.start();
```

- this inside **setTimeout** points to window (in browser) or global - not to obj

**6. How Arrow Function Fix That**

```js
const obj = {
  count: 10,
  start() {
    setTimeout(() => {
      console.log(this.count); // 10
    }, 1000);
  }
};
obj.start();
```

- Because arrow functions **don’t bind their own this**, it keeps pointing to obj.

**7. this with bind, call and apply**

| **Method** | **Description**                          |
| ---------- | ---------------------------------------- |
| bind       | returns a new function with this set     |
| call       | calls function immediately, passing this |
| apply      | like call, but takes arguments as array  |

```js
function greet() {
  console.log("Hi", this.name);
}

const person = { name: "Ashirvad" };

greet.call(person);   // Hi Ashirvad
greet.apply(person);  // Hi Ashirvad
const bound = greet.bind(person);
bound();              // Hi Ashirvad
```

**8. Class Methods Losing Context**

```js
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
    console.log(this.count);
  }
}

const c = new Counter();
const inc = c.increment;
inc(); // undefined or error
```

> this is lost when detached from its object.
> 
> you fix it with: 1. Arrow function inside class 2. Or .bind(this)


# [jump to extras](../Day6-extras/day6-II.md)
# [jump to day7](../Day7/day7.md)