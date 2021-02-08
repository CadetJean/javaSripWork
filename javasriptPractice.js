/*condition ? expression1 : expression2;
read as is (condition true or false)
if yes provide expression1 else expression2
*/

function isUserValid(bool){
    return bool;
}

var answer = isUserValid(true)? "you may enter" : "access denied"

var automatedAnswer="your accoun number is "+ (isUserValid(false)? "1234":"not available")