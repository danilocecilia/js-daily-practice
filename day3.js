/*

You are given an integer and you have to return a new integer that is the square of every digit in the 
original integer. For example:

12 = 14 because 1 squared is 1, and 2 squared is 4.
1361 = 19361 because 1 squared is 1, 3 squared is 9, 6 squared is 36, and 1 squared is 1.

Make a function called makeSquares() that takes an integer as an input, and returns a new integer in which the 
digits are the squares of the input integer.

*/

const makeSquares = (input) => {
    if(!input || isNaN(input)) return 'The input must be a number';

    const length = input.toString().length;
    let result = '';

    for (let i = 0; i < length; i++) {
        const digit = input.toString().charAt(i);
        
        result += (parseInt(digit) * parseInt(digit)).toString();
    }    

    return parseInt(result);
}

console.log(makeSquares('0'))
console.log(makeSquares('12'));
console.log(makeSquares(1361));