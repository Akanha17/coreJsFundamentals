### 1. Promise

A promise represents a value that will be available:

- now

- later

- or never

It solves problems of callback hell.

A promise has 3 stages:

1. pending

2. fulfilled (resolved)

3. rejected

### 2. Creating a promise

```js
const p = new Promise((resolve, reject) => {
    const success = true;
    if(success){
        resolve("task done");
    }else{
        reject('task failed');
    }
} );
```

### 3. Consuming a Promise (then/ catch)

```js
p.then( result => {
    console.log(result);
} ).catch(error => {
    console.log(error)
} );
```

### 4. Promise with setTimeout() (Async Example)

```js
const delay = new Promise(resolve => {
    setTimeout( ()=> resolve("Done after 2s"), 2000 );
} );
delay.then(msg => console.log(msg));
```

### 5. Prmoise chaining ( very important )

```js
const p = new Promise(resolve=>resolve(5));

p.then(n=> n*2).then(n=> n+1).then(result => console.log(result)); // 11
```

Each then() returns a **new Promise**

### 6. Handling errors

```js
Promise.reject("Error").then(() => console.log("Won't run"))
.catch(err => console.log(err));
```

Errors propagate down the chain until caught

### 7. finally() (Runs no matter what)

```js
Promise.resolve("OK")
    .finally( ()=> console.log("Cleanup") );
```

### 8. Promoses vs callbacks

> Callbacks => Nested, Hard to read, Hard error handling
> 
> Promises => Flat chaining, cleaner, Centralized .catch()

### 9. Promise.all (Run in Parallel)

```js
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2)
]).then(values => console.log(values)) // [1,2]
```

**if any promise fail** , all fail.

### 10. Promise.race

```js
Promise.race([
    new Promise(res => setTimeout( () => res("A"), 1000 )),
    new Promise(res => setTimeout( () => res("B"), 500 ))
]).then(console.log); // B
```

First settled promise wins

### 11. Promise.allSettled

```js
Promise.allSettled([
    Promise.resolve(1);
    Promise.reject('fali')
]).then(console.log);
```

returns status of all, even failed ones

### 12. Microtask Queue (Important)

- then, catch, finally -> microtask queue

- setTimeout -> callback queue

Micro task run before timeouts

### 13. Converting callbacks -> Promises

```js
function asyncTask(){
    return new Promise(resolve => {
        setTimeout(() => resolve("Done"), 1000 );
    } );
}
```


