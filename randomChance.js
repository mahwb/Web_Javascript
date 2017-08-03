function randomChance(q, min) {
    if (q == 0) {
        return 0;
    } else {
        while (q != 0) {
            var win = Math.trunc(Math.random() * 100) + 1; // 1 to 100
            var wonq = Math.ceil(Math.random() * 50) + 50;
            if (win == 1) {
                q += wonq;
                console.log("You won", wonq + ". You have", q, "left.");
                if (q > min) {
                    return "You leave with " + q;
                }
            } else {
                q--;
            }
        }
        return q;
    }
}
console.log(randomChance(10, 200));