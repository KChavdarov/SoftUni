(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        } else {
            return this.toString();
        }
    };
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        } else {
            return this.toString();
        }
    };
    String.prototype.isEmpty = function () {
        return this.length == 0 ? true : false;
    };
    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        } else {
            if (n < 4) {
                return '.'.repeat(n);
            }
            const string = this.slice(0, n);
            if (!string.includes(' ')) {
                return string.slice(0, n - 3) + '...';
            } else {
                let end = this.lastIndexOf(' ', n - 3);
                return string.slice(0, end) + '...';
            }
        }
    };
    String.format = function (string, ...params) {
        params.forEach((v, i) => string = string.replace(`{${i}}`, v));
        return string;
    };
}());

let testString = 'the quick brown fox jumps over the lazy dog';
let str = testString.truncate(25);
console.log(str);
let str1 = testString.truncate(12);
console.log(str1);
let str2 = testString.truncate(10);
console.log(str2);