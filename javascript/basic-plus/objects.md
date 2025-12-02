## Objects

- An object is a collection of key-value pairs

```js
const user = {
    name: 'Ash',
    age: 24,
    isHero: true
};
```

keys are strings internally. Values can be anything -> string, number, arrays, functions, objects



### Accessing object properties

- dot notation

```js
console.log(user.name)
```

- bracket notation

```js
console.log(user['age']);
```

### Adding, updating & deleting properties

```js
const user = {};
user.name = "Ash"; // add
user.age = 25; //add
user.age = 32; //update

delete user.age // delete
```

### Methods (Functions inside objects)

```js
const car = {
    brand: "Hero",
    start(){
        console.log("Engine start...");
    }
}
car.start();
```

### this inside object methods

```js
const person = {
    name: "aishi",
    sayHi(){
        console.log("hi " + this.name);
    }
};
person.sayHi()
```

- arrow functions do not have their own this -> avoid in methods

```js
const obj = {
    name: 'wrong',
    hi: () => console.log(this.name);
}
obj.hi() // undefined
```

### Nested objects

```js
const obj = {
    name: "ashirvad",
    address: {
        city: "bangalore",
        pin: 560095
    }
};
console.log(obj.addrss.pin);
```

### Checking if a key exists

```js
"user" in obj // old method
obj.hasOwnProperty("name")
```

better

```js
console.log(Object.hasOwn(obj, "name"));
```

### Looping through objects

- for...in loop

```js
for ( const key in user ){
    console.log(key, user[key])
}
```

### Object utility methods

- Object.keys()

```js
Object.keys(user) // ['name','age']
```

- Object.values()

```js
Object.values(user) // ['Aishi', 24]
```

-  Object.entries()

```js
Object.entries(user) // [['name', 'Aishi'], [ 'age', 24 ]]
```

### Object destructuring

```js
const user = {name: 'Aishi' , age: 24}
const {name, age} = user;
console.log(name); //Aishi
```

Renaming variables during destructuring

```js
const {name: userName} = user
```

### Spread operator with objects

- Copying object

```js
const a = {x:1};
const b = {...a}; //shallow copy
```

- Merging objects

```js
const c = {name: 'hero'};
const d = {age: 21};
const merged = {...c,...d};
```

### Optional chaining(?.)

```js
const user = { addrss: {city: "BLR"} }
console.log(user.address?.city) // works
console.log(user.contact?.phone) // undefined (safe)
```


