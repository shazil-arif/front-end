function User(name){
    this.name = name;
}
User.prototype.get = function(){
    return this.name;
}
const obj = {
    toString: function(){return 'hello'}
};
const user = new User('shazil')
let prototypeObj = Object.getPrototypeOf(user);
console.log(prototypeObj)
console.log( prototypeObj.constructor);
console.log(prototypeObj.constructor === User);

// console.log(obj.__proto__); // or 
// console.log(obj.__proto__.constructor === Object) 
// console.log(obj.__proto__.__proto__)


function ExtendedUser(name){
    User.call(this, name)
}
// const exuser = new ExtendedUser('arif');
// console.log(user.get());
// console.log(exuser.get())

/**
 * prototype properties of a constructor function are not inherited to extended classes/constuctors
 * only direct properties are
 */

