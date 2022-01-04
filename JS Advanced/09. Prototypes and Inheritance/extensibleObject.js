function extensibleObject() {
    const proto = {};
    const myObj = Object.create(proto);
    myObj.extend = function (otherObj) {
        for (const [key, value] of Object.entries(otherObj)) {
            if (typeof value == 'function') {
                proto[key] = value;
            } else {
                myObj[key] = value;
            }
        }
    };
    return myObj;
}