#to check for balanced parentheses 
# in an expression using elimination based code.


#Shorter refactored code to output whether any set of 
#open and closed characters are balanced or unbalanced
#meaning they have equal brackets for example on either
#side in a string.

#in this function the variable "brackets" is working with input of
#my_string to output in the "print" if else statement determining
#whether or not the string is balanced.
def check(my_string):
    brackets = ["()", "{}", "[]"]
    while any(x in my_string for x in brackets):
        for br in brackets:
            my_string = my_string.replace(br, "")
        return my_string
    
    
#Output
string = "{{[]{()]}"
print (string, "-", "Balanced"
       if check(string) else "Unbalanced")

string = "{[]{()}}"
print (string, "-", "Balanced"
       if check(string) else "Unbalanced")