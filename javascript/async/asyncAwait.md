### 1. Async/ await

async / await is syntax sugar over Promises.

it lets you write **async code that looks synchronous**.

> Internally: still promises
> 
> Externally: clean & readable

### 2. async Function

as async function always returns a Promise.

```js
async function foo(){
    return 10;
}
foo().then(console.log); // 10
```

Even though we returned 10, JS wraps it in a promise.

### 3. await

await **pauses execution inside async function**

until the Promise resolves.

```js
function delay(){
    return new Promise( resolve => {
        setTimeout(() => resolve("Done"), 1000 );
    } );
}
async function run(){
    const result = await delay();
    console.log(result);
}
run();
```

await only works inside async functions

### 4. async/await vs then()

**Promise chain:**

```js
fetchData()
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
```

**async/await**

```js
async function load(){
    try{
        const res = await fetchData();
        const data = await res.json();
        console.log(data);
    }catch (err){
        console.log(err);
    }
}
```

cleaner. More readable. Interviews love this

### 5. Error handling with try/catch

```js
async function test(){
    try {
        throw new Error('Oops');
    } catch(e){
        console.log(e.message);
    }
}
```

try/ catch  handles rejected Promises when using await

### 6. Multiple Awaits (Sequential)

```js
async function seq() {
    const a = await task1();
    const b = await task2();
    console.log(a, b);
}
```

Runs **one after another** (slower if independent)

### 7. Parallel execution with Promise.all

```js
async function parallel(){
    const [a, b] = await Promise.all([
           task1();
           task2();
    ]);
    console.log(a, b);
}
```

Faster and best practice for independent async tasks

### 8. async functions & event loop

- await pauses **only that function**

- JS thread is **not blocked**

- Other code continues running

```js
async function demo(){
    console.log("A");
    await Promise.resolve();
    console.log("B");
}
console.log("C");
demo();
console.log("D");
```

> C
> 
> A
> 
> D
> 
> B

### 9. await with non-Promise values

```js
async function test() {
    const x = await 5;
    console.log(x);
}
```

Output:

> 5

JS converts it to Promise.resolve(5);

### 10. Common mistakes

- using await outside function

- forgetting try/catch

- using await sequentially when parallel is better

- thinking await blocks whole JS thread (it doesn't)

### 11. Real-world example (Fake API)

```js
function getUser(){
    return new Prmoise(res => {
        setTimeout(()=> res({name: "Aishi"}), 1000);       
    })
}
async function showUser(){
    const user = await getUser();
    console.log(user.name)
}
showUser();
```
