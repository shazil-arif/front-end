function Arithmetic(x,y){
    this.x = x;
    this.y = y;
    this.add = function(){
        return this.x + this.y;
    }
    this.subtract = function(){
        return this.x - this.y;
    }
}

Arithmetic.prototype.modulus = function(){
    return this.x % this.y;
}

let a = new Arithmetic(10,10);
let b = new Arithmetic(5,5);
function ExtendedArithmetic(x,y){
    Arithmetic.call(this,x,y);
}
// ExtendedArithmetic.prototype = Object.create(Arithmetic.prototype);

ExtendedArithmetic.prototype.multiply = function(){
    return this.x * this.y;
}

ExtendedArithmetic.prototype.divide = function(){
    return this.x/this.y;
}


let c = new ExtendedArithmetic(4,6);

console.log(Object.getPrototypeOf(a))
console.log(Object.getPrototypeOf(a) === Object.getPrototypeOf(b)); // all instances of Arithmetic point to the same prototype
console.log(Object.getPrototypeOf(a) === Arithmetic.prototype); // these are also equal, further emphasizes our point

//========================================================


function tracePrototypeChainOf(object) {

    var proto = object.constructor.prototype;
    var result = '';

    while (proto) {
        result += ' -> ' + proto.constructor.name;
        proto = Object.getPrototypeOf(proto)
    }

    return result;
}


let arr = [1,2];
let obj = {};
console.log(typeof(() => console.log('hello')) === 'object')
console.log(tracePrototypeChainOf(obj));
console.log(tracePrototypeChainOf(arr));


const f = () => {};
console.log(f instanceof Object)