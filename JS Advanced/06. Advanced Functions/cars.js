function cars() {
    function create(name) {
        name = {};
    }
    function set(name, key, value) {
        name[key] = value;
    }
    function print(name) {
        console.log(Object.entries(name));
    }
};