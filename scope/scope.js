var x = 1;
console.log("outside:"+ x);
function y(x){
    console.log("inside:"+ x);
}
y(2);

/**
 * In short, scope refers to the visibility of a variable
 * variables that are declared using var are visible in the current execution context 
 * 
 * execution context can be thought of as the object to which the current code being run belongs to
 * the 'this' keyword tells us what this object is. it can refer to a function, object, global window object
 * 
 * 'this' is either global scope or inside a function. 
 * Global variables declared with var are also added to the global window object. this is how they are made available everywhere?
 * let and const are block scope are visible within the block they are declared(i.e inside a function, loop block, conditional)
 * in addition const cannot be changed after declaration
 */

function f(){
    var myVar = 10;
    console.log(myVar + x);
}
f()
// console.log(myVar) // reference error, even though myVar is declared with var it is scoped to the function f()
console.log('--------------')
function z(){
    let num = 10;
    if(num === 10){
        var myVar = 5;
        let myLetVar = 4;
        console.log(myVar);
        console.log(myLetVar)
    }
    console.log(myVar); // myVar is available anywhere in this function, it is scoped to the entire function block
    // console.log(myLetVar); // reference error, let is scoped to the conditional block
}
z();

function k(){
    while(true){
        var global = 11;
        const notGlobal = 10;
        console.log(global, notGlobal);
        break;
    }
    function nested(){
        var myVar = 10;
    }
    console.log(myVar)
    console.log(global)
}
k();