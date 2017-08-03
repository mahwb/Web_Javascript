function fancyArray(arr, reversed) {
    if (reversed) {
        for (i = arr.length - 1; i >= 0; i--) {
            console.log(i + " ->", arr[i]);
        }
    } else {
        for (i = 0; i < arr.length; i++) {
            console.log(i + " ->", arr[i]);
        }
    }
}

//test cases
arr = ["James", "Jill", "Jane", "Jack"];
fancyArray(arr);
fancyArray(arr, true);