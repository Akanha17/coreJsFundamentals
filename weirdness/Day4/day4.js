// well let the practice begin

// practice 1
var x = 1;
function outer(){
    var x = 2;
    function inner(){
        console.log(x); 
    }
    inner();
}
outer();

// practice 2 block scope
if(true){
    var x = 10;
}
console.log(x);

// practice 3 function scope isolation
var x = 5
function test(){
    var x = 20;
}
test();
console.log(x);

// practice 4 scope chain overriding
let a = "global";
function one(){
    let a = "one";
    function two(){
        console.log(a);
    }
    two();
}
one();

// practice 5 function expression block

{
    var o = 1;
    let b = 2;
    const c = 3;
    function d() {
        return o + b + c;
    }
    console.log(d()); // works fine in modern environments in older js i.e non-scoped function declaration weren't allowed
}

// practice 6 Global pollution via var
function foo(){
    x = 100;
}
foo();
console.log(x); // x is now a global variable (no var, let, or const used)