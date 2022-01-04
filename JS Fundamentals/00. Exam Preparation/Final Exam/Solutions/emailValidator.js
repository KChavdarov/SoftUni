function emailValidator(input) {
    let actions = {
        Make(string, type) {
            if (type == "Upper") {
                string = string.toUpperCase();
            } else if (type == "Lower") {
                string = string.toLowerCase();
            }
            console.log(string);
            return string;
        },
        GetDomain(string, count) {
            let domain = string.slice(-Number(count));
            console.log(domain);
            return string;
        },
        GetUsername(string) {
            let end = string.indexOf("@");
            if (end != -1) {
                let username = string.substring(0, end);
                console.log(username);
            } else {
                console.log("The email {email} doesn't contain the @ symbol.");
            }
            return string;
        },
        Replace(string, char) {
            let pattern = new RegExp(`${char}`, "g");
            string = string.replace(pattern, "-");
            console.log(string);
            return string;
        },
        Encrypt(string) {
            string = [...string];
            string = string.map(a => a = a.charCodeAt());
            console.log(string.join(" "));
            return string;
        }
    };
    let email = input.shift();
    while ((command = input.shift()) != "Complete") {
        let [action, param] = command.split(" ");
        email = actions[action](email, param);
    }
}
emailValidator([
    "Mike123@somemail.com",
    "Make Upper",
    "GetDomain 3",
    "GetUsername",
    "Encrypt",
    "Complete"
]);
console.log("---");
emailValidator([
"AnotherMail.com",
"Make Lower",
"GetUsername",
"Replace a",
"Complete"
]);