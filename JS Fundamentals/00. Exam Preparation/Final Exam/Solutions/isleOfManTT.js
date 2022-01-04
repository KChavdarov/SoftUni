function isleOfManTT(input) {
    for (const str of input) {
        let pattern = /^([#$%&*])(?<racer>[A-Za-z]+)\1=(?<length>\d+)!!(?<geohash>.+)$/;
        let match = pattern.exec(str);
        if (match != null) {
            let racer = match.groups.racer;
            let length = Number(match.groups.length);
            let geohash = match.groups.geohash;
            if (geohash.length !== length) {
                console.log("Nothing found!");
                continue;
            } else {
                coordinates = '';
                for (const a of geohash) {
                    coordinates += String.fromCharCode(a.charCodeAt() + length);
                }
                console.log(`Coordinates found! ${racer} -> ${coordinates}`);
                break;
            }
        } else {
            console.log("Nothing found!");
        }
    }
}
isleOfManTT([
    "%GiacomoAgostini%=7!!hbqw",
    "&GeoffDuke*=6!!vjh]zi",
    "JoeyDunlop=10!!lkd,rwazdr",
    "Mike??Hailwood=5!![pliu",
    "#SteveHislop#=16!!df%TU[Tj(h!!TT[S"
]);
console.log("---");
isleOfManTT([
    "Ian6Hutchinson=7!!\(58ycb4",
    "#MikeHailwood#!!'gfzxgu6768=11",
    "slop%16!!plkdek/.8x11ddkc",
    "$Steve$=9Hhffjh",
    "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
    "RichardQ^uayle=16!!fr5de5kd"
]);