### Functions - IIFE, Rest, Default Parameters

## IIFE ( Immediately Invoked Function Expression ):

- A function that **rusn immediately when defined**. Useful for **private scope** and avoiding global pollution

```js
(function(){
    console.log('Hi there');
})();
```

**with params**

```js
(function (name){
    console.log(`Hello, ${name}`);
} )('Ashirvad');
```

**<u>Note:</u>**

- Creates a private scope

- Variables inside **don't pullute the global scope**

## Rest Parameters(...) :

- Rest parameters allow a function to accept **any number of arguments** as an array

```js
function sum(...numbers){
    return numbers.reduce((acc,curr)=> acc + curr, 0);
}

console.log(sum(5,10,15,12)); // 50
console.log(sum(1,2,3)); // 6
```

**<u>Note:</u>**

- Must be last parameter in function definition

- captures all the remaining arguments

A tricky Example:

```js
function greet(greeting, ...names){
    console.log(greeting, names.join(', '));
}
greet('Hello','Ashirvad','Mishra', 'JS') // Hello Ashirvad, Mishra, JS
```

## Default Parameters :

- You can give function parameters **default values** if they are not provided.

```js
function greet(name = "Guest") {
    console.log(`Hello, ${name}`);
}

greet("Ashirvad"); // Hello, Ashirvad
greet();           // Hello, Guest
```

```js
function multiply(a, b = 2) {
    return a * b;
}

console.log(multiply(5, 3)); // 15
console.log(multiply(5));    // 10 (b defaults to 2)
```

Rest + default

```js
function buildName(firstName = "John", ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}

console.log(buildName("Ashirvad", "Mishra", "JS")); 
// Ashirvad Mishra JS
console.log(buildName()); 
// John 
```

## Practical Use Case : IIFE+Default+Rest

```js
(function(msg = "Hi", ...names){
    names.forEach(name => console.log(`${msg}, ${name}!`));
})("Hello", "Ashirvad", "Mishra");
// Output:
// Hello, Ashirvad!
// Hello, Mishra!
```

# [Jump to Day 11](../Day11/day11.md)