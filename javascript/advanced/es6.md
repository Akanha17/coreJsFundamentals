## ES6+ (Modern Javascript)

(spread, rest, destructuring, optional chaining & more)

These features makes JS:

- cleaner

- shorter

- safer

- more readable

Interview expect you to recognize and use them naturally.



### 1. Spread Operator (...)

Used to expand values.

Array

```js
const a = [1,2];
const b = [...a, 3, 4]
console.log(b) // [1,2,3,4]
```

Object

```js
const user = { name: "Aishi" };
const updated = { ...user, age: 24 };
```

*Spread is shallow copy.*

### 2. Rest operator (...)

Used to **collect** values.

Function parameters

```js
function sum (...nums){
    return nums.reduce((a, b) => a + b, 0);
}
```

Destructuring

```js
const [a, ...rest] = [1,2,3,4];
// a =1, rest = [2,3,4]
```

### 3. Spread vs rest (Interview trap)

> Spread -> expands, RHS, copy
> 
> Rest -> collects, LHS, group

same syntax different meanig

### 4. Arry destructuring

```js
const arr = [10, 20];
const [x, y] = arr;
```

skip values:

```js
const [a, , c] = [1,2,3]
```

Default values:

```js
const [x = 0] = []
```

### 5. Object destructuring

```js
const user = { name: "Aishi", age: 24 };
const { name, age } = user;
```

Rename:

```js
const { name: username } = user;
```

Defaults:

```js
const { role = "user" } = user;
```

### 6. Destructuring in function params (Real Use)

```js
function greet({ name }){
    console.log(name)
}
```

used heavily in React/ Angular

### 7. Optional chaining (?.)

Prevents runtime errors when accessing deep properties

```js
user?.profil?.email
```

Instead of:

```js
user && user.profile && user.profile.email
```

Massive interview win

### 8. Optional chaining with function

```js
obj.method?.();
```

If method doesn't exist -> no crash.

### 9. Nullish coalescing (??)

Uses fallback only if value is null or undefined

```js
const name = user.name ?? "Guest";
```

Difference vs || :

```js
0 || 10 // 10
0 ?? 10 // 0
```

### 10. Short-circuiting (&&, ||)

```js
isLoggedIn && showDashboard();
```

```js
const name = input || "default";
```

### 11. Arrow function recap

```js
const add = (a, b) => a + b;
```

Important:

- no this

- no argument

### 12. Template literals

```js
`Hello ${name}`
```

Multi-line:

```js
`
Hello
World
`
```

### 13. Real-world example (Clean Code)

```js
function showUser({ name, address }){
    console.log(name ?? "Unknows");
    console.log(address?.city ?? "N/A");
}
```

this is modern JS style
