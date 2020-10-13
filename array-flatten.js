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
    if(arr === null) throw new Error('Empty array');
    const output = [];
    flattenHelper(output, arr);
    return output;
}
console.log('hello')
console.log(flatten(arr2))

/**
 * follow up: do it iteratively
 */