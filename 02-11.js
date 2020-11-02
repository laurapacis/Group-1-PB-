/*1- if.. else statement
2- pop()
3- push()
4- shift()
5- unshift()
6- includes()
7- reverse()*/

/*********************************************************************************************************************  *****************************************If...Else***********************************************************
*********************************************************************************************************************/
//If - else statement is used to command multiple actions at once
// If; to indicate the starting action and outcome, could printed as true boolean
//else; to indicate what happens when the outcome is different than
//the main outcome, false action
let ane1 = 8;
let ane2 = 13
let ane3 = 5;
if (ane1 < ane2) {
console.log("true");
   } else {console.log ("false");
}// true


/*********************************************************************************************************************  *****************************************Array.pop***********************************************************
*********************************************************************************************************************/
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array. 
const saraFavCities = ['Stockholm', 'London', 'New York', 'Paris' ] ;
console.log(saraFavCities.pop()); // ==> returns Paris
console.log(saraFavCities); // [ 'Stockholm', 'London', 'New York' ]

saraFavCities.pop() ;
console.log(saraFavCities); // [ 'Stockholm', 'London' ]

//example 2
let saraFavColor = ['Yellow', 'Black', 'Pink', 'Green'] ;
let popped = saraFavColor.pop();

console.log(saraFavColor); // [ 'Yellow', 'Black', 'Pink' ]
console.log(popped); // Green

//example empty array
const saraEmptyArr = [] ; 
console.log(saraEmptyArr.pop()); // undefined 


/*********************************************************************************************************************  *****************************************Array.push***********************************************************
*********************************************************************************************************************/
// Push statement is used to fill in an empty variable box
let ane4 = "This ";
let ane5 = [];
let ane6 = "nice.";
ane5.push("is ");
//ane5.push("was ");
//ane5.push("should be ");
//the output variable will change according to what you push to it
console.log(ane4 + ane5 + ane6); // This is nice




/*********************************************************************************************************************  *****************************************Array.includes***********************************************************
*********************************************************************************************************************/
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
const arrayInes = [1,2,3];
console.log("includes(2)==>",arrayInes.includes(2)); // true
console.log("includes(4)==>",arrayInes.includes(4)); // false

// takes 2 Arguments 
// First argument: value to find
// Second argument: search from index
const petsInes = ["cat", "dog", "spider", "snake"];
console.log("includes('cat')==>", petsInes.includes("cat")); //true
console.log("includes('cat',2)==>", petsInes.includes("cat", 2)); // false

//If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.
console.log("includes('cat',4)==>", petsInes.includes("cat", 4)); // false

//If the computed index is less or equal than -1 * arr.length, the entire array will be searched.
console.log("includes('cat',-2)==>", petsInes.includes("cat", -2)); // false
console.log("includes('cat',-4)==>", petsInes.includes("cat", -4)); // true

//! JavaScript Array reverse() Method

// The arr.reverse() method is used for in-place reversal of the array. The first element of the array becomes the last element and vice versa.

//! Syntax: arr.reverse()

// Parameters: This method does not accept any parameter

// Return value: This method returns the reference of the reversed original array.


// In this example the reverse() method reverses the sequence of the array elements of arr.

let arr = [34, 234, 567, 4];
console.log("arr ==>", arr);

let reverseArr = arr.reverse();
console.log("reverseArr ==>", reverseArr); // ==> [ 4, 567, 234, 34 ]

// Example from live coding 

const arrToReverse = [77, 6, 9, "a", "b", 1, true, "test"];
console.log("arrToReverse ==>", arrToReverse); // arrToReverse ==> [ 77, 6, 9, 'a', 'b', 1, true, 'test' ]
arrToReverse.reverse()
console.log("arrToReverse ==>", arrToReverse); //  ==> [ 'test', true, 1, 'b', 'a', 9, 6, 77 ]


const arrToReverse2 = [77, 6, 9, "a", ["Alex", "Max", "Tomy"], "b", 1, true, "test"];

arrToReverse2[4].reverse()
console.log("arrToReverse2 ==>", arrToReverse2); // arrToReverse2 ==> [ 77, 6, 9, 'a', [ 'Tomy', 'Max', 'Alex' ], 'b', 1, true, 'test' ]


//! Reverse a String With Built-In Functions — with split(), reverse() and join()

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    let splitString = str.split(""); // let splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    let reverseArray = splitString.reverse(); // let reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    let joinArray = reverseArray.join(""); // let joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

reverseString("hello");


