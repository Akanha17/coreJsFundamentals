## Start of Async + Internals Phase

### Event loop & concurrency:



- What is the Call Stack ?

```js
function one(){
    two()
}
function two(){
    console.log('hello')
}
one() // adds `one()` to the stack -> then `two()` -> then logs -> then pops

```

it is **LIFO**(last in, first out)

when the stack is empty, JavaScipt can run **async callbacks**



- What are Web APIs ?

 when we call things like:

1.  setTimeout(...)

2. fetch(...)

3. addEventListener(...)



these are not handled by the JS engine directly - they're handled by **WebAPIs (provided by browser or Node)**

-> the result or callback from these is sent to a **queue**, waiting to be pushed to the stack later.



- Queues: Microtask vs Macrotask

There are two types of async queues

| **Queue** | **Goes hrer**                          | **priority** |
| --------- | -------------------------------------- | ------------ |
| Microtask | .then, .catch, await, queueMicrotask() | High         |
| Macrotask | setTimeout(), setInterval, events      | Low          |

-> ⚠️ Micortasks always get processed before macrotask



- The Event Loop ( How Everything Runs )
  
  > WHILE (true):
  > 
  >     if Call Stack is empty:
  > 
  >     - Run all Microtask
  > 
  >     - Take one Macrotask ( from callback queue )
  > 
  >     - Repeat



So even a setTimeout(fn, 0) will wait for

1. Call Stack to clear

2. All Microtasks to complete



**Quick Understanding Check**

```js
console.log('A');
setTimeout(()=> console.log('B'), 0);
Promise.resolve().then(()=> console.log("C"));
console.log("D")
```

guess the output 👆🏻


