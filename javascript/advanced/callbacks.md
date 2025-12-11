### 1. Callback

- A **callback** is a functiion passed into another function to be executed later.

Example:

```js
function greet(name, callback){
    callback(`Hello ${name}`);
}

greet('Aishi', (msg)=> console.log(msg));
```

### 2. Callbacks in setTimeout (Async behaviour)

```js
console.log("Start");
setTimeout(() => {
    console.log("Inside timeout");
}, 2000 );
console.log("End")

```

Output:

> Start
> 
> End
> 
> Inside timeout

because Js doesn't 'sleep' - it continues executing



### 3. Callback Hell

Used when you need tasks to run in sequence, but each in async:

```js
setTimeout(() => {
    console.log('Step 1');
    setTimeout( ()=>{
        console.log('Step 2');
        setTimeout( ()=> {
            console.log('Step 3')
        }, 1000 )
    }, 1000 )
}, 1000 )
```

this becomes

- messy

- unreadable

- hard to debug

### 4. Higher-order functions vs callbacks

Every callback is a function,

but not every function is a callback.

- Example of higher-order function

```js
function doSomething( fn ){
    fn();
}
```

- Example of callback

```js
doSomething( () => console.log('Callback ran!') )
```

### 5. Array methods use callbacks too

- map

- filter

- reduce

- forEach

```js
[1,2,3].map( (n) => n * 2 );
```

### 6. Error-first callbacks (Node.js style)

```js
function loadData(callback) {
    const success = false;
    if (success) callback(null, 'data loaded');
    else callback('Error occured', null);
}
loadData((err, data) => {
    if(err) console.log(err);
    else console.log(data);
} );
```

### 7. Real-life example of callback (button click)

```js
btn.addEventListener('click', () => {
    console.log("button clicked");
}  )
```

the click handler is a callback executed when the user clicks

### 8. Callback vs synchronous code

```js
function sync(){
    console.log('A');
    console.log('B');
}
sync()
```

> A
> 
> B

callback example

```js
console.log('A');
setTimeout(() => console.log("B"), 1000);
console.log('C') 
```

> A
> 
> B
> 
> C

### 9. Event loop concept (basic)

- js runs code line by line

- async tasks go to web apis

- when done, callbacks wait in queue

- event loop pushes them back into call back

### 10. Mini async example

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

console.log("3");
```

> 1
> 
> 3
> 
> 2

Even with 0ms timeout -> callback waits inqueue
