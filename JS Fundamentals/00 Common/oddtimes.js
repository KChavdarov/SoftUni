function oddTimes(input) {
    let nums = input.split(" ");
    nums = nums.map(Number);
    let result = nums.reduce((a, b) => a ^ b);
    // let result = 0;
    // for (const num of nums) {
    //     result = num ^ result;
    // }
    console.log(result);
}
oddTimes("1 2 3 2 3 1 3");
oddTimes("5 7 2 7 5 2 5");