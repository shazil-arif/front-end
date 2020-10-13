function binarySearch(arr, target){
    let lo = 0;
    let hi = arr.length - 1;
    while(lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if(arr[mid] === target) return mid;
        else if(target > arr[mid]) lo = mid + 1;
        else if(target < arr[mid]) hi = mid - 1;
    }
    return -1;
}

function binarySearchRecursive(arr, target){
    function binarySearchHelper(lo, hi, arr, target){
        if(lo <= hi) {
            console.log(lo)
            let mid = Math.floor((lo + hi) / 2);
            if(arr[mid] === target) return mid;
            else if(target > arr[mid]) return binarySearchHelper(mid + 1, hi, arr, target);
            else if(target < arr[mid]) return binarySearchHelper(lo, mid - 1, arr, target);
        }
        return -1;
    }
    return binarySearchHelper(0, arr.length - 1, arr, target);
}


/**
 * Follow up: add the binary search method as part of the array class so that arr.binarySeach('r', target, (i) => {// logic })) is possible
 * 'r' or 'i' indicates recurive or iterative
 * second arg is the target
 * third arg is the callback that takes a single parameter i which is the index if the element was found. -1 if not found
 */
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let index = binarySearch(arr, 10);
console.log(index)

index = binarySearchRecursive(arr, 10);
console.log(index);
// index = binarySearchRecursive(arr, 9);
// console.log(index);
// index = binarySearchRecursive(arr, 8);
// console.log(index);
// index = binarySearchRecursive(arr, 7);
// console.log(index);
// index = binarySearchRecursive(arr, 6);
// console.log(index);
// index = binarySearchRecursive(arr, 5);
// console.log(index);
index = binarySearchRecursive(arr, 4);
console.log(index);
