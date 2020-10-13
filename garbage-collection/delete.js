let arr = [1,2,3,4,5,6,7];
delete arr;
console.log(arr);

delete arr[0];

let obj = {x: 1, y: 2};
delete obj;
console.log(obj)

delete obj.x;
console.log(obj, obj.x)

const obj2 = {
    x: 1,
    z: 10
}

/**
 * essentially, delete removes a objects 'own' property. cant remove properties higher up in the prototype chain.
 * delete DOES NOT deallocate memory. it is different from free in other languages. javscript is garbage collected so memory management is done automatically
 * delete removes the references which helps the javascript garbage collector identify what can be deallocated. 
 * in javascript manual garbage collection is not possible but using the delete keyword certainly helps
 * 
 * As of 2012, all modern browsers ship a mark-and-sweep garbage-collector. All improvements made in the 
 * field of JavaScript garbage collection (generational/incremental/concurrent/parallel garbage collection) 
 * over the last few years are implementation improvements of this algorithm, 
 * but not improvements over the garbage collection algorithm itself nor its 
 * reduction of the definition of when "an object is no longer needed". 
 * 
 * Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management
 * 
 * it also has no effect on regular variables. only works for objects (remember arrays are also objects so it works for them too)
 */

 let myvar = 90;
 delete myvar;
 console.log(myvar)