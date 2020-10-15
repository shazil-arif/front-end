function flatten(arr) {
    var array = [];
    while(arr.length) {
      var value = arr.shift();
      if(Array.isArray(value)) {
        // this line preserve the order
        arr = value.concat(arr);
      } else {
        array.push(value);
      }
    }
    return array;
  }

// let arr = flatten([1,[2,[3]],[4]]); // => [1,2,3,4]

console.time('start');
flatten([[[[[1,2,[10,1,0,[55,[90],[12]]],[56,[[[90]]]]]]]]]), 
[[[[[1,2,[10,1,0,[55,[90],[12]]],[56,[[[90]]]]]]]]],
[[[[[1,2,[10,1,0,[55,[90],[12]]],[56,[[[90]]]]]]]]],
[[[[[1,2,[10,1,0,[55,[90],[12]]],[56,[[[90]]]]]]]]],
[[[[[1,2,[10,1,0,[55,[90],[12]]],[56,[[[90]]]]]]]]],
[[[[[1,2,[10,1,0,[55,[90],[12]]],[56,[[[90]]]]]]]]];
console.timeEnd('start');