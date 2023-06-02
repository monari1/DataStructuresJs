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

// function testElseIf(val) {
//     if (val > 10) {
//         return "Greater than 10";
//     } else if (val < 5) {
//         return "Smaller than 5";
//     } else {
//         return "Between 5 and 10";
//     }


// }

// console.log(testElseIf(50));

// the logical flow of logical operations of if, else if and else
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

// console.log(orderMyLogic(30));


function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 20) { return "Medium"; } else if (num < 30) { return "Large"; } else if (num >= 20) {
        return "Huge";
    }


    // Only change code above this line
}

// console.log(testSize(20));

// Default in switch statement acts like else

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            answer = "apple"
            console.log(answer);
            break;
        case answer = "b":
            answer = "bird"
            console.log(answer);
            break;
        case "c":
            answer = "cat"
            console.log(answer);
            break;
        default:
            console.log("stuff");
            break;
    }



    // Only change code above this line
    return answer;
}

// switchOfStuff("a");

// Multiple Identical Options in Switch Statements
// Write a switch statement to set answer for the following ranges:
// 1-3 - Low
// 4-6 - Mid
// 7-9 - High

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "low"
            console.log(answer);
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid"
            console.log(answer);
            break;
        case 7:
        case 8:
        case 9:
            answer = "high"
            console.log(answer);

            break;


    }



    // Only change code above this line
    return answer;
}

// sequentialSizes(1);