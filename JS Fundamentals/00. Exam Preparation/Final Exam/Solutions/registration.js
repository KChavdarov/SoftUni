function registration(input) {
    let count = Number(input.shift());
    let successfulRegs = 0;
    for (let i = 0; i < count; i++) {
        let command = input.shift();
        let pattern = /U\$(?<username>[A-Z][a-z]{2,})U\$P@\$(?<password>[A-Za-z]{5,}\d+)P@\$/;
        let match = pattern.exec(command);
        if (match) {
            let user = match.groups.username;
            let pass = match.groups.password;
            console.log("Registration was successful");
            console.log(`Username: ${user}, Password: ${pass}`);
            successfulRegs++;
        } else {
            console.log("Invalid username or password");
        }
    }
    console.log(`Successful registrations: ${successfulRegs}`);

}
registration([
    "3",
    "U$MichaelU$P@$asdqwe123P@$",
    "U$NameU$P@$PasswordP@$",
    "U$UserU$P@$ad2P@$"
]);
console.log("---");
registration([
    "2",
    "U$TommyU$P@$asdqwe123P@$",
    "Sara 1232412"
]);