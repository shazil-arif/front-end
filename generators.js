class UserList{
    constructor(){
        this.list = [];
    }
    add(param){
        if(Array.isArray(param)){
            for(let i = 0; i < param.length; i++){
                this.list.push(param[i]);
            }
        }
        else this.list.push(param);
    }
    values(){ return this.list; }
    *iterator(){
        for(let i = 0; i < this.list.length; i++){
            yield this.list[i];
        }

    }
    // is this implementation of an itertor correct? will this work? why or why not? if not how would you fix it?
    // [Symbol.iterator](){
    //     let list = this.list;
    //     return {
    //         next: function(){
    //             for(let i = 0; i <= list.length; i++){
    //                 if(i === list.length) return {done: true};
    //                 return {done: false, value: list[i]};
    //             }
    //         }
    //     }
        
    // }
     [Symbol.iterator](){
        let list = this.list;
        let i = 0;
        return {
            next: function(){
                if(i >= list.length) return {value: undefined,done: true};
                return {done: false, value: list[i++]};
            }
        }
        
    }

}

const userlist = new UserList();
userlist.add(1);
userlist.add(2);
userlist.add(3);
userlist.add(4);
userlist.add([5,6,7,8,9]);
// console.log(userlist.values())

// console.log(userlist.iterator())
for(const value of userlist){ console.log(value) }