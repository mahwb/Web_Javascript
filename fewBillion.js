function fewBillion(days, value) {
    var penny = 0.01;
    for (i = 1; i <= days; i++) {
        if (penny > value) {
             return console.log("Earned", value + " at", i);
        }
        penny += penny;
    }
    penny -= 0.01;
    console.log(penny);
}

//tests
fewBillion(30);
fewBillion(1);
fewBillion(2);
fewBillion(10);

//extra cases
fewBillion(1000, 10000);
fewBillion(1000, 1000000000);