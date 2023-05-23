let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let todoList = [];

function remember(task) {
    todoList.push(task);
}

function getTask(task) {
    return todoList.shift(task);
}

function rememberUrgently(task) {
    return todoList.unshift(task);
}


remember("home");
rememberUrgently("house");
// console.log(todoList[0]);

// working on indexOF and lastIndexOf
// console.log(arrays.indexOf(3));
// console.log(arrays.lastIndexOf(8));
// elaborating on concat and slice functions for arrays
// slice functions


// console.log(arrays.slice(4, 6));
// console.log(arrays.slice(2));

// The concat function combined with slice functions

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));

}

// console.log(remove(arrays, 2))

function caseInSwitch(val) {
    let answer = "";

    // Only change code below this line


    switch (val) {
        case 1:
            answer = "alpha"
            break
        case 2:
            answer = "beta"
            break
        case 3:
            answer = "gamma"
            break
        case 4:
            answer = "delta"

    }



    // Only change code above this line
    return answer;
}
console.log(caseInSwitch(4));