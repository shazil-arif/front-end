// let x;
// console.log(x);

var y;
console.log(y);



// functions can be called before their definition cuz of hoisting, more on this later
/**
 * Hoist in general means to raise something
 * in terms of javascript, variable declaratations are 'raised' or 'hoisted' when a new block is entered (block = anything that has its own scope)
 * when a new function, loop or conditional block is entered all variable assignments are 'raised' to the top of the block! but only the declarations
 * so 
 * function(){
 *  let x = 10;
 *  const y = 5;
 * }
 * 
 * Is equivalent to 
* function(){
 *  let x; 
 *  const y;
 * }
 * 
 */
// let x = x;
// let x; // undefined
// x = x;

// let x;
// x = x;
// console.log(x);

let a = f();
const b = 2;
function f() { return b; }
function f() {return 10;}
console.log(f());
console.log(a);