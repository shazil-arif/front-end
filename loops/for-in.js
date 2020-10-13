const obj = {
    'a':1,
    '2':3,
    4: 'hello',
    6:'world'
}
obj.prototype = function(num){ console.log(num)}

/**
 * for in iterates over all enumerable property names keyed as strings and ignores 
 * properties that are keyed by Symbols
 * 
 * Order is not always guaranteed so avoid using for in for arrays. better suited for iterating over objects
 * 
 * Object.keys(obj) also ignores Symbol keys
 */
for(const key in obj){
    console.log(typeof(key), key); // 'a', '2', 4, 6
}


