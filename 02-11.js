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


/**********************************************************************************************************************
// ! **************   unshift / shift **************

// Another two arrays methods that have to do with adding or removing elements from the array.
// The name comes originally from another programming languages that predate JavaScript.  Became standard among them. (To know more search for "stacks" and "cues".)

// ! unshift()
// works very similar to push()
// adds element to the beginning of the array i.e. adds elemtent to the left.

const pizza = ['dough'];
console.log(pizza); // ['dough']

pizza.unshift('tomato');
console.log(pizza); // [ 'tomato', 'dough' ]

pizza.unshift('cheese');
console.log(pizza); // [ 'cheese', 'tomato', 'dough' ]

pizza.unshift('basil');
console.log(pizza); // [ 'basil', 'cheese', 'tomato', 'dough' ]

//! shift()
// works very similar to pop()
// removes elements FROM the beginning fo the array i.e. removes first element from the left.

console.log(pizza.shift()); // [ 'basil' ]
console.log(pizza); // [ 'cheese', 'tomato', 'dough' ]

pizza.shift()
console.log(pizza) // [ 'cheese', 'tomato', 'dough' ]

pizza.shift()
console.log(pizza); // [ 'tomato', 'dough' ]

pizza.shift(); 
console.log(pizza); // []


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
