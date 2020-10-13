// console.log(typeof(1.5 + '1'));
// console.log(typeof(1.5 || '1'))
// console.log(typeof('1' + 1))
// console.log(0 || 5*(8+7)) // 0
// console.log(0 && 5*(8+7)) // 75
// console.log(1 && 5*(8+7)) // 75
// console.log(1 || x) // no error
// console.log(1 && x) // error

/**
 * 3 types of coercion
 * 1 ) To String
 * 2 ) To Boolean
 * 3 > To number
 * 
 * 1 ) To String
 * anytime we use the binary + operator. if any one argument is a string, 
 * then the evaluated result is a string
 */
 console.log('Strings');
 console.log('12' + 4.556) // will give 124.556 as string
 console.log(typeof('12' + 4.556)) // string

 // if no string then just a normal evaluation
 console.log(5 + 5);
 console.log(typeof(5 + 5));

 console.log('--------------');
 console.log('Boolean');
 /**
  * 2 ) coercion to boolean
  * anytime we use a logical operator and one of the operands is not a boolean
  * ||  and && and !
  */
 console.log(0 || 'hello') // hello will be evaluated to boolean then the expression is evaluated
 console.log(Boolean('hello'))
 console.log(Boolean('')) // empty string is always false, all other strings are true

 console.log(!'hello'); // hello is true, so its negation is false
 console.log(!''); // empty string is false so its negation is true

 console.log('hello' && 'world'); // both are true, the last evaluated true arg is 'world' so 'world' is returned
 console.log('hello' || 'world');  // first arg 'hello' evaluates to true so it is returned


 console.log('--------------');
 console.log('Numbers');
 /**
  * 3 ) To number
  * Triggered by arithmetic operators (- + * / %) unless one argument is a string then + implicitly converts both to string. so if we have false + 1 that is 0 + 1 but 'false' + 1 is = 'false1'
  * Comparison operators (> >= < <=)
  * Bitwise operators (| & ^ ~)
  * loose equality == and != converts both operands to numbers unless both of them are a string. Note === is 'strict' equality
  * 
  */
 console.log(false + 1); // same as 0 + 1
 console.log('false' + 1); // becomes 'false1' because one operand is a string
 console.log('1' < 2) // same as 1 < 2 so true
 console.log('1' == 1) // '1' is converted to the number 1 from string, so 1 == 1 which is true
 console.log('1' & '1', typeof('1' & '1')) // bitwise and of 1 & 1 is also 1


 /**
  * Other weird type conversion
  */
//  console.log('1' + []); // gives 1, empty array is converted to empty string, see next line
//  console.log(String([]) === '') // true


