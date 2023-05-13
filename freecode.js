// function testElse(val) {
//     let result = "";
//     // Only change code below this line

//     if (val > 5) {
//         result = "Bigger than 5";
//     } else {
//         return "5 or smaller"
//     }

//     // Only change code above this line
//     return result;
// }

// x = testElse(10);
// console.log(x);

// testing if, else if and else

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }


}

console.log(testElseIf(50));