// greet('Timmy');

function capitalize(string) {
    return string.toUpperCase()
}

// console.log(capitalize('hans'));

// function declaration
function greet(name, greeting) {
    console.log(greeting + ' ' + capitalize(name))
}

// greet('timmy', 'hello');

// create a function that gets a string as a parameter and
// return a string that says 'the number of letters in the name
// is even - or odd

function oddOrEven(name) {
    // todo
    if (name.length % 2 === 0) {
        return 'the name has an even number of chars';
    } else {
        return 'the name has an odd number of chars';
    }
}

// console.log(oddOrEven('tim'));

// const greeting = greet('emily');
// console.log(greeting);

// function expression
const welcome = function (name) {
    console.log(name);
}

// welcome('Kevin')

function sum(a, b) {
    // todo
    const resultFromFunction = a + b;
    // console.log(resultFromFunction);
    // return resultFromFunction;
    // return resultFromFunction;
    return resultFromFunction;
}

// const result = sum(3, 7);
// console.log(result);

// Arrays
// const numbers = [1, 2, 3, 4, 5];
// const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.table(letters);
// const mixed = [{}, null, true];
// console.log(mixed);
const letters = [];
letters[2] = 'a';
letters[2] = 'b'
// console.log(letters[0]);
// multidimensional array
const multidimensional = [['a', 'b'], ['x', 'y']];
// access b from multidimensional
// console.log(multidimensional[0][1])


const names = [];
names.push('timmy');
names.push('kevin');
// console.log(names);

// pop() removes the last element and returns it
const lastName = names.pop();
names.pop();
// console.log(lastName);
// console.log(names);

names.unshift('hans');
names.unshift('jonas');
// console.log(names);

names.shift();
// console.log(names);

const countries = ['uk', 'usa', 'france'];

// countries.splice(1, 1);
countries.splice(2, 1, 'germany')
// console.log(countries);

// iterating over an array
// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i]);
// }

// you can return from a for loop (but not from a forEach loop)
function findUK(countries) {
    for (let i = 0; i < countries.length; i++) {
        // console.log(country);
        if (countries[i] === 'uk') {
            return i;
        }
    }
}

// for of loop
for (let country of countries) {
    console.log(country);
}

console.log(findUK(countries))
// same with a forEach loop 
countries.forEach(function (country) {
    console.log(country);
});