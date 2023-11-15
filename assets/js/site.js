const myConst='test';
let myVar='var';

console.log('hej fra global');

MyCoolFunction('warning 1');
MyCoolFunction('warning 2');
MyCoolFunction('ikke en warning');

function MyCoolFunction(myWarningText) {

    console.log(myWarningText);
    MyOtherFunction();
}

function MyOtherFunction() {

    console.log('hej fra MyOtherFunction')
}

// PLUS +++++
let myAdditionSum = MyAddition(176, 287);

console.log(myAdditionSum);

function MyAddition(valueOne, valueTwo){

    return valueOne + valueTwo;
}

// GANGE *****
let myMultiplySum = MyMultiply(7, 3);

console.log(myMultiplySum);

function MyMultiply(valueOne, valueTwo){

    return valueOne * valueTwo;
}


