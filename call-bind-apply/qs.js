const obj = {
    name: 'Shazil',
    getName: function(){
        return this.name;
    }
}

let ref = obj.getName;

console.log(ref())
console.log(obj.getName());