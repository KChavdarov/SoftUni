function problem3(input) {
    let mailbox = {};
    let actions = {
        Add(mailbox, user) {
            if (mailbox.hasOwnProperty(user)) {
                console.log(`${user} is already registered`);
            } else {
                mailbox[user] = [];
            }
        },
        Send(mailbox, user, email) {
            if (mailbox.hasOwnProperty(user)) {
                mailbox[user].push(email);
            }
        },
        Delete(mailbox, user) {
            if (mailbox.hasOwnProperty(user)) {
                delete mailbox[user];
            } else {
                console.log(`${user} not found!`);
            }
        }
    };

    while ((command = input.shift()) != "Statistics") {
        let [action, ...params] = command.split("->");
        actions[action](mailbox, ...params);
    }
    let userCount = Object.keys(mailbox).length;
    console.log(`Users count: ${userCount}`);
    let sorted = Object.entries(mailbox).sort((a, b) => userSort(a, b));
    for (const [user, mails] of sorted) {
        console.log(user);
        for (const mail of mails) {
            console.log(` - ${mail}`);
        }
    }

    function userSort([userA, mailsA], [userB, mailsB]) {
        return mailsB.length - mailsA.length || userA.localeCompare(userB);
    }
}
problem3([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
]);
console.log("-----");
problem3([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Your loan is overdue',
    'Add->Mike',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Delete->Peter',
    "Send->George->I'm busy",
    'Send->Mike->Another random test mail',
    'Delete->George',
    'Statistics'
]);
console.log("-----");
problem3([
    'Add->Annie',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Annie->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Annie->Another random test mail',
    'Delete->Annie',
    'Delete->George',
    'Statistics'
]);