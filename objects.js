const obj = {
    1:1,
    2:2,
    3:3,
    4:4,
    5:5, 
    [Symbol('key')]: 'value',
    method: () => {}
}
console.log(obj[Symbol('key')])
Object.keys(obj).forEach((key) => console.log(key))
for(const key in obj) console.log(key)

