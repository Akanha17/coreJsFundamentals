## Sets, maps & weakmaps

### 1. Why need Sets & Maps ?

Arrays and objects have limitations:

- Arrays allow duplicates

- Objects convert keys to strings

- Objects are not great for frequent add/remove/lookups

Sets & Maps solve these problems cleanly

### 2. Set - Unique values collection

A set stores only unique values.

```js
const s = new Set();
s.add(1);
s.add(2);
s.add(1);
console.log(s) // Set {1, 2}
```

Duplicates are automatically ignored.

### 3. Creating a set from an array

```js
const arr = [1,2,2,3,3,4]
const unique = new Set(arr);

console.log(...unique); [1,2,3,4]
```

Common interview use-case

### 4. Set methods

```js
s.add(5);
s.has(5); // true
s.delete(5);
s.size; // number of items
s.clear()
```

### 5. Iterating a set

```js
for (let value of s){
    console.log(value);
}
```

or

```js
s.forEach(v=> console.log(v))
```

### 6. Use case of Sets

- remove duplicates

- track visited items

- fast lookup (O(1))

- ensure uniqueness

### 7. Map - Key -> Value (Better Object)

A map allows **any type of key**

```js
const m = new Map()
m.set("name", "Aishi");
m.set(1, "Number key");
m.set(true, "boolean key");
```

Objects can't do this safely

### 8. Map vs Object

| Feature     | Object         | Map             |
| ----------- | -------------- | --------------- |
| Key type    | string/ symbol | any             |
| Order       | not guarenteed | insertion order |
| Size        | manual         | .size           |
| Performance | slower         | optimised       |

### 9. Map methods

```js
m.get("name");
m.has("name");
m.delete("name");
m.size;
m.clear();
```

### 10. Iterating a Map

```js
for (let [key, value] of m){
    console.log(key, value);
}
```

### 11. Real usecase for map

```js
const userVisits = new Map()
userVisits.set("aishi", 3);
userVisits.set("future", 5);
```

Much cleaner than objects.

### 12. WeakMap (Advanced, Interview)

WeakMap keys must be objects only

```js
const wm = new WeakMap();
const obj = {};
wm.set(obj, "Secret");
```

### 13. Why weakmap exists ?

- no memory leaks

- keys are weakly referenced

- when object is garbage-collected -> entry removed

Used internally by frameworks.

### 14. limitations

- no .size

- no iteration

- keys must be objects

## 15. Sets vs Map vs WeakMap Summary

| structure | stores        | key type     | iterable |
| --------- | ------------- | ------------ | -------- |
| Set       | unique values | value itself | yes      |
| Map       | key-value     | any          | yes      |
| WeakMap   | key-value     | objects only | no       |
