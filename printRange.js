function printRange(start, end, skip) {
    if (skip == null) {
        skip = 1;
    }
    if (end == null) {
        end = start;
        start = 0;
    }
    for (i = start; i < end; i += skip) {
        console.log(i);
    }
}

//test cases
printRange(2, 10, 2);
printRange(4, 8);
printRange(4);