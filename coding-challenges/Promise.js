/**
 * Challenge: implement a Promise class from scratch with the same behavior as the built in promise class
 */

let promise = new Promise((resolve, reject) => {
    // do stuff and then
    // return resolve(response) or return reject(response)
})
// we can also use then() and catch()
promise.then((res) => {});
promise.catch((err) => {});

class MyPromise{
    constructor(callback){
        if(typeof(callback) !== 'function') throw new Error('Function reqquired');
        this.cb = callback;
        this.state = 'pending';
    }
    then(callback){
        if(this.state !== 'fulfilled') callback({state: this.state});
        


    }
    catch(callback){

    }

}