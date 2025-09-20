## Object internals and cloning



### 1. How JS Objects work internally

- all Js objects are stored in **heap memory**

- when you assign a object to a variable , you are assigning a reference of it not a copy

```js
const obj1 = {a: 1};
const obj2 = obj1

obj2.a = 54;
console.log(obj1.a) // 54 same object in memory
```



### 2. Object copying ( shallow vs deep)

**<u>Shallow</u>:**

Only top level properties are copied - nested references are still shared

```js
const original = { a: 1, nested: { b: 2 } };
const shallow = Object.assign({}, original);

shallow.nested.b = 99;
console.log(original.nested.b); // 99 — still affected!
```

- use when you are working with flat/simple objects & don't mind inner objects being shared



**<u>deep:</u>**

All levels of the object are copied - changes to one object won't affect other

```js
const original = { a: 1, nested: { b: 2 } };
const deep = JSON.parse(JSON.stringify(original));

deep.nested.b = 99;
console.log(original.nested.b); // 2 — unaffected
```

Limitations: JSON methods **don't handle**

1. Functions

2. undefined values

3. Date, Map, Set, RegExp

4. circular references

### 3. Cloning Techniques

| method                          | type    | notes                                    |
| ------------------------------- | ------- | ---------------------------------------- |
| Object.assign({}, object)       | shallow | only top level copied                    |
| JSON.parse(JSON.stringify(obj)) | deep    | easy but loses methods, special values   |
| structuredClone(obj)            | deep    | Handles more cases, modern browsers only |
| Manual recursion                | deep    | full control, complex                    |
| Lodash cloneDeep(obj)           | deep    | reliable for production                  |



### 4. Structured Clone

```js
const obj = { a: 1, nested: { b: 2 } };
const copy = structuredClone(obj);

copy.nested.b = 99;
console.log(obj.nested.b); // 2
```

**<u>supports</u>:**

1. circular references

2. Dates, RegExps

3. Map, Set, Arrays

4.  **note:** not supported in Nodejs < 17



### 5. common cloning pitfalls

1. cloning doesn't copy method, function ( especially via JSON )

2. cloning a class instance removes it's prototype - becomes plain object

3. DOM nodes need .cloneNode()

4. shallow copy creates bug in shared nested objects

5. cloning large copy is memory expansive

# [jump to day9](../Day9/day9.md)
# [jump to day11](../Day11/day11.md)
