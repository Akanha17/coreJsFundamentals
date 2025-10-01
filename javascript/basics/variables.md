## Variables ( var, let & const)

- **Var** is function-scoped, hoisted, can be redeclared

- **let** block-scoped, hoisted (in TDZ), can't be redeclared

- **const** block-scoped, hoisted (in TDZ), must be initialized, can't be reassigned



## hoisting:

- var is hoisted and initialized as undefined

- let & const are also hoisted but remains in temporal dead zone until declared



## scope:

- var leaks outside blocks, limited to function scope

- let/const true block scope



**on special note:** const only prevents **reassignment**, not mutation of object/arrays



> Best practices:
> 
> 1. use const by default
> 
> 2. use let when reassignment is necessary
> 
> 3. avoid var unless maintaining old code



# challenges:



```js
console.log(a);
var a = 5;
console.log(b);
let b = 12;


if(1){
    var x = 1;
    var u = 2;
}
console.log(x);
console.log(u);

const num = 10; // try reassigning a number

const arr = [1,2]; // try modifying arr

for(var i=0; i<3; i++){}
console.log(i);

for(let i=0; i<3; i++){}
console.log(i)
```




