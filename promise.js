/**
 * A promise is basically like a promise in real life
 * THe idea is that, Suppose i make a promise to you that I'll buy you a drink from the store
 * I can either keep my promise/ resolve it
 * Or I can not fullfill/reject this promise
 * 
 * But you need to sort of wait for me to either keep or reject my promise. in other words it takes some time
 * 
 * the promise i made can be in 3 states
 * 
 * 1) Rejected
 * 2) Fullfilled
 * 3) Pending
 */

//  myfunc().then(() => console.log('Thanks for the drink!'))
//     .catch(() => console.log('Hey that wasnt cool!'))

function IllBuyADrink(){
    return new Promise((resolve, reject) => {
        // if i buy the drink
        let boughtDrink = true;
        if(boughtDrink){
            return resolve('Bought drink!');
        }
        else return reject('Sorry I cant keep my end of the deal...')
    })
}

// IllBuyADrink().then((boughtDrink) => console.log(boughtDrink))
//     .catch((err) => console.log(err));


(async function(){
    try{
        let result = await IllBuyADrink();
        console.log(result);
    }
    catch(ex){
        console.log(ex.message);
    }
})();

console.log('after or before?')


/**
 * Challenge: implement a class that takes a non async function as a parameter in its constructor. It has a promisify() function that allows the input function to be used with async/await and Promises
 */ 
class Promisify{
    constructor(f){
        this.f = f;
    }
    promisify(){
        return new Promise((resolve, reject) => {
            this.f((x, err) => {
                if(err) return reject(new Error('Error while fetching from API'));
                return resolve(x);
            })
        })
    }
}


// let p = new UniquePromise();


// function f(cb){
//     // some processing and when done
//     let x = db.read();
//     cb(x);
// }

// f((x) => {
//     console.log(x);
//     // use further for some processing
// })

// // what we want is to have a promise version
// //desired behavior:

// const result = await f()

// (async function(){
//     let func = function(cb){
//         let x = 2*2 + 90 - 80*76 + 100*76 % 4;
//         let err = Math.floor((Math.random() * 2) + 1);
//         if(err === 1) return cb(null, true);
//         return cb(x, false);
//     }
//     let p = new Promisify(func);
//     let result = await p.promisify();
//     console.log(result);
// })()
