# js-daily-practice

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