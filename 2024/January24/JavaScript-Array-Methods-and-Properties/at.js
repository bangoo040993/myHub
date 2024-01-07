//AT() method returns the element at the specified index in an array.
// EXAMPLE: AT() METHOD //

const brakeline = "-------------------------------"

//at() method using an array of of numbers
const array = [10, 20, 30, 40]; // An array of numbers
console.log(array.at(2)); // Outputs: 30
console.log(array.at(-1)); // Outputs: 40
console.log(array.at(-5)); // Outputs: undefined
console.log("🚀 ~ file: at.js:5 ~ brakeline:", brakeline)


//at() method using a strings
const string = "Hello World"; // A string


console.log(string.at(2)); // Outputs: l
console.log(string.at(-1)); // Outputs: d
console.log(string.at(-58)); // Outputs: undefined
console.log("🚀 ~ file: at.js:5 ~ brakeline:", brakeline)

//at() method if left empty it will return the first element or at(0)
console.log(array.at(0)) // Outputs: 10 
console.log(string.at()) // Outputs: H

