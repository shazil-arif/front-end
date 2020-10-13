// Let's create an object o from function f with its own properties a and b:
let f = function () {
    this.a = 1;
    this.b = 2;
 }
 let o = new f(); // {a: 1, b: 2}
 
 // add properties in f function's prototype
 f.prototype.b = 3;
 f.prototype.c = 4;

// console.log(o['b'])
// console.log(Object.keys(o));
// console.log(o.hasOwnProperty('a'));
// console.log(o.hasOwnProperty('b'));
// console.log(o.hasOwnProperty('c'));


/**
* Prototypical inheritance
*/

function Particle(){
    this.x = 90;
    this.y = 100;
}

function Confetti(){
    Particle.call(this);
}

let c = new Confetti();
let p = new Particle();
console.log(c)