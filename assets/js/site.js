const myConst='test';
let myVar='var';

console.log('hej fra global');

MyCoolFunction('warning 1');
MyCoolFunction('warning 2');
MyCoolFunction('ikke en warning');


// PLUS +++++
console.group('MyAddition');

let myAdditionSum = MyAddition(176, 287);
console.log(myAdditionSum);

console.groupEnd();

// GANGE *****
console.group('MyProduct');

let myProductSum = MyProduct(7, 3);
console.log(myProductSum);

console.groupEnd();



// FUNCTIONS -----------------------------------------------------------

function MyCoolFunction(myWarningText) {

    console.log(myWarningText);
    MyOtherFunction();
}

function MyOtherFunction() {

    console.log('hej fra MyOtherFunction')
}

// plusser to værdier, retunerer summen af 2 'numbers'
function MyAddition(valueOne, valueTwo){

    let result = valueOne + valueTwo;
    return result;
}

// Ganger to værdier, retunerer summen af 2 'numbers'
function MyProduct(valueOne, valueTwo){

    let result = valueOne * valueTwo;
    return result;
}

