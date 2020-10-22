//- Variables
// - Data Types(Primitive)
// ** Numbers:
//   - toFixed()
//   - isNaN()
//   - isFinite()
//   - parseInt()
//   - parseFloat()

//! NaN

//NaN represents Not-A-Number

// NaN is very useful to understand that an operation cannot be done

1 * undefined; // NaN
// we cannot multiply a number with undefined, thus the result is NaN

parseFloat("Joker12.5"); // NaN
// We cannot convert Joker12.5 to a string

typeof NAN; // number
NaN === NaN; // false

// “Not a Number” is a value that does not represent a real number, despite having number type.
//That is why NaN === NaN is false NaN doesn't equal to any value

0 / 0; // NaN
Infinity / Infinity; // NaN

//Unlike all other possible values in JavaScript, it is not possible to use the equality operators (== and ===) to compare a value against NaN to determine whether the value is NaN or not, because both NaN == NaN and NaN === NaN evaluate to false. Hence, the necessity of an isNaN function.
isNaN(NaN); // true
isNaN("value"); //true
isNaN(13); //false

isNaN(true); // false
isNaN(null); // false
// this value are numbers because in the background true = 1 and null = 0

//! - Primitive Data Types
//String : sequence of characters "Hello"
let primitive1 = "Hello";
//Boolean : true or false
let primitive2 = true;
// Number: numerical values like 5, 20, 500...
let primitive3 = 5;
// Undefined
let primitive4 = undefined;
// Null
let primitive5 = null;

// Primitive Data Types are immutable ! which means that they cannot change

// *********************************************************************

/*.......isFinite().........*/

// A number that is not infinite. In other words it could be measured, or given a value.

// There are a finite number of people at this class.

//! its return result with True or False

let student = 100;
console.log(isFinite(student) ? "Is Finite" : "Is Infinite");//Is Finite
let group = 5;
let groupName = "Group one";
console.log(isFinite(groupName) ? "Is Finite" : "Is Infinite");//Is Infinite

let studentInGroup = isFinite(student / group);
console.log(
    "studentInGroup is finite==>",
    studentInGroup ? "Finite" : "Infinite"
  );//studentInGroup is finite==> Finite

let studentInGroup1 = isFinite(student / groupName);
console.log(
  "studentInGroup1 is finite==>",
  studentInGroup1 ? "Finite" : "Infinite"
);//studentInGroup1 is finite==> Infinite

console.log(isFinite(Infinity) ? "Finite" : "Infinite");//Infinite

console.log(isFinite(NaN) ? "Finite" : "Infinite");//Infinite

console.log(isFinite(-Infinity) ? "Finite" : "Infinite");//Infinite

console.log(isFinite(0) ? "Finite" : "Infinite");//Finite

console.log(isFinite(2e64) ? "Finite" : "Infinite");//Finite

console.log(isFinite(999) ? "Finite" : "Infinite");//Finite

console.log(isFinite(null) ? "Finite" : "Infinite");//Finite

console.log(isFinite("0") ? "Finite" : "Infinite");//Finite

console.log(isFinite('0') ? "Finite" : "Infinite");//Finite




function div(p) {
    if (isFinite(1000 / p)) {
      return 'Number is Finite.';
    }
    return 'Number is Infinite!';
  }
  console.log(div("Hundread"));// Number is Infinite!
  console.log(div("100"));//Number is Finite.


//! An idea that never ends... something is like numbers but not a number. is infinite.......


// ***************************************************************
// The toFixed() is a method of the Number object
// ===> Convert a number into a string, rounding the number to keep as many decimals as you like
//! exampleOne
let number = 9.3546737372 ;
let fixedNumber = number.toFixed(2) ;
console.log('fixedNumber ==>', fixedNumber); // '9.35' 

//! exampleTwo
let num = 54.324523423424 ; 
let fixedNum = num.toFixed(1) ; 
console.log('fixedNum ==>', fixedNum); // '54.3'

//! exampleThree
let intNum = 54 ; 
let fixedIntNum = intNum.toFixed(2) ; 
console.log('fixedNum1 ==>', fixedIntNum); // '54.00' 
console.log(fixedIntNum+5)

//! typeof without toFixed() and typeof with toFixed()
console.log('typeof number ==>', typeof number); // number
console.log('typeof fixedNumber ==>', typeof fixedNumber); // string 

// *************************************************

// A variable is a named reference to a value ==> a storage location pair together with an associated symbolic name, which contains information referred to as value. ===>  means anything that can vary and it can be changed anytime.
// in JavaScript we use variables like we use containers ==> for storage,  specifically containers for storing data values.
let x = 5 ; 
let y = 5 ;
let sum = x + y ; 
console.log('sum ==>', sum) // ==> 5 + 5 = 10

//! exampleOne
let message = 'Hello ' ; 
let name = 'Sara' + '!' ; 
let outPut1 = `${message}, ${name}` ; 
console.log('outPut1 ==>', outPut1) ; // Hello, Sara!
// changing the message ===>
message = 'Bye' ; 
let outPut2 = `${message}, ${name}` ; 
console.log('outPut2 ==>', outPut2) ; // Bye, Sara! 

//! exampleTwo 
let messageTwo = 'Good morning ' ;
let nameTwo = 'Emma' + '!'; 
console.log('messageTwo ==>', messageTwo + nameTwo) ; // Good morning Emma!
// changing the message ===>
messageTwo = 'Goodnight ' ; 
console.log('messageTwo ==>', messageTwo + nameTwo) ; // Goodnight Emma!

//! let lastName = 'Smedlund' ; 
// lastName ===> (variable name)
// = ===> (assigning a value)
// 'Smedlund' ===> (declaring the value) 


// ==> let : declares a local variable 
// ==> const : symbolic constant; declares an immutable variable


// ****************************************************************************

//! parseInt(): Converts a given value to an integer number, if not possible to convert then returns NaN  value.
// The string value to convert to an integer number.
console.log(parseInt("35")); // 35
// If the given value is of integer type, then it returns number as it is.
console.log(parseInt(24)); // 24
console.log(parseInt(12 + 12)); // 24
console.log(parseInt("123ABC4")); // 123
//The console log returned 123 since the parseInt() method will parse the string value '123ABC4' until a non-numeric character is encountered and then it will discard the remainder of the string, returning the integer value.
console.log(parseInt("ABC123")); // NaN
//The console log returned NaN since the string value 'ABC123' does not start with a numeric value.
// If the given value is of float type, then it discards the float part and returns integer part of the number
console.log(parseInt(3.142)); // 3
console.log(parseInt(1.6 + 1.6)); // ==> 3.2 ==> 3
// More example
console.log(parseInt("2" + "4")); // ==> "24" ==> 24
console.log(parseInt("2" + "4a")); // ==> "24a" ==> 24
console.log(parseInt("2a" + "4a")); // ==> "2a4a" ==> 2
console.log(parseInt(true)); // NaN

//*************************************** */
// parseFloat + parseInt both number methods that basically take a string and try to convert it into a number
let x = 5;
let y = "10.999 is a peanut";
let result1 = x + y
console.log(result1); // 510.999 is a peanut // string --> because x (number) is coherced to a string and they are concatenaded
​
// let yInt = Number.parseInt(y);
// let result2 = x + yInt;
// console.log(result2); // 10 (Integer)
​// Integer numbers don't have decimal values (15)
// Float numbers have decimal value (15.33, 115.800000, etc...)
let yFloat = Number.parseFloat(y);
let result3 = x + yFloat;
console.log(result3); // 15.999 (Floating number)


