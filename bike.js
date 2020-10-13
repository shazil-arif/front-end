function User(name){
    this.name = name;
}
console.log(Object.getPrototypeOf(User));
console.log(User.__proto__)
console.log(User.prototype)