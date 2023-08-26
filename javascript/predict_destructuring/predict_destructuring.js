// #1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar, otherRandomCar ] = cars

//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
console.log("Problem 2 below this line")
// Answer: Tesla, Mercedes
//-------------------------------

// #2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);
console.log(otherName);
console.log("Problem 3 below this line")

// Answer: ReferenceError: name is not defined,(when the first console.log is commented out 'othername' prints Elon), Elon

// #3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
// Answer: 12345, undefined
console.log("Problem 4 below this line")
//------------------------------------

// #4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first, third)
console.log(second)
console.log(first == second);
console.log(first == third);

// Answer: False, True

// #5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// Answer: value, (the array itself) which is [1, 5, 1, 8, 3, 3], 1, 5