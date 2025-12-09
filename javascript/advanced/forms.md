## Forms and input handling



### 1. Form Handling

- reading user input

- validating it

- preventing page reload

- sending data somewhere (later via api)

Js interacts with forms through events

### 2. Selecting form & inputs

```html
<form if="myForm">
<input id="username" />
<button type="submit">Submit</button>
</form>
```

```js
const form = document.getElementById('myForm')
const username = document.getElementById('username');
```

### 3. Submit event

**Default behaviour of forms:**

Form submits and page reloads (refreshes)

**prevention:**

```js
form.addEventListener('submit', e=>{
    e.preventDefault();
    console.log('Form submitted');
});
```

### 4. Reading input value

```js
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(username.value);
})
```

### 5. Input event (fires whenever user types)

```js
username.addEventListener('input', (e) => {
    console.log('User typed:', e.target.value);
});
```

### 6. Change event (fires when input loses focus)

```js
username.addEventListener('change', e=> {
    console.log("final value:", e.target.value);
});
```

### 7. Basic form validation example

```js
form.addEventListener('submit', e=>{
    e.preventDefault();
    if(username.value.trim()===""){
        console.log("Username required");
    }else{
        console.log("submitted", username.value);
    }
})
```

### 8. Submit with multiple inputs

```html
<form id='login'>
    <input id='email' />
    <input id='password' type='password' />
</form>
```

```js
const form = document.querySelector('#login');
const email = document.querySelector('#email');
const pass = document.querySelector('#password');

form.addEventListener('submit', e=>{
    e.preventDefault();
    console.log('Email:', email.value);
    console.log('Password:', pass.value)
})
```

### 9. Accessing via e.target

cleaner way:

```js
form.addEventListener('submit', e=> {
    e.preventDefault();
    const data = new FormData(form);
    console.log(data.get("email");
});
```

### 10. Showing errors on UI

```js
if(!email.value.includes('@')){
    email.style.border = '2px solid red';
}
```

### 11. Clearing input field

```js
username.value = ""
password.value = ""
```

### 12. Disable button until input valid

```js
button.disabled = true
username.addEventListener('input', () => {
    button.disabled = username.value.trim().length === 0;
} );
```

### 13. Auto-updating text with input

```js
username.addEventListener('input', e => {
    preview.innerText = e.target.value;
} );
```

### 14. Checkbox & radio inputs

```js
checkbox.checked // true/false
radio.value  // selected value
```

### 15. Mini example form

```html
<input id='num1'>
<input id='num2'>
<button id='calc'>Add</button>
<p id='reslut'></p>
```

```js
document.getElementById('calc').addEventListener('click', () => {
    const a = Number(document.getElementById('num1').value);
    const b = Number(document.getElementById('num2').value);
    document.getElementById('result').innerText = a + b
} )
```
