## 1. What is OOP ?

**Object Oriented Programming** is about organizing code around objects that contain:

- data (properties)

- behaviour (methods)

Goals

- reusability

- readibility

- scalability

- maintainability

## 2. Object vs Class

- Object -> real instance

- Class -> blueprint

```js
class Car {
    constructor(brand){
        this.brand = brand;
    }
    drive(){
        console.log(`${this.brand} is driving`);
    }
}
const car1 = new Car("Tesla");
car1.drive();
```

## 3. Constructor

the constructor runs automatically when a new object is created

```js
constructor(name, age){
    this.name = name;
    this.age = age;
}
```

- this -> current instance

- One constructor per class

## 4. Methods

Methods are functions inside a class

```js
class User {
    login(){
        console.log("User logged in");
    }
}
```

called like:

```js
const u = new User();
u.login();
```

## 5. this keyword (Important)

this refers to the **object that calls the method**

```js
class Person {
    sayHi(){
        console.log(this);
    }
}
new Person().sayHi(); // instance
```

if method is detached -> this can break

## 6. Inheritance (extends)

One class can inherit another

```js
class Animal {
    speak(){
        console.log("Animal speaks");
    }
}
class Dog extends Animal {
    bark(){
        console.log("woof");
    }
}
const d = new Dog();
d.speak() // inherited
d.bark();
```

## 7. super

Used to call parent class constructor or methods

```js
class Employee {
    constructor(name){
        this.name = name;
    }
}
class Developer extends Employee{
    constructor(name, skill){
        super(name);
        this.skill = skill
    }
}
```

must call super() before using this

## 8. Method override

Child can override parent method

```js
class Animal {
    sound(){
        console.log("Some sound");
    }
}
class Cat extends Animal {
    sound(){
        console.log("meow");    
    }
}
```

## 9. Private fields (#) (modern JS)

```js
class Bank {
    #balance = 0;
    deposite(amount){
        this.#balance += amount;
    }
    getBalance(){
        return this.#balance
    }
}
```

bank.#balance -> error

Encapsulation achieved

## 10. Getters & Setters

```js
class User {
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(!value) throw "Invalid name";
        this._name = value
    }
}
```

## 11. Static methods

belong to the class, not instance

```js
class MathUtil {
    static add (a, b){
        return a + b;
    }
}
MathUtil.add(2, 3); // 5
```

### 12. OOP Principles (Interview Gold)

Encapsulation

- hiding internal details

- private field

Inheritance

- reuse code

Polymerphism

- same method, different behavior

Abstraction

- expose onlly what's needed

## 13. Real-World Example (Forntend Style)

```js
class ApiService {
    async get(url) {
        const res = await fetch(url);
        return res.json();
    }
}
```

This is **real production code style**



### extras:

Composition vs inheritance (very important)

```js
class Dog extends Animal {}
```

problems

- tight coupling

- fragile hierarchy

- hard to change later

composition:

```js
class Engine {
    start() {}
}
class Car {
    constructor(){
        this.engine = new Engine();
    }
}
```

car **has an Engine**

Prefer composition when:

- behaviour can change

- you want flexibility

- multiple features are needed

- inheritance tree becomes deep

**Prefer composition over inheritance when behaviour needs to be reused without tight coupling**
