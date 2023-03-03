/*
1. Write a function that takes in a number and returns one of the following:
- If the number is divisible by 3, return 'Fizz'.
- If the number is divisible by 5, return 'Buzz'.
- If the number is divisible by 3 and 5, return 'FizzBuzz'
- Else, return the number passed as an argument
*/
function fizzBuzz(number){
    if(number % 3 == 0 && number % 5 == 0) return 'FizzBuzz';
    if(number % 5 == 0) return 'Buzz';
    if(number % 3 == 0) return 'Fizz';
    else return getNumber(number);
}
 
getNumber = (number) => number;

module.exports = {fizzBuzz,getNumber};