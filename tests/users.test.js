// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');

// Make a test to verify if the method getUser(id) works correctly
//getUser returns all object, so:
test('Test Users',() =>{
    expect(getUsers()).toStrictEqual(
        [
            {
                id: 1,
                username: "hpLover4",
                email: "sirious90@gmail.com",
                password: "hArrydotCom"
            },
            {
                id: 2,
                username: "piderman",
                email: "parkerdapete@gmail.com",
                password: "2D$aLzX9(_2"
            },
            {
                id: 3,
                username: "goosemotionless",
                email: "dotmeheart@outlook.com",
                password: "12345abcde"
            },
            {
                id: 4,
                username: "unsurejudy",
                email: "babariley77@gmail.com",
                password: "Kashmir1970"
            }
        ]
    );
});

test('Test UserID #2', () =>{
    expect(getUser(2)).toStrictEqual(
        {
            id: 2,
            username: "piderman",
            email: "parkerdapete@gmail.com",
            password: "2D$aLzX9(_2"
        }
    );
});

// Verify any data of the resulting object you want

// READ documentation