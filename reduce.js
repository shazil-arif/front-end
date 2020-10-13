let arr = [1,2,3,4,5,6,7,8,9,10];
arr.reduce((a,b) => {
    console.log(a,b)
    return a*b;
}, 5)

