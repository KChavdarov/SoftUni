function inboxManager(input) {
    let inbox = {};
    let actions = {
        Add(Object, user) {
            if (Object.hasOwnProperty(user)) {
                console.log(`${user} is already registered`);
            } else {
                Object[user] = [];
            }
            return Object;
        },
        Send(Object, user, email) {
            Object[user].push(email);
            return Object;
        },
        Delete(Object, user) {
            if (Object.hasOwnProperty(user)) {
                delete Object[user];
            } else {
                console.log(`${user} not found!`);
            }
            return Object;
        }
    };
    while ((command = input.shift()) != "Statistics") {
        let [action, user, email] = command.split("->");
        actions[action](inbox, user, email);
    }
    let count = Object.keys(inbox).length;
    console.log(`Users count: ${count}`);
    let sorted = Object.entries(inbox).sort((a, b) => emailSort(a, b));
    for (const [user, emails] of sorted) {
        console.log(user);
        for (const email of emails) {
            console.log(` - ${email}`);
        }
    }

    function emailSort([userA, emailsA], [userB, emailsB]) {
        return emailsB.length - emailsA.length || userA.localeCompare(userB);
    }
}
inboxManager([
    "Add->Mike",
    "Add->George",
    "Send->George->Hello World",
    "Send->George->Some random test mail",
    "Send->Mike->Hello, do you want to meet up tomorrow?",
    "Send->George->It would be a pleasure",
    "Send->Mike->Another random test mail",
    "Statistics"
]);
console.log("---");
inboxManager([
    "Add->Mike",
    "Add->George",
    "Send->George->Hello World",
    "Send->George->Your loan is overdue",
    "Add->Mike",
    "Send->Mike->Hello, do you want to meet up tomorrow?",
    "Delete->Peter",
    "Send->George->I'm busy",
    "Send->Mike->Another random test mail",
    "Delete->George",
    "Statistics"
]);