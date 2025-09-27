## Error Haldling in JavaScript



**<u>Topics :</u>**

1. types of error

2. try...catch...finally

3. Throwing custom error

4. Error objects & name,message,stack

5. Async error handling ( promises, async/await )
   
   

## Types of error:

```js
console.log(x) // reference error
null.foo() // typeError
eval("foo bar") //SyntaxError
new Array(-1); //RangeError
```

## try...catch...finally

```js
try{
    risky();
}catch(err){
    console.log('Caught:' err.message);
}finally{
    console.log("always runs");
}
```

- try -> code that might fail

- catch -> handles error

- finally -> always runs

## Throwing Custom Errors

```js
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero!");
  return a / b;
}

try {
  divide(5, 0);
} catch (e) {
  console.log(e.name);    // Error
  console.log(e.message); // Division by zero!
}
```

## Error Object Properties

Every error has:

- name -> error type

- message -> human-readable msg

- stack -> call trace ( useful for debugging )

## Async Error Handling

- promise .catch

```js
Promise.reject('Fail')
    .catch(err=> console.log('Caught:', err ));
```

- async/await with try/catch

```js
async function run(){
    try {
        await Promise.reject("Fail again");
    }catch (err){
        console.log("Caught:", err)
    }
}
run();
```

# [jump to day 12](../Day12/day12.md)


