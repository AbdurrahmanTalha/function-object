// var favorite_books = "In Search of Lost Time";
// var bookList = ['Ulysses ', 'Don Quixote', 'The Great Gatsby'];
// var ulyssesIndex = bookList.indexOf('Ulysses');

// bookList[0] = 'Story of the Abyss';

// bookList.push('From the Casos of World war 2');
// bookList.pop('Don Quixote');

// function 
// function declarition
function startFan() {
    console.log('TURN ON THHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE FANNNNNNNNNNNNNNNNNNNNNNNNNNNNNN')
}

function offFan() {
    console.log('TURN OF THHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE FANNNNNNNNNNNNNNNNNNNNNNNNNNNNNN')
}

// Function call/run/execute
// startFan();

// offFan();

// function shingaraKabo(taka, singaraPrice, name) {
//     console.log("Singara Khabo " + taka + " taka deya, amar nam " + name);
//     console.log("Ami apnake " + taka + " taka debo. amar namta mone rakhben amar nam " + name);
//     // var singaraPrice = 5;
//     var singaraQuantity = taka / singaraPrice;
//     console.log(singaraQuantity)
//     return singaraQuantity;
// }


// shingaraKabo(5000, 10, "Abdur Rahman Talha");

// function addTwoNumbers(num1, num2) {
//     console.log(num1, num2);
//     var add=num1+num2;
//     console.log(add);
//     return add;
// }

// var myNum1 = 10;
// var myNum2=20;
// addTwoNumbers(myNum1, myNum2);
// function newAdd(num1, num2,num3){
//     var add=num1+num2+num3;
//     return add;
// }
// var result=newAdd(addTwoNumbers(50,30),40,20);
// console.log(result);

function multiplacation(num1, num2, numb3) {
    var multiply = num1 * num2 * numb3;
    console.log(multiply)
    return multiply;
}

multiplacation(10, 24, 62);

function modulos(numbs1, numbs2, numbs3) {
    var modulous = numbs1 % numbs2 % numbs3;
    console.log(modulous);
    return modulous;
}

var result2 = modulos(14, 54, 62);

function substract(numt1, numt2, numt3) {
    var subtact = numt1 - numt2 - numt3;
    console.log(subtact);
    return subtact;
}
var result1 = substract(5000, 343, 31);
multiplacation(result1, result2, 20)

var weekDay = "Wednesday";

switch (weekDay) {
    case "Sunday":
        console.log("This is a meeting day");
        break;
    case "Monday":
        console.log("This is a study day");
        break;
    case "Tuesday":
        console.log("This is a coding day");
        break;
    default:
        console.log("This is off day");
        break;
}
