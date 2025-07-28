## Day2 === vs == coercion hell

- 🔒 === strict equality check - no type conversion
- 🤡 == loose equality check - auto type conversion / coercion

### let's begin with 🔒

- no type conversion - **both value and type must match**

```js
console.log(42 === 42)
console.log(42 === '42')
console.log(null === undefined)
```

**output:**

- true

- false

- false

---

### now let's see 🤡

- js will coerce types to compare

- often unpredictable unless you know rules

```js
console.log(42 == '42')
console.log(null == undefined)
console.log(0 == false)
```

**output:**

- true // string converted to number

- true // special case

- true // both become 0

---

## Now let's look into ***Coercion Rules***

| **Case**            | **what happens**                                        |
| ------------------- | ------------------------------------------------------- |
| string == number    | convert string -> number                                |
| boolean == anything | convert boolean -> number (true->1, false ->0)          |
| object == primitive | convert object to primitive via valueOf() or toString() |
| null == undefined   | true ( special rule )                                   |
| NaN == anything     | always false, even NaN == NaN                           |

---

## memorize these Golden rules

| **Expression**     | **Resule** | **Reason**                   |
| ------------------ | ---------- | ---------------------------- |
| null == undefined  | true       | special rule                 |
| null == false      | false      | no coercion to false allowed |
| [] == false        | true       | [] -> "" -> 0 , false -> 0   |
| [0] == false       | true       | [0] ->"0" -> 0, false -> 0   |
| [1] == true        | true       | [1] -> "1" -> 1, true -> 1   |
| undefined == false | false      | No coercion path to match    |

# [jump to day3](../Day3/day3.md)
# [jump to day1](../Day1/day1.md)