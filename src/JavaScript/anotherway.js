//in this function, the variable "checkParen" is defined with "str"
//as the input value. "brackets" is created into the expression that
//uses the ".push" method to append new elements to the end of the 
//array and returns the new length of the array. If the str input is
//"(" else if str is equal to ")" brackets.length is returned with 
//console.log method displaying whether each checkParen expression is 
//true or false depending on what order the characters are in the string.


function checkParen(str) {
    let brackets = [];
    for (let i = 0; i < str.length; i++) {     
        if (str[i] == "(") {
            brackets.push(str[i]);
        } else if (str[i] == "(") {
            if (brackets[brackets.length - 1] === ")") brackets.pop();
            else brackets.push("");
        }
    }
    return brackets.length;
}
console.log(checkParen("()") == true);
console.log(checkParen("()))") == true);
console.log(checkParen("()(()(([[]][][{}{}]))))") == false);