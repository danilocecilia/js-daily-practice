# js-daily-practice

All of this exercises are taken from a mailing list I receive everyday from https://www.dailyjavascript.io

# Day 1

In Unix based systems, to get to a directory, a series of directory names, slashes, and single and 
double dots are used. In this system, a single dot means stay within the nearest parent directory, 
and is therefore redundant. A double dot means to move up one directory. The following examples 
illustrate this usage:

"/root/." = "/root"

"/games/football/.." = "/games"

"/weather/./clouds/../rain" = "/weather/rain"

For this challenge, create a function called simplifiedDirectory() where the input will be a string 
containing a route to a directory, and the return value has to be the directory route reduced to it's 
simplest form.

# Day 02

When you're taking your online or in-person coding challenge, you will be time restricted. Because of this, knowing a few frequently used methods, belonging to particular object types, can be very useful.

Some of these include:

for strings: indexOf (which finds the index of a string within a string), substr() (which returns a substring from within a string), and split() (which returns a string split into an array)

for arrays: sort() (sorts an array), map() (puts each element into a function and stores the return values into a new array), and join() (combines all the elements of an array into a string)

for numbers: parseInt() (converts a string into an integer if it contains integers), parseFloat() (converts a string into a floating point number if it contains a floating point number), isNan() (used to test if a variable is a number, returns true if variable is NOT a number, and false if variable is a number).

# Day 03

You are given an integer and you have to return a new integer that is the square of every digit in the 
original integer. For example:

12 = 14 because 1 squared is 1, and 2 squared is 4.
1361 = 19361 because 1 squared is 1, 3 squared is 9, 6 squared is 36, and 1 squared is 1.

Make a function called makeSquares() that takes an integer as an input, and returns a new integer in which the 
digits are the squares of the input integer.
