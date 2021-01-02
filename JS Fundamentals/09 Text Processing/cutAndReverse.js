function cutAndReverse(input) {
    let partOne = input.substring(0, input.length / 2);
    let partTwo = input.substring(input.length / 2);
    console.log(reverse(partOne));
    console.log(reverse(partTwo));

    function reverse(string) {
        return string.split('').reverse().join('');
    }
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');