/*
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
*/

const simplifiedDirectory = (path) => {
    const parts = path.split('/');
    new_path = [];
    length = 0;

    for(var i = 0; i < parts.length; i++) {
        var part = parts[i];
    
        if(part === "" || part === "." || part === "..") {
            if(part === ".." && length > 0) {
                length--;
            }
            continue;
        }
        new_path[length++] = part;
    }

    if(length === 0) {
        return "/";
    }

    let result = '';

    for(var j = 0; j < length; j++) {
        result += `/${new_path[j]}`;
    }

    return result;
}

console.log(simplifiedDirectory("/weather/./clouds/../rain"));
console.log(simplifiedDirectory("/root/."));
console.log(simplifiedDirectory("/games/football/.."));