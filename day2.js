/*

When you're taking your online or in-person coding challenge, you will be time restricted. Because of this, knowing a few frequently used methods, belonging to particular object types, can be very useful.

Some of these include:

for strings: indexOf (which finds the index of a string within a string), substr() (which returns a substring from within a string), and split() (which returns a string split into an array)
for arrays: sort() (sorts an array), map() (puts each element into a function and stores the return values into a new array), and join() (combines all the elements of an array into a string)\
for numbers: parseInt() (converts a string into an integer if it contains integers), parseFloat() (converts a string into a floating point number if it contains a floating point number), isNan() (used to test if a variable is a number, returns true if variable is NOT a number, and false if variable is a number).

*/

// Examples on strings

const myString = "This is my String!!";

const indexOf = myString.indexOf('String');
console.log('Position found is: ' + indexOf);


const substring = myString.substr(5,10);
console.log('Substring starting at position 5 is: ' + substring);

const splittedString = myString.split(' ');
console.log('Split string in substring returned as an Array');

// Examples on arrays

const myArray = [1, 2, 4, 6, 5, 3];
console.log('Original Array: ' + myArray);
console.log('Sorted   Array: ' + myArray.sort());

myArray.map(value => console.log('map - Current value is : ' + value));

console.log('Usage of join() function => '+ myArray.join('-'));

const myStringNumber = '1';

console.log('Convert string number to actual number: ' + parseInt(myStringNumber));

const myStringfloat = '1.29';

console.log('Convert string float to actual float number: ' + parseFloat(myStringfloat));

const myStringIsNotNumber = 'Hello';

console.log('Check isNaN function should return true if the argument its not a number: ' + isNaN(myStringIsNotNumber));

