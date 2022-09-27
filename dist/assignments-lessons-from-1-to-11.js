"use strict";
{
    function calculate(numOne, numTwo) {
        return numOne + numTwo;
    }
    console.log(calculate(10, 20));
    console.log(calculate(+true, +true));
}
{
    function printInfo(valueOne, valueTwo) {
        return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
    }
    console.log(printInfo(10, 20));
    console.log(printInfo("10", "20"));
}
{
}
{
    let nothing;
    let theName = "Elzero";
    function showMyDetails(a = "", b = "", c) {
        return `${a}${b}${c}`;
    }
    console.log(showMyDetails(nothing, nothing, theName));
}
{
    function showMsg(user, age, country) {
        return `${user}${age}${country}`;
    }
    console.log(showMsg());
    console.log(showMsg("Elzero"));
    console.log(showMsg("Elzero", 40));
    console.log(showMsg("Elzero", "40", "Egypt"));
}
//# sourceMappingURL=assignments-lessons-from-1-to-11.js.map