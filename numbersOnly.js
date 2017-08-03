function numbersOnly(arr) {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function numbersOnly2(arr) {
    for (i = 0; i < arr.length; i++) {
        if (!(typeof arr[i] == "number")) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

var arr = [1, "apple", -3, "orange", 0.5];
var newArray = numbersOnly(arr);
console.log(newArray);

console.log(numbersOnly2(arr));