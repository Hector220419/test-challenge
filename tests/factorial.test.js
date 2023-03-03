// Methods imported
const {factorialNumber} = require('../factorial');

// Expect 5 ->120
test('Test Factorial number',() =>{
    expect(factorialNumber(5)).toBe(120);
});

// Expect 8 -> 40320
test('Test Factorial number',() =>{
    expect(factorialNumber(-8)).toBe(40320);
});
