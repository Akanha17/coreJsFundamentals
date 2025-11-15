## Control Flow

### 1. if/else statements

```js
const age = 20;
if(age >=18){
    console.log("adult");
}else{
    console.log("still a kid");
}
```

**note:** JS treats 0, "", null, undefined, NaN, false as falsy everything else is truthy

```js
if("hero") console.log("truthy"); // runs
if(0) console.log("whatever"); // never runs
```

### 2. Nested Conditions

```js
const score = 80;

if(score > 90) console.log("A");
else if(score >75) console.log("B");
else if(score > 50) console.log("C");
else console.log("you must study hard");
```

### 3. Switch Statement

```js
const day = 3;
switch(day) {
    case 1: console.log("Mon"); break;
    case 2: console.log("Tue"); break;
    case 3: console.log("Wed"); break;
    case 4: console.log("Thu"); break;
    default: console.log("Unknown");
}

// missing break; causes fall-through

switch(2){
    case 1:
    case 2:
    case 3:
        console.log("1 or 2 or 3") // runs
        break;
}
```

### 4. Loops

4. 1 for loop
  

```js
for (let i = 0; i<5; i++){
    console.log(i)
}
```

4.2 while loop

```js
let i = 0;

while(i<3){
    console.log(i);
    i++;
}
```

4.3 do... while 
always runs atleast once

```js
let x = 10;
do{
    console.log("executed");
}while(x<5);
```

4.4 for...of (iterate Arrays)

```js
const arr = ['a','b','c']
for ( const item of arr ){
    console.log(item);
}
```

4.5 for...in (iterate Objects)

```js
const user = { name: "Aishi", age: 24 };
for ( const key in user ){
    console.log(key, user[key]);
}
```

### 5. break and continue

```js
for (let i = 1; i<=5; i++){
    if(i===3) continue; // skip
    if(i===5) break;    // stop
    console.log(i);
}
```