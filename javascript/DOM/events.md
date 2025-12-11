## Events & Event listeners

## 1. Event:

An event = something that happens in the browser:

- user clicks a button

- user types in an input

- form submitted

- page loaded

- mouse moved

- key pressed

JS lets you listen and respond to these events



### 2. Inline event (not recommended)

```html
<button onclick="alert('clicked!')">Click</button>
```

Hard to maintain -> avoid this method

### 3. DOM property event handler

```js
const btn = document.getElementById('btn');
btn.click = function () {
    console.log("button clicked");
}
```

**! Warning** : assigning onclick = ... overwrites existing handlers

### 4. addEventListener ( Best practice )

```js
btn.addEventListener('click', () => {
    console.log('cliq');
});
```

Supports:

- multiple listeners on same event

- advanced options

- cleaner structure

### 5. Common Events

click event

```js
btn.addEventListener('click', ()=> console.log('clicked'))
```

input event (fires everytime you type)

```js
input.addEventListener('input', e => console.log(e.target.value)); 
```

change event (fires when user leaves input)

```js
input.addEventListener('change', e=> console.log('changed'));
```

submit event

```js
form.addEventListener('submit', e=> {
    e.preventDefault(); // stop refresh
    console.log('Form Submitted')
} )
```

keydown/keyup

```js
document.addEventListener('keydown', e=> console.log(e.key))
```

### 6. Event object (e)

the event callback receives an object

```js
btn.addEventListener('click', function (e) {
    console.log(e.target); // the clicked element
    console.log(e.type); // 'click'
})
```

### 7. Removing event listener

```js
function sayHi(){
    console.log('Hi');
}
btn.addEventListener('click', sayHi);
btn.removeEventListener('click', sayHi);
```

Note: You must use the same function reference to remove it

### 8. Event bubbling (default behaviour)

```html
<div id = 'outer'>
<button id="inner"> Click Me </button>
</div>
```

```js
document.getElementById('outer').addEventListener('click', () => console.log('OUTER'))
document.getElementByid('inner').addEventListener('click', () => console.log('INNER'))
```

> INNER
> 
> OUTER

### 9. Event capturing (rarely used)

Reverse direction: outer -> inner

```js
btn.addEventListener('click', fn, {capture:true});
```

### 10. Event delegation (very important)

```html
<ul id='list'>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>
```

```js
document.getElementById('list').addEventListener('click', e=>{
    if(e.target.tagName === 'LI'){
        console.log('Clicked:' e.target.textContent);
    }
})
```

WHY USE IT ?

- fewer listeners

- works for dynamically added items

### 11. Small example project (button counter)

```html
<button id='btn'>Click</button>
<p id='count'>0</p>
```

```js
let counter = 0;
const btn = document.getElementById('btn');
const count = document.getElementById('count');
btn.addEventListener('click', () => {
    counter ++;
    count.innerText = counter;
});
```


