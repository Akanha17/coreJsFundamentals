## Fetch API & Error handling

## 1. fetch()

fetch() is a browser API to make **HTTP requests** (GET, POST, etc.)

it **returns a Promise** that resolves to a **Response Object**.

```js
fetch("https://api.example.com/data")
```

## 2. Basic GET request

```js
fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
```

Flow:

- fetch -> Promise

- res.json() -> Promise

- data available

## 3. Fetch with async / await (BEST PRACTICE)

```js
async function loadData() {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
}
loadData();
```

Cleaner, readable & interview friendly

## 4. The BIG Fetch Gotcha (Important)

**fetch doesn't reject on HTTP errors (404, 500)**

```js
const res = await fetch(url);
console.log(res.ok); // false for 404
console.log(res.status) // 404
```

Only rejects on:

- network failure

- CORS issues

## 5. Proper Error handling pattern

```js
async function loadData(){
    try {
        const res = await fetch(url);
        if(!res.ok){
            throw new Error(`HTTP error ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
    }catch (err) {
        console.error("Failed:" err.message);
    }
}
```

## 6. POST request example

```js
fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "Aishi",
        age: 24
    })
})
```

## 7. Fetch response methods

```js
res.json() // JSON response
res.text() // plain text
res.blob() // files
```

You can call **only one of them**

## 8. Handling errors in UI

```js
loadingEl.innerText = "loading...";
const data = await fetchData();
loadingEl.innerText = "";
```

## 9. Handling errors in UI

```js
error.El.innerText = "Something went wrong";
```

Never leaves users guessing

## 10. mistakes

- forgetting await res.json()

- assuming fetch rejects on 404

- no try/catch

- updating DOM before data arrives

## 11. Real Example (public API)

```js
async function getUser(){
    const res = await("https://jsonplaceholder.typicode.com/users/1");
    const data = await res.json();
    console.log(data.name);
}

getUser()
```

> Note: fetch -> Response -> check ok -> parse -> use data


