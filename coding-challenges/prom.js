function divide(a,b){
    return new Promise((resolve, reject) => {
        if (b === 0) return reject(new Error('Division by zero error'))
        return resolve(a/b);
    });
}
const result = divide(10,2);
result.then((res) => console.log(res));
result.catch((err) => console.log(err.message));

(async function(){
    const operation = await divide(4,2);
    console.log(operation)
})();
