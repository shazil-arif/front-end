let obj = {
    x : 10,
    method: function(){
        console.log(this === obj, this, obj)
        function inner(){
        }

        inner();
    }    
}

let x = obj.method(); // this will point to obj
let y = obj.method; // this will point to window!
y();

// what 'this' points to is decided at function invokation time using the leading parent object. not declaration.

// another example
let obj2 = {
    x : 10,
    method: function(){
        console.log('outside',this)
        function inner(){
            console.log('inside', this);
        }

        inner();
    }    
}

obj2.method(); // outside 'this' is obj2, inside 'this' is window

let ref = obj2.method;
ref(); // both are window now. why? there is no leading parent object so it defaults to window

let obj3 = {
    x: 10,
    method: {
        x: 5,
        method2: {
            x : 16,
            method3:{
                x : 19,
                method4: function(){
                    console.log(this, this.x)
                }
            }
        }
    }
}
obj3.method.method2.method3.method4(); // can you figure out the output before running?
obj3.method.method2.method3.method4.call(obj3.method); // what about this?