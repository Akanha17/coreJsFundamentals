## Closures

### Topics to be covered

- What closures are
- How functions remember variables after their scope is gone
- Real-world use cases: private variables, factory functions, async traps
- Common interview challenges



**what is clouser?**

> **A closure** is when a function **remembers** the variables form the scope in which it was **created**, even after that scope has finished executing.



**example:**

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer(); // outer is gone!
counter(); // 1
counter(); // 2
```

-> Even though outer() has **finished**, inner() still has access to count.

-> That's a closure - inner holds a reference to count



**example 2**

```js
function secretHolder() {
  let secret = "🕵️";
  return {
    getSecret: () => secret,
    setSecret: s => secret = s
  };
}

const agent = secretHolder();
console.log(agent.getSecret()); // 🕵️
agent.setSecret("🔒");
console.log(agent.getSecret()); // 🔒
```

-> This mimics **private fields** - the outer variable secret is not accessible directly.



**closure trap: loops + var**

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
```

**output**

- 3

- 3

- 3

-> because var is **function scoped**, not block scoped - all callbacks share the same i



fix with let:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

**output**

- 0

- 1

- 2

### now guess the output

```js
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));   // ?
console.log(add10(2));  // ?
```


# [jump to day6](../Day6/day6.md)

