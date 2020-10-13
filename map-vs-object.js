let map = new Map();
map.set('hello', 'world');
map.set(1,2);
map.set(3,4);
map.set([1,2,3], 'array');
map.set([1,2,3], 'array2');
map.set(3, 5);
map.set(4,() => console.log(this))
for(const value of map){
    console.log(value[0], value[1])
}
console.log('-----------');
for(const value in map){
    console.log('hello???')
    console.log(value, typeof(value))
}
console.log('-----------');
for(const value of map.keys()){
    console.log(value, typeof(value))
}
console.log('-----------');
for(const value of map.values()){
    console.log(value, typeof(value))
}
const obj = {
    x: 1,
    x: 2,
}
map.get(4).call(map)