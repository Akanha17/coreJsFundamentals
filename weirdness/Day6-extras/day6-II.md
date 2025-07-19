## Wellcome to Extra part of Day 6 😎



**1. call() - Call a function with a custom this**

```js
function greet(age) {
  console.log(`Hi, I'm ${this.name} and I'm ${age}`);
}
const person = { name: "Ashirvad" };

greet.call(person, 25); 
// Hi, I'm Ashirvad and I'm 25
```

- Arguments passed one by one

- immediately invokes the function



**2. apply() - Same as call, but arguments in an array**  ( same same but different 👋🏻)

```js
greet.apply(person, [25]); 
// Hi, I'm Ashirvad and I'm 25
```

- mostly useful when arguments come as arrays (eg: Math.max.apply( null, arr ))



**3. bind() - Creates a copy of the function with locked this**

```js
const boundGreet = greet.bind(person);
boundGreet(25);
// Hi, I'm Ashirvad and I'm 25
```

- returns a **new function**

- doesn't call it immediately

- great for event handlers, timeouts, react class methods



**4. Function Borrowing - Reuse a method in another object**

```js
const obj1 = { name: "Kanha", greet() { console.log(this.name); } }
const obj2 = { name: "Radha" };


obj1.greet.call(obj2); // Radha
```



**5. Using with Arrays (real tricks 😏)**

```js
const nums = [1,2,3];
console.log(Math.max.apply(null, nums)); // 3
```

Or use spread (modern JS):

```js
console.log(Math.max(...nums)); // 3
```



**6. Priority Order**

```js
const obj = {
    name: "Ashirvad",
    greet(){
        console.log(this.name)
    }
};

const g = obj.greet
g(); // undefined
g.call(obj); //Ash
```
