function Particle(){
    this.x = 100;
    this.y = 99;
}
Particle.prototype.show = function(){
    console.log(this.x, this.y);
}
var p1 = new Particle();
var p2 = new Particle();
console.log(Object.getPrototypeOf(p1));
console.log(Particle.prototype);
console.log(Particle.prototype === Object.getPrototypeOf(p1));
console.log(Object.getPrototypeOf(Particle) === Object.getPrototypeOf(p1))


