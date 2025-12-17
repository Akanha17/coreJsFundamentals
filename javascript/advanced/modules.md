## 1. Existance of module

before modules:

- everything in one file

- global scope pollution

- name conflicts

- unreadable code

Module solve:

- separation of concerns

- reusability

- maintainability

## 2. What is a module ?

a **module** is just a JS file that:

- has its own scope

- explicitly exports things

- explicitly imports things

## 3. Exporting from a file

math.js

```js
export const add = (a, b) => a + b
export const sub = (a, b) => a - b
```

Each export is named

## 4. Importing named exports

main.js

```js
import {add, sub} from './math.js'
console.log(add(2,3));
```

Names must match exactly.

## 5. Renamining imports (very common)

```js
import { add as sum } from './math.js'
sum(2,3)
```

## 6. Default export (one per file)

user.js

```js
export default function greet(){
    console.log("Hello");
}
```

import:

```js
import greet from './user.js'
```

Name is your choice.

## 7. Named + default together

```js
export default class User {}
export const ROLE = "admin"
```

Import:

```js
import User, { ROLE } from "./user.js"
```

## 8. Import everything (* as)

```js
import * as math from "./math.js";

math.add(1, 2);
math.sub(3, 1);
```

## 9. Module scope (Important)

```js
// a.js
const secret = 123;
export const x = 10;
```

```js
// b.js
import { x } from './a.js';
console.log(secret); // error
```

Each module has its own scope

## 10. Browser gotcha

in browser HTML:

```html
<script type = 'module' src = 'main.js'></script>
```

Without type = "module" -> imports won't work.

## 11. Circular imports (Interview topic)

```kts
// a.js imports b.js
// b.js imports a.js
```

JS handles this, but:

- values may be undefined temporarily

- avoid if possible

## 12. Modules vs scripts (Key difference)

> script: Glocal scope, no Import/export, loaded immediately
> 
> module: file scope, import/export, deferred by default

## 13. Real-world example (Frontend)

```js
export async function getUsers(){
    const res = await fetch("/users");
    return res.json();
}
```

```js
// app.js
import { getUsers } from './api.js'
```


