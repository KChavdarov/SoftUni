function listProcessor(commandsAsArr) {
    let actions = commands();
    for (const instruction of commandsAsArr) {
        let [command, string] = instruction.split(' ');
        actions[command](string);
    }

    function commands() {
        let result = [];

        return {
            add,
            remove,
            print
        };

        function add(string) {
            result.push(string);
        }
        function remove(string) {
            result = result.filter(a => a != string);
        }
        function print() {
            console.log(result.join(','));
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);

