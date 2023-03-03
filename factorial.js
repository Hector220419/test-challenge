/*
3. Calculate the factorial of a number using recursion
*/

function factorialNumber(number){
    if(number == 0) return 1;
    else if (number > 0) return (number * factorialNumber(number - 1));
    else return factorialNumber(Math.abs(number));
}

module.exports = {factorialNumber};