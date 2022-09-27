
//https://elzero.org/typescript-assignments-lessons-from-1-to-11/
//assignment 02
{
function calculate(numOne:  number, numTwo: number) {
    return numOne + numTwo;
  }
  
console.log(calculate(10, 20)); // 30
//console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2
}
//assignment 03
{
function printInfo(valueOne: number | string, valueTwo: number | string) {
    return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
  }
  
  console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
  console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
  ///console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work
}
//assignment 05
{
/*
We need to modify the config file to achieve the desired
The username here has an error because the Compiler has concluded that the data type is Any and we need to skip this error
We have a variable named rank that is not in use and we need to show an error that alerts us
We have a parameter with the name age that is not used and we need to show an error that alerts us
We have a line in the console that won't work and we want to alert us about this error
*/
// function reportErrors(username, age: number) {
//     let rank = "Professor";
//     return `Username: ${username}`;
//     console.log("We Will Not Reach Here");
//   }
  
//   console.log(reportErrors("Elzero", 40));
}
//assignment 06
{
let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c) {
  return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
//console.log(showMyDetails(????)); // Elzero
console.log(showMyDetails(nothing,nothing,theName)); // Elzero
}
//assignment 07
{
    function showMsg(user?: string, age?: string|number, country?: string) {
    return `${user}${age}${country}`;
  }
  
  console.log(showMsg());
  console.log(showMsg("Elzero"));
  console.log(showMsg("Elzero", 40));
  console.log(showMsg("Elzero", "40", "Egypt"));

}
