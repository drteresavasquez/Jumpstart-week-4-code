/********** SIMPLE FUNCTIONS **********/
//Example ONE of a declared function. This is an example of a longhand function (AKA function expression).
let ourFirstFunction = function(){
    console.log("Hello World!");
}
// Call the function
ourFirstFunction();

//Example TWO of a declared function. This is an example of a shorthand function (AKA function declaration).
function ourSecondFunction(){
    console.log("Hello Again!");
}
// Call the function
ourSecondFunction();

/********** PASSING ARGUMENTS INTO FUNCTION **********/
//This function accepts and argument: name
let sayHelloTo = function (name){
    console.log(`Hello, ${name}!`);
}
//Call the function
sayHelloTo("Teresa");

//This function accepts and integer that will tell it how many cat faces to draw in the console
function drawCats(howManyTimes){
    for (let i = 0; i < howManyTimes; i++){
        console.log(`${i} =^.^=`);
    }
}
// Call the function
drawCats(10);

/********** PASSING MULTIPLE ARGUMENTS INTO FUNCTION **********/
// This function accepts 2 arguments. One an integer the other either a string or integer.
function printMultipleTimes(howManyTimes, whatToDraw){
    for (let i = 0; i < howManyTimes; i++){
        console.log(`${i} ${whatToDraw}`);
    }
}
// Call the function
printMultipleTimes(10, "=^.^=");
printMultipleTimes(10, "??");

/********** FUNCTION THAT RETURNS A VALUE **********/
// This function accepts an integer and returns the value multiplied by two
let double = function(number){
    return number * 2;
}
//Call the function
console.log("The number multiplied by 2:", double(5));
