const obj = {
    'a':1,
    '2':3,
    4: 'hello',
    6:'world'
}

/**
 * for in iterates over all enumerable property names keyed as strings and ignores properties that use Symbol type
 */
for(const key in obj){
    console.log(typeof(key), key); // 'a', '2', 4, 6
}

let arr = [1,2,3,4,5,6,7, 'hello', 'world'];
for(const key in arr){
    console.log(typeof(key), key); // for an array the for in iterates over the indices
}
// equivalent to Object.keys(arr).forEach((key) => console.log(key))
console.log('--------------------');

/**
 * for of iterates over the values of an iterable such as string or array
 */
// for(const value of arr){
//     console.log(typeof(value), value)
// }

// for (const char of 'hello'){
//     console.log(char) // outputs h e l l o each character on a newline
// }

// also for await()

// regular for loop
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// foreach loop
arr.forEach((item) => console.log(item));

/**
 * How to iterate over keys of an object?
 * 1 ) Use for ... in loop
 * 2 ) Use Object.keys() to get an array containing the keys, then iterate over this
 * 
 * Which is faster? 
 * todo : learn about performance of each
 */