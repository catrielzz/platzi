function newFunction(name, age, country){
    var name = name || 'yoel';
    var age = age || 24;
    var country = country || 'AR';
    console.log(name, age, country);
}

// es6
function newFunctionES6(name = 'Yoel', age = 24, country = 'AR') {
    console.log(name, age, country);
}

newFunctionES6();
newFunctionES6('Axel', 23, 'AR');

let hello = 'hello';
let world = 'world';
let epicPhrase = hello + world;
console.log(epicPhrase);

let epicPhraseES6 = `${hello} ${world}`;
console.log(epicPhraseES6);

let lorem = "lorem ipsum separado de muchas cosas \n"
+ " otro lorem impsum";

let loremES6 = `another epic phrase
now is another phrase`;

console.log(lorem);
console.log(loremES6);

let person = {
    'name': 'Yoel',
    'age': 24,
    'country': 'AR'
}

console.log(person.name, person.age);

// Object Deconstructuring
let {name, age, country} = person;

console.log(name, age, country);

// Spread
let team = [1, 2, 3];
let team2 = [4, 5, 6];

let education = [0, ...team, ...team2];
console.log(education);

{
    var globalVar = 'Global var';
}

{
    // variable que solo se puede utilizar en su scope
    let globalLet = 'Global let';
    console.log(globalLet);
}

console.log(globalVar);

// constante
const a = 'b';

let name = 'Yoel';
let age = 24;
// ES5
obj = {name:name, age:age};
// ES6
objES6 = {name, age};
console.log(obj);
console.log(objES6);

// Arrow Functions
const names = [
    {name: 'Yoel', age: 24},
    {name: 'Axel', age: 24}
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
});

let listOfNamesES6 = names.map( item => {
    console.log(item.name);
});

const listOfNamesES62 = (name, age) => {
    // ...
}

const square = num => num * num;

// Promises
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('Resolved!')
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
.then(res => console.log(res))
.then(res => console.log('Hello'))
.catch(err => console.log(err));






