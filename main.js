// 1
console.log(Math.random() * 100);
// 2
console.log(Math.random() * 10000);
// 3
console.log(Math.random() * 55);
// 4
function randomNumber(inputNumber) {
return Math.random() * inputNumber ++ ;
}
console.log(randomNumber(3));
// 5
function matchNumbers(inputNumber) {
    var randomNum = Math.random();
    if (inputNumber > 0 && inputNumber < 9) {
        if (inputNumber == randomNum) {
            return "we have a match";
        }
    }
    return "we Don`t have a match";
}
console.log(matchNumbers(2.55));
// 6
function getMatchNumbers(inputNumber) {
    var randomNumber = Math.random();
if(inputNumber>0 && inputNumber<99) {
    if(inputNumber == randomNumber) {
        return "we have a match";
    }
}
return "we don`t have a match";
}
console.log(getMatchNumbers(37.5555));
// 7
function printNameGetMatch(inputName, inputNumber) {
    var randomN = Math.floor(Math.random());
    if (inputNumber > 0 && inputNumber < 10) {
    }
    if (inputNumber == randomN) {
        console.log(`Congratulations ${inputName} the wining number is ${randomN}`);
    }
    else {
        console.log(`Sorry ${inputName} the wining number is ${randomN}`);
    }
}
var result = printNameGetMatch("anat", 9);





