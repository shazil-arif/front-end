/**
 * Generators can be thought of as an abstraction on top of iterators or syntactic sugar or a wrapper to make the writing of iterators easier
 * They are a special kind of function that return an iterator. it returns an object with a next() property and each call to next()
 * return an object {done: <val>, value: <val>} when done is true, the iterator/generator is finished
 */

 // iterators
const obj = {
    x: 1,
    y: 2,
    // this btw is called computed property name
    [Symbol.iterator]: function(){

    },
    //or
    [Symbol.iterator](){

    },
    // or
    [Symbol.iterator] : () => null,
    // or
}

const Users = {
    users :[
        {
            name: 'John Doe',
            age: '30',
            DOB: '11/7/2000',
            username: 'jdoe11',
        },
        {
            name: 'Bob Doe',
            age: '35',
            DOB: '11/7/1994',
            username: 'bdoe',
        },
        {
            name: 'Angelica Holmes',
            age: '31',
            DOB: '23/03/1990',
            username: 'angelholmes31',
        }
    ],
    // [Symbol.iterator](){
    //     let i = 0;
    //     let users = this.users;
    //     return {
    //         next: () => {
    //             if(i >= this.users.length) return {value: undefined, done: true}
    //             return { value: users[i++].name, done: false }
    //         }
    //     }
    // },
    *[Symbol.iterator](){
        for(let i = 0; i < this.users.length; i++) yield this.users[i].age;
    },
}

// comment the second *[Symbol.iterator] and uncomment first one to see the behavior of the following for of loop
for(const user of Users) console.log(user)
console.log('-----------------');
/**
 * that was iterators. a function that has a standard interface (no parameters and returns an object with a property next that is a function that can lexically bind to the outer scope)
 * 
 * Now generators... a syntactic sugar on top of iterators. let's redo the same thing we did above but with a generator function
 */


/**
 * comment first [Symbol.iterator] function and uncomment second one to see behavior of this loop. They are functionaly equivalent!
 */
for(const user of Users) console.log(user)
console.log('---------------------')
/**
 * what does yield do? it returns whatever value is placed next to it and 'pauses' execution of the function
 * generators are an easier way to write iterators.
 * When we use a for of loop, it looks for the objects iterator. The iterator can be explicitly defined or a generator is defined (which returns an iterator). so in the end the iterator 
 * is always looked for. if not found then an error is throw
 * 
 * What else makes use of the iterator/generator?
 * 
 * 1) For of loop
 * 2) Spread operator [...]
 * 3) array desctructuring const [num1, num2] = [1,2,3,4];
 * 4) Built in data structures such as Maps, set use these methods to make themselves iterable
 * 
 * Generators are easier to write (for ourselves) and read (when working with others code) 
 * They are less prone to error since we don't have to worry about the lexical scope of the object being returned and managing state and sometimes
 * complex logic and conditionals. can write regular logic along with yield operator
 * 
 */

 // the following is equivalent to a for of loop

let generator = Users[Symbol.iterator]();
let next = generator.next();
while(!next.done){
    console.log(next.value)
    next = generator.next();
}
console.log('-----------------')
// can also use for loop!
for(let i = generator.next(); i.done !== true; i = generator.next()) console.log(i.value)

// what is yield* vs yield?
