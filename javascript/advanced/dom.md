### DOM selection & manipulation

### 1. What is DOM

The **DOM** (Document Object Model) is a tree-like structure the browser creates from your HTML.

you can 

1. select elements

2. change text

3. change styles

4. create/remove elements

on simpler term JS controlling the webpage

### 2. DOM selector

- getElementById

```js
const title = document.getElementById('main-title');
```

Fast, used for unique elements.



- getElementByClassName (HTML collection)

```js
const items = document.getElementByClassName('item');
```

not an array, but array-like

- getElementByTagname

```js
const divs = document.getElementByTagName('div')
```

###### Modern selectorss (most used)

- querySelector -> returns first matching element

```js
const btn = document.querySelector('.btn');
const title = document.querySelector('#title');
```

- querySelectorAll -> returns NodeList (iterable)

```js
const allItems = document.querySelectorAll('.item');
```

you can iterate using for...of:

```js
for ( const el of allItems ){
    console.log(el);
}
```

### 3. Modifying the DOM

- changing text

```js
element.innerText = "Hello Hero!";
element.textContent = "Hello JS!"
```

innerText -> respects CSS

textContent -> raw text

- changing HTML

```js
element.innerHTML = '<strong>Bold Text</strong>';
```

- changing styles (Inline)

```js
element.style.color = 'red';
element.style.backgroundColor = "black";
```

### 4. Attributes

```js
element.setAttribute('id', 'new-id');
element.getAttribute('class');
element.removeAttribute('disabled');
```

### 5. Creating elements

```js
const div = document.createElement('div');
div.innerText = "New Element";
document.body.appendChild(div);
```

### 6. Removing elements

```js
element.remove();
```

or:

```js
parent.removeChild(child);
```

### 7. Class manipulation

```js
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('dark');
```

### 8. Querying parent/children

```js
element.parentElement
element.children
element.firstElementChild
element.lastElementChild
```

### 9. DOM is live or not?

- getElementByClassName -> live collection (updates automatically)

- querySelectorAll -> static (doesn't auto-update);

### 10. Real Example

HTML:

```html
<h1 id='title'>Hello</h1>
<button id='btn'>Click Me</button>
```

JS:

```js
const title = document.getElementById('title');
const btn = document.getElementById('btn');

btn.onclick = () => {
    title.innerText = 'Button Clicked!';
}
```


