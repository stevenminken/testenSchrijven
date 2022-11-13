// Jest documentatie: https://jestjs.io/docs/getting-started

const {add, makePersonObject} = require('../index.js');

test('The add() function takes two numbers and sums them together', () => {
//    ARRANGE
    const number1 = 5;
    const number2 = 10;
//    ACT
    const outcome = add(5, 10);
//    ASSERT
    expect(outcome).toEqual(15);
})

test('De makePersonObject() functie maakt een persoon object met de waardes die hij mee krijgt', () => {
    const personName = 'Piet';
    const personAge = 23;

    const personObject = makePersonObject(personName, personAge);

    expect(personObject).toHaveProperty('name');
    expect(personObject).toHaveProperty('age', personAge);

})