## welcome to Scope & Execution Context

### the following topics will get covered here

- **Scope types**: *global, function, block*
- **Ececution context**: what actually happens when JS runs code
- **Scope chain**: how variables are resolved

> closure sneak peek (teaser for Day 5)



**what is scope:**

The region in code where a *vairable can be accessed*

| **Type** | **Defined by**    | **Can access ?**      |
| -------- | ----------------- | --------------------- |
| global   | outside all block | everywhere            |
| function | inside a function | only in that function |
| block    | {} with let/const | only in that block    |

**example**

```js
let globalVar = "🌍"
function testScope(){
    let functionVar = "👷"
    if(true){
        let blockVar = "🧱"
        console.log(globalVar, functionVar, blockVar); //All are accessible 
    }
    console.log(blockVar); //not accessible i.e ReferenceError
}

testScope();
```

**Execution context**

JS runs code inside an "execution context".
**what happens when you run JS:**

1.  **Global Execution Context** (GEC) is created

2.  Code is scanned for declaration -> hoisting

3.  Code runs line by line

Every **function call** creates a new execution context with its own memory



**Example**

```js
let x = 10;

function outer() {
  let x = 20;
  function inner() {
    let x = 30;
    console.log(x); // 30
  }
  inner();
}

outer();
console.log(x); // 10
```

- each function has its own scoped x

- inner() prints the nearest x

- global prints the outermost x


> Day5 closures -> when function remembers outer variables even after the outer scope is gone.