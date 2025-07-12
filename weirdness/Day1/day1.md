## Day 1: JavaScript Type Weirdness

### Primitives and Their Types

We start by checking the types of some primitive values:

```javascript
let arr = ['hello', 42, true, undefined, Symbol(), 10n];

for (let elements of arr) {
    console.log(elements, '->', typeof elements);
}
```

**Output:**
- `'hello' -> string`
- `42 -> number`
- `true -> boolean`
- `undefined -> undefined`
- `Symbol() -> symbol`
- `10n -> bigint`

---

### JavaScript "Weirdness"

Some values behave unexpectedly with `typeof`:

```javascript
let weirdos = [null, [], function(){}, NaN];

for (let weird of weirdos) {
    console.log(weird, '->', typeof weird);
}
```

**Output:**
- `null -> object` *(should be null, but returns object)*
- `[] -> object` *(arrays are objects)*
- `function(){} -> function`
- `NaN -> number` *(Not a Number, but type is number)*

---

### Proper Checks for Weird Cases

```javascript
console.log('null is null:', weirdos[0] === null);
console.log('[] is array:', Array.isArray(weirdos[1]));
console.log('NaN is NaN:', Number.isNaN(weirdos[3]));
```

**Output:**
- `null is null: true`
- `[] is array: true`
- `NaN is NaN: true`

---

> **Summary:**  
> JavaScript’s `typeof` operator has some quirks. Always use proper checks for `null`, arrays, and `NaN` to avoid bugs.