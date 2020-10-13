/**
 * sets have no specific order, no duplicate
 */

let set = new Set([1,2,3,4,5,6]);
for(const value of set){
    console.log(value); // set is iterable
}

console.log([...set.keys()].forEach((key) => console.log(key))); // this and the below are equivalent
console.log([...set.values()].forEach((values) => console.log(values)));



/**
 * 
 *  new Set([1,2,3])
 * Under the hood the above set is likely implemented as this since everything is an object in JS
 * the key and value are the same since set wont contain any duplicates
const obj = {
    1: 1,
    2: 2,
    3: 3
}
*/

/**         Think in terms of CRUD and compare performance and use cases
 *          Create/Add/Insert items   |      Read All values - Find given value   |       Update          | Delete
 * Set      O(1)                      |         O(n)        -  O(1)               |        O(1)           |  O(1)
 * Array    O(1)                      |         O(n)        -  O(n)               | If index is know O(1) |  O(n) - deleting a given value
 * 
 * 
 * Locating an element and deleting is the major advantage of a set over an array, given that our values are all unique
 * 
 * > Use set if we know our data has no duplicates and or we will frequently need to access and or delete values
 * 
 * > Use array in all other scenarios. Duplicate items
 */