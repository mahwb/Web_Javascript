function daysUntilMyBirthday(day) {
    while (day != 0) {
        if (day > 30) {
            console.log(day + " days until my birtday. Such a long time... :(");
        } else if (day <= 30 && day > 1) {
            console.log(day + " DAYS UNTIL MY BIRTHDAY!!");
        } else if (day == 1) {
            console.log(day + " DAY UNTIL MY BIRTHDAY!!");
        }
        day--;
    }
    console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
    console.log("♪ღ♪░H░A░P░P░Y░░B░I░R░T░H░D░A░Y░♪ღ♪");
    console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
}

daysUntilMyBirthday(5);
daysUntilMyBirthday(1);
daysUntilMyBirthday(60);
daysUntilMyBirthday(0);
daysUntilMyBirthday(40);