function nikuldenCharity(input) {
    let message = input.shift();
    let actions = {
        Replace(string, key, replacement) {
            let pattern = new RegExp(`${key}`, "g");
            string = string.replace(pattern, replacement);
            console.log(string);
            return string;
        },
        Cut(string, start, end) {
            start = Number(start);
            end = Number(end);
            if (start >= 0 && end < string.length) {
                let before = string.substring(0, start);
                let after = string.substring(end + 1);
                string = before + after;
                console.log(string);
            } else {
                console.log("Invalid indexes!");
            }
            return string;
        },
        Make(string, type) {
            if (type == "Upper") {
                string = string.toUpperCase();
            } else if (type == "Lower") {
                string = string.toLowerCase();
            }
            console.log(string);
            return string;
        },
        Check(string, piece) {
            if (string.includes(piece)) {
                console.log(`Message contains ${piece}`);
            } else {
                console.log(`Message doesn't contain ${piece}`);
            }
            return string;
        },
        Sum(string, start, end) {
            start = Number(start);
            end = Number(end);
            if (start >= 0 && end < string.length) {
                let sum = 0;
                let extract = string.substring(start, end + 1);
                for (const char of extract) {
                    sum += char.charCodeAt();
                }
                console.log(sum);
            } else {
                console.log("Invalid indexes!");
            }
            return string;
        }
    };
    while ((command = input.shift()) != "Finish") {
        let [action, ...params] = command.split(" ");
        message = actions[action](message, ...params);
    }
}
nikuldenCharity([
    "ILikeSharan",
    "Replace a e",
    "Make Upper",
    "Check SHEREN",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"
]);
console.log("---");
nikuldenCharity([
    "HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"
]);