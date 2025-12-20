## LocalStorage & SessionStorage

This is real browser JS, used in:

- auth flows

- themes

- carts

- drafts

- user preferences

## 1. What is web storage ?

Web storage lets you store key-value data in browser

Two types:

- localStorage

- sessionStorage

Both store **strings only**

## 2. localStorage

- Persists even after browser is closed

- Shared across tabs (same origin)

```js
localStorage.setItem("name", "Ashi");
localStorage.getItem("name");
```

## 3. Remove & Clear

```js
localStorage.removeItem("name");
localStorage.clear();
```

## 4. sessionStorage

- Exists only for the current tab

- Cleared when tab is closed

```js
sessionStorage.setItem("token", "abc123");
sessionStorage.getItem("token");
```

## 5. localStorage vs SessionStorage

| Features           | localStorage | sessionStorage |
| ------------------ | ------------ | -------------- |
| Llifetime          | permanent    | tab session    |
| Shared across tabs | yes          | no             |
| Storage limit      | ~5MB         | ~5MB           |

## 6. Storing Objects (Important)

Storage stores **strings only**

Wrong:

```js
localStorage.setItem("user", { name: "Aishi" })
```

Correct:

```js
localStorage.setItem("user", JSON.stringify({ name: "Aishi" }));
```

Retrieve:

```js
const user = JSON.parse(localStorage.getItem('user'))
```

## 7. Checking if Data Exists

```js
const theme = localStorage.getItem("theme");
if (theme) {
    applyTheme(theme)
}
```

## 8. Real-World Example (theme persistence)

```js
function setTheme(theme){
    document.body.className = theme;
    localStorage.setItem("theme", theme);
}
setItem("dark");
```

On reload:

```js
const saved = localStorage.getItem("theme")
if (saved) setTheme(saved)
```

## 9. Storage Events (Advanced)

```js
window.addEventListener("storage", (e) => {
    console.log(e.key, e.newValue)
})
```

Fires only in other tabs, not the same tab.

## 10. Common mistakes

- forgetting JSON parse

- storing sensitive data (password, tokens)

- assuming storage is secure

- using storage as a database

## 11. When Not to use storage

- sensitive auth data

- large datasets

- temporary UI state

Use cookies/ server/ memory instead.

# 
