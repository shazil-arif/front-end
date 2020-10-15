const arr2 = [[0], [[1]], 2, [[[3, 4]]]];

/**
 * pseudocode
 * 1) iterate over array while checking each element
 * 2 ) if element is a number, add to our output
 * 3 ) If element is an array go to step 1
 */

function flattenHelper(outputArr, originalArr){
    for(const value of originalArr){
        if(Array.isArray(value)) flattenHelper(outputArr, value);
        else if (value !== null){
            outputArr.push(value);
        }
    }
}

function flatten(arr){
    if(arr.length === 0) return [];
    if(!arr) throw new Error('Invalid argument for array');
    const output = [];
    flattenHelper(output, arr);
    return output;
}
console.log(flatten(arr2))

/**
 * follow up: do it iteratively
 */

function flattenIterative(arr){
    if(arr.length === 0) return arr;
    if(!arr) throw new Error('Array expected');
    const output = [];
    
    //const arr2 = [[0], [[1]], 2, [[[3, 4]]]];

    let stack = [];
    let i = 0;
    stack.push(arr[0])
    while(stack.length > 0 && i < arr.length){
        let current = stack.pop();
        if(Array.isArray(current)) {
            for(const value of current) stack.unshift(value)
        }
        else {
            output.push(current);
            if(stack.length === 0){
                ++i;
                if(i < arr.length) stack.push(arr[i]);
            }
        }
    }
    return output;
}

// [[[0]], [[1]], 2, [[[3, 4]]]];
console.log(flattenIterative([[[0]], [[1,2]], 2, [[[3, 4]]]]));
console.log(flattenIterative([[0], [[1]], 2, [[[3, 4]]]]));
console.time('start')
flattenIterative([[[[[1,2,[10,1,0,[55,[90],[12]]],[56,[[[90]]]]]]]]]), 
[[[[[1,2,[10,1,0,[55,[90],[12]]],[56,[[[90]]]]]]]]],
[[[[[1,2,[10,1,0,[55,[90],[12]]],[56,[[[90]]]]]]]]],
[[[[[1,2,[10,1,0,[55,[90],[12]]],[56,[[[90]]]]]]]]],
[[[[[1,2,[10,1,0,[55,[90],[12]]],[56,[[[90]]]]]]]]],
[[[[[1,2,[10,1,0,[55,[90],[12]]],[56,[[[90]]]]]]]]];
console.timeEnd('start')