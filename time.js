function time (hour, min, period) {
    var min_string = "";
    if (min > 30) {
        min_string = "almost";
    } else {
        min_string = "just after";
    }
    var period_string = "";
    if (period == "PM") {
        period_string = "in the evening";
    } else if (period == "AM") {
        period_string = "in the morning";
    } else {
        return console.log("Period is not AM/PM.");
    }
    console.log("It's", min_string, hour, period_string);
}

time(8, 50, "AM");
time(7, 15, "PM");
time(4, 13, "cool");
time(123, -1, "PM");