/*
For this challenge, you will be given a string and an integer corresponding to the index of a letter in the string. 
You must take the letter at that index, double it, and return the new string with the doubled letter.

For example:

"water" and index 2 = "watter" because w is at index 0, a is at index 1, and t is at index 2. The t is doubled to tt, 
and therefore the new string is "watter"

"shipyard" and index 5 = "shipyaard"

You must create a function called doubleLetter() that takes two inputs, the first is a string and the second is an 
integer, and returns a new string with the letter at that integer index doubled.
*/

function doubleLetter(text, index) {
    var letter = text.charAt(index);

    var result = ""

    for (let i = 0; i < text.length; i++) {
        if(i === index) {
            result = result.concat(letter.concat(letter));
        }else {
            result = result.concat(text[i])
        }
    }
    return result;
}

console.log(doubleLetter('water', 2));
console.log(doubleLetter('shipyard', 5))