#write a function that finds whether
# a given string has balanced parentheses or not.
#using stack method

## below there are 2 variables created, "open_list", and "closed_list"
## with the values of different characters of square brackets, curly brackets,
## and parentheses. 
open_list = ["[","{","("]
closed_list = ["]","}",")"]

## the variable below "charCheck" is defined with the "myStr" input
## stack is being utilized with myStr with an "if-else"
## statement declaring that if open_list is appended calling it with (i)
## it gets pushed in the stack, and when the closed_list is encountered,
## match it with the top of the stack and pop it. If stack is an empty
## string it is balanced, if not then it is unbalanced.

def charCheck(myStr) :
  stack = []
  for i in myStr:
    if i in open_list:
      stack.append(i)
    elif i in closed_list:
      pos = closed_list.index(i)
      if ((len(stack) > 0) and
          (open_list[pos] == stack[len(stack)-1])):
        stack.pop()
      else:
        return "Unbalanced"
  if len(stack) == 0:
    return "Balanced"
  else:
    return "Unbalanced"
    

#Output
string = "{[]{()}}"
print(string, "-", charCheck(string))

string = "[{}{})(]"
print(string, "-", charCheck(string))

string = "[{]}"
print(string, "-", charCheck(string))


  