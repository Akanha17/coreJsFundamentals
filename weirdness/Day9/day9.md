## Callbacks, Promises & async/await

- **The Callback**

-> before promises and async/await, async in JS was done with **callbacks**

```js
function getData(callback) {
  setTimeout(() => {
    callback("🔥 Data received");
  }, 1000);
}

getData(function (result) {
  console.log(result); // 🔥 Data received
});
```

⚠️ The problem? Nesting grows fast:

```js
login(user, (res) => {
  getUserData(res, (data) => {
    processData(data, (processed) => {
      sendResponse(processed);
    });
  });
});
```

☠️ **Callback Hell** or **Pyramid of Doom**

- **Enter Promises**

A promise is a placeholder for a value that may be **available** now, later, or never.

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ Done!");
  }, 1000);
});

p.then((result) => console.log(result)); // ✅ Done!
```

**Promise Lifecycle**

1. **pending** -> initial state

2. **Fulfilled** -> resolve(...)

3. **Rejected** -> reject(...)
- **Promise chaining**

```js
doSomething()
  .then(result => doNext(result))
  .then(next => doFinal(next))
  .catch(error => console.error("💥", error));
```

-> no more nesting

- **Async/await - Promises made readable**

```js
async function fetchData() {
  try {
    const user = await getUser();
    const data = await getUserData(user);
    console.log(data);
  } catch (e) {
    console.error("Something broke:", e);
  }
}
```

-> Makes async look sync, with error handling using try/catch

### **🧠 Common Pitfalls**

| **Mistake**                                  | **Why it happenes** |
| -------------------------------------------- | ------------------- |
| await without async                          | SyntaxError         |
| forgetting return in then()                  | breaks the chain    |
| mixing callbacks + promise                   | anti-pattern        |
| calling multiple .then() on the same promise | can cause confusion |

### **Quick Summary 🧐**

| **concept** | **benefit**               | **syntax style** |
| ----------- | ------------------------- | ---------------- |
| callback    | classic async (low-level) | func(cb)         |
| promise     | handles errors, chaining  | .then() .catch() |
| async/await | clean, readable, powerful | await doStuff()  |


# [jump to day8](../Day8/day8.md)
# [jump to day10](../Day10/day10.md)
