/*
word:
inputs:
  input type string. "()"
output
  true if the parentheses are balanced
  false if the parentheses are not balanced
*/

function word (input) {
    //if thisWord ===( "()","(())" )
    var parenCount = 0;
    for(var i = 0; i < input.length; i++){
      var inputCharacter = input[i]
      if (inputCharacter == ("("))  
        parenCount++ 
      else if (inputCharacter == (")")) {
        parenCount--
        if (parenCount < 0)
          return false
      }
    } 
    return parenCount === 0; 
  }
  
  
  console.log(word("()") == true); // true
  console.log(word(")(") == false);
  console.log(word("())") == false); // false
  console.log(word("(()") == false); // false
  console.log(word("((((") == false); // false
  console.log(word(")") == false); // false
  console.log(word("(((((((((()))())))))))") == true); // true
  console.log(word("()()") == true); // true
  console.log(word(")))))))") == false); // false
  console.log(word("((") == false);
  
  console.log(word("[]{}()")); // true
  console.log(word("()(()(([[]][][{}{}])))")); // true
  console.log(word("[}")); // false
  console.log(word("(]")); // false
  console.log(word("[{]}")); // false