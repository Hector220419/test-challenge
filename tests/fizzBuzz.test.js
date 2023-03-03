const {fizzBuzz, getNumber} = require('../fizzBuzz'); 

test('Test FizzBuzz', ()=>{
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
});

test('Test Buzz', ()=>{
    expect(fizzBuzz(5)).toEqual('Buzz');
});

test('Test Fizz', ()=>{
    expect(fizzBuzz(3)).toEqual('Fizz');
});

test('Test number', ()=>{
    expect(getNumber(11)).toEqual(11);
});