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

// MINUS -----
console.groupCollapsed('MySubtract');

let mySubtractSum = MySubtract(994, 713);
console.log(mySubtractSum);

console.groupEnd();

// GANGE *****
console.groupCollapsed('MyProduct');

let myProductSum = MyProduct(7, 14);
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

// minusser to værdier, retunerer summen af 2 'numbers'
function MySubtract(valueOne, valueTwo){

    let result = valueOne - valueTwo;
    return result;
}

// Ganger to værdier, retunerer summen af 2 'numbers'
function MyProduct(valueOne, valueTwo){

    let result = valueOne * valueTwo;
    return result;
}

// ANONYMOUS FUNCTIONS -----------------------------------------------------------

let myvar = 'var';

console.log(
    function(){
        
    }
);

let myButton = document.getElementById('hej');

/*myButton.addEventListener('click', function(event) {

    console.log(event.target.innerText);
    alert('hej');
});*/

/* ARROW FUNCTION => */
myButton.addEventListener('click', (e) => { 

    console.log(e.target.innerText);
    alert('hej');
});