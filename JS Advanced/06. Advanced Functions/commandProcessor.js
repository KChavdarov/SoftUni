function solution() {
    // return {
    //     baseString: '',
    //     append(string) {
    //         this.baseString += string;
    //     },
    //     removeStart(n) {
    //         this.baseString = this.baseString.substring(n);
    //     },
    //     removeEnd(n) {
    //         this.baseString = this.baseString.slice(0, -n);
    //     },
    //     print() {
    //         console.log(this.baseString);
    //     }
    // };

    let baseString = '';

    function append(string) {
        baseString += string;
    }
    function removeStart(n) {
        baseString = baseString.substring(n);
    }
    function removeEnd(n) {
        baseString = baseString.slice(0, -n);
    }
    function print() {
        console.log(baseString);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}


let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
