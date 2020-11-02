/*1- if.. else statement
2- pop()
3- push()
4- shift()
5- unshift()
6- includes()
7- reverse()*/

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