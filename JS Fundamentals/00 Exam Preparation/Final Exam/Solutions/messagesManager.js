function messageManager(input) {
    let capacity = Number(input.shift());
    let messages = {};
    let actions = {
        Add(messages, user, sent, received) {
            if (!messages.hasOwnProperty(user)) {
                messages[user] = {
                    sent: Number(sent),
                    received: Number(received)
                };
            }
        },
        Message(messages, sender, receiver) {
            if (messages.hasOwnProperty(sender) && messages.hasOwnProperty(receiver)) {
                messages[sender].sent++;
                if ((messages[sender].sent + messages[sender].received) >= capacity) {
                    console.log(`${sender} reached the capacity!`);
                    delete messages[sender];
                }
                messages[receiver].received++;
                if ((messages[receiver].received + messages[receiver].sent) >= capacity) {
                    console.log(`${receiver} reached the capacity!`);
                    delete messages[receiver];
                }
            }
        },
        Empty(messages, user) {
            if (user == "All") {
                for (const key in messages) {
                    delete messages[key];
                }
            } else if (messages.hasOwnProperty(user)) {
                delete messages[user];
            }
        }
    };
    while ((command = input.shift()) != "Statistics") {
        let [action, ...parameters] = command.split("=");
        actions[action](messages, ...parameters);
    }
    let userCount = Object.keys(messages).length;
    console.log(`Users count: ${userCount}`);
    let sorted = Object.entries(messages).sort((a, b) => sortMessages(a, b));
    for (const [user, data] of sorted) {
        let msg = data.sent + data.received;
        console.log(`${user} - ${msg}`);
    }

    function sortMessages([userA, dataA], [userB, dataB]) {
        let msgA = dataA.received;
        let msgB = dataB.received;
        return msgB - msgA || userA.localeCompare(userB);
    }
}
messageManager([10,
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'
]);
console.log("---");
messageManager([
    20,
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics'
]);
console.log("---");
messageManager([
    12,
    'Add=Bonnie=3=5',
    'Add=Johny=4=4',
    'Empty=All',
    'Add=Bonnie=3=3',
    'Statistics'
]);