const obj = {
    users:{
        premium:[
            'John',
            'Doe',
            'Martin',
            'Rob',
            'Doug'
        ],
        regular:[
            'Angelica',
            'Maryam',
            'Bob',
            'Johnathan'
        ]
    },

    [Symbol.iterator] : function(){
        let index = 0;
        let typeIndex = 0;
        let allUsers = Object.values(this.users);
        return {
            next: function(){
               
                if(index >= allUsers[typeIndex].length) {
                    index = 0;
                    typeIndex++;
                }
                if(typeIndex >= allUsers.length) return {value: undefined, done: true}
                return {
                    value: allUsers[typeIndex][index++],
                    done: false
                }


            }
        }
    }
}

const obj2 = {
    x : 1,
    y: 2,
    z: 100,
    [[[1]]]: 50,
    [1+2]: 'x+y'
}

const iterator = obj[Symbol.iterator]();
for(let i = iterator.next(); i.done !== true; i = iterator.next()){
    console.log(i)
}
const arr = [1];

const [one,two] = arr;
const {x,y} = obj2;
console.log(one,two);
console.log(x,y)

// for(const value of obj){
//     console.log(value);
// }