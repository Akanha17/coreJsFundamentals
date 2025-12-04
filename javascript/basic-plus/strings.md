## Strings

- A string is a sequence of characters inside **single quotes(''), double quotes("") and backticks(``)**

```js
const name1 = "aishi";
const name2 = 'Hero';
const name3 = `JS`;
```

## Template literals (backticks)

- multi line strings:

```js
const msg = `
Hello Hero,
welcome to JS!
`;
```

- variable interpolation

```js
const name = "Kanha";
console.log(`Hello ${name}, you are learning JS`);
```

- ecpression interpolation

```js
console.log(`1+2 = ${1+2}`);
```

### Length of a string

```js
console.log("Hero".length) // 4
```

### Accessing characters

```js
const str = "Hero";
console.log(str[0]); // H
console.log(str[3]); // o
```

- strings are immutable -> you can't modify characters

```js
str[0] = 'X'; // does nothing
```

### Common string methods

1. toUpperCase(), toLowerCase()

```js
'H ASH'.toLowerCase() // h ash
'i am good'.toUpperCase() // I AM GOOD
```

2. includes()

```js
'javascript'.includes('script');
```

3. indexOf(), lastIndexOf()

```js
'banana'.indexOf('a');     // 1
'banana'.lastIndexof('a'); // 5
```

4. startsWith(), endsWith()

```js
"HeroJS".startsWith("Hero"); // true
"HeroJS".endsWith("JS"); // true
```

5. slice()

```js
const str = "HelloWorld";
console.log(str.slice(0,5)) // Hello
console.log(str.slice(5)) // World
```

6. substring()

```js
"Hero".substring(0,2); // He
```

Works similarly but doesn't accept negative indices

7. replace()

```js
"JS is great".replace("great", "awesome");
// JS is awesome
```

replaceAll()

```js
"aaabaaa".replaceAll("a","-");
// ---b---
```

8. trim(), trimStart(), trimEnd()

```js
"   Hero   ".trim() // Hero
```

9. split()

```js
"hero-js".split("-"); // ["hero", "js"]
```

### Joining (reverse of split)

```js
['a', 'b', 'c'].join("-");
// "a-b-c"
```

### String -> Number conversions

```js
Number('42') // 42
+'42'; // 42
parseInt('10px'); // 10
```

### Escape characters

```js
"line1\nline2"
"\'quote\'"
"backslash: \\"
```

### String object vs String primitive

```js
const a = "Hero"; // primitive
const b = new String("Hero"); // object
```

Avoid using new String() -> creates wrapper objects.

***IMPORTANT:*** Strings are **IMMUTABLE**
