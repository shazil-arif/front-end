/**
 * all 3 are very similar
 */
'use strict'; // in strict mode, 'this' does not refer to global/window object
function runner(fn){
    //fn(); // this = f
    //fn.call(runner); // this = runner

    // these two are the same, one just takes arugments as an array
    fn.apply(this, [arguments[1], arguments[2]]);
    fn.call(this, arguments[1], arguments[2]);

    let ref = fn.bind(this,arguments[1], arguments[2]); // returns a reference to the fn function/essentially a wrapper that uses a closure
    ref();
}

function f(x,y){
    console.log(x,y, this)
}


runner(f, 5, 10);


// console.log(runner(f(10,5))); // wanna be able to do something like this

// the problem is how do execute a function passed as a parameter without knowing its parameters?
// call() solves this for us

/**
 * challenge: implement your own bind() function
 */

function test(){
    let x = 10;
    return function(){
        console.log(x, this);
    }
}
test().call(test,-9);