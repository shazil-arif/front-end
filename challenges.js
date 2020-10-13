/**
 * emitter class implementation
 * implement promise class from scratch
 * implement a closure for anything
 * implement a custom 2d array class that can be instantiated and create an iterator function that can go over each element and it can be used with for of loop
 */

class Array2D{
    constructor(arr){
        this.table = [];
        if(Array.isArray(arr)){
            for(let i = 0; i < arr.length; i++){
                this.table.push([]);
                for(let j = 0; j < arr[i].length; j++){
                    this.table[i].push(arr[i][j]);
                }
            }
        }   
    }
    set(i, j, value){
        this.table[i][j] = value;
    }
    // this generator and the iterator below are functionally equivalent
    *[Symbol.iterator](){
        for(let i = 0; i < this.table.length; i++){
            for(let j = 0; j < this.table[i].length; j++){
                yield this.table[i][j];
            }
        }

    }
    [Symbol.iterator](){

        let i = 0;
        let j = 0;
        let table = this.table;
        return {
            next: () => {

                if (j === table.length ){
                    i++;
                    j = 0;
                }
                if (i === table.length) return {value: undefined, done: true};

                return {value: table[i][j++], done: false};
            }
        }
    }
}


let table = new Array2D([[1,2,3],[4,5,6],[7,8,9]]);
for(const value of table) console.log(value)

