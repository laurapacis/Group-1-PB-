/*1- if.. else statement
2- pop()
3- push()
4- shift()
5- unshift()
6- includes()
7- reverse()*/

/*********************************************************************************************************************  *****************************************Array.pop***********************************************************
*********************************************************************************************************************/
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array. 
const saraFavCities = ['Stockholm', 'London', 'New York', 'Paris' ] ;
console.log(saraFavCities.pop()); // ==> returns Paris
console.log(saraFavCities); // [ 'Stockholm', 'London', 'New York' ]

saraFavCities.pop() ;
console.log(saraFavCities); // [ 'Stockholm', 'London' ]

//example empty array
const saraEmptyArr = [] ; 
console.log(saraEmptyArr.pop()); // undefined 

//example 2
let saraFavColor = ['Yellow', 'Black', 'Pink', 'Green'] ;
let popped = saraFavColor.pop();

console.log(saraFavColor); // [ 'Yellow', 'Black', 'Pink' ]
console.log(popped); // Green


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
