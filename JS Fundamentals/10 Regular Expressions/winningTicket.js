function winningTicket(input) {
    input = input[0].split(/\s*,\s*/g);
    let validPattern = /^.{20}$/;
    for (const ticket of input) {
        if (!validPattern.test(ticket)) {
            console.log("invalid ticket");
        } else {
            let halfPattern = /@{6,10}|#{6,10}|\${6,10}|\^{6,10}/;
            let firstHalf = ticket.substring(0, 10);
            let secondHalf = ticket.substring(10);
            if (halfPattern.test(firstHalf) && halfPattern.test(secondHalf)) {
                let firstMatch = firstHalf.match(halfPattern)[0];
                let secondMatch = secondHalf.match(halfPattern)[0];
                if (firstMatch[0] != secondMatch[0]) {
                    continue;
                } else {
                    let matchCharecter = firstMatch[0];
                    let matchLength = Math.min(firstMatch.length, secondMatch.length);
                    if (matchLength == 10) {
                        console.log(`ticket "${ticket}" - ${matchLength}${matchCharecter} Jackpot!`);
                    } else {
                        console.log(`ticket "${ticket}" - ${matchLength}${matchCharecter}`);
                    }
                }
            } else {
                console.log(`ticket "${ticket}" - no match`);
            }
        }
    }
}
winningTicket(['validticketnomatch:(,  $$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey']);