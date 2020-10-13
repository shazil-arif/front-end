// function duplicate(arr){
//     arr.forEach(element => {
//         arr.push(element);
//     });
// }
// let arr = [1,2,3,4,5];
// duplicate(arr);
// console.log(arr)


// function map(arr, cb){
//     if(!cb || typeof(cb) !== 'function') throw new Error('call back required');

//     let output = [];
//     arr.forEach((item) => {
//         let callbackResult = cb(item);
//         output.push(callbackResult);
//     });
//     return output;
// }
// console.log( map([1,2,4,6,7,10,50,35], (item) => item * 2))

// arr = [1,10,9,20,40,-5,9,30]
// arr = arr.filter((item) => item > 10);
// console.log(arr)

// function filter(arr, cb){
//     if(!cb || typeof(cb) !== 'function') throw new Error('call back required');

//     let output = [];
//     arr.forEach((item) => {
//         if(cb(item)) output.push(item);
//     })
//     return output;
// }

// console.log(filter(arr, (item) => item > 10))

// filter, map, reduce, some, forEach, shift, unshift, pop, slice, splice

let myarr = [1,2,3,4,5];
let r = myarr.reduce((a,b) => a * b, 2);
console.log(r);

console.log(myarr.some((a) => a < 6))

console.log(myarr.filter((a) => a < 4))

console.log(myarr.slice(0,2))
console.log(myarr.splice(0,2)); // bt the difference here is that it also modifies myarr and deletes values. so myarr is now [3,4,5]


// function reduce(arr, cb){
//     for(let i = 0; i < arr.length - 1; i++){
//         let a = arr[i];
//         let b = arr[i + 1];
//         let temp = cb(a,b);

//     }

