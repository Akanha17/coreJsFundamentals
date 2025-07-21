
# Day 7 – Prototypes & Inheritance

---

## ✅ What is a Prototype?

In JavaScript, every object has an internal property called `[[Prototype]]`, accessible via `.__proto__`.

If a property or method isn't found on the object, JavaScript looks up the prototype chain.

```js
const user = { name: "Ash" };
console.log(user.toString()); // Inherited from Object.prototype
```

---

## ✅ Constructor Functions & Prototypes

When using a constructor function with `new`, the created object's `__proto__` points to the constructor’s `.prototype`.

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const p = new Person("Ash");
p.sayHi(); // Hi, I'm Ash
```

---

## ✅ Inheritance with Prototype Chain

```js
function Animal() {}
Animal.prototype.eat = function() {
  console.log("eating...");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const tommy = new Dog();
tommy.eat(); // eating...
```

---

## ✅ Object.create()

Creates a new object with the specified prototype object.

```js
const base = { greet() { console.log("Hey there!"); } };
const user = Object.create(base);

user.name = "Ash";
user.greet(); // Hey there!
```

---

## ✅ Property Shadowing

If a property exists on both an object and its prototype, the object's version takes precedence.

```js
const animal = { sound: "generic" };
const cat = Object.create(animal);
cat.sound = "meow";

console.log(cat.sound); // meow
```

---

## ✅ Common Pitfalls

- Forgetting to reset `.constructor` after overwriting prototype
- Using arrow functions in prototype methods (bad `this`)
- Mutating built-in prototypes can break everything

---

## 🧠 Summary

- Use `Object.create()` for clean inheritance
- Understand `.prototype` for constructor-based models
- Be cautious with method shadowing and `this` context
