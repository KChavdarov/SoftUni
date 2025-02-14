function cars() {
    let cars = carContainer();

    cars.create('C1');
    cars.set('C1', 'color', 'red');
    cars.inherit('C2', 'C1');
    cars.set('C2', 'model', 'Test')
    cars.set('C1', 'NOS', 'Yes');
    cars.set('C2', 'color', 'green');
    cars.print('C1');
    cars.print('C2');

    function carContainer() {
        let state = {};

        return {
            create(name) {
                if (!state.hasOwnProperty(name)) {
                    state[name] = {
                        children: [],
                        parent: null,
                    };
                }
            },
            inherit(name, parentName) {
                if (!state.hasOwnProperty(name) && state.hasOwnProperty(parentName)) {
                    let parent = state[parentName];
                    state[name] = Object.assign({}, parent);
                    let child = state[name];
                    child.children = [];
                    child.parent = parent;
                    parent.children.push(child);
                }
            },
            set(name, key, value) {
                if (state.hasOwnProperty(name)) {
                    let current = state[name];
                    current[key] = value;
                    current.children.forEach(a => {
                        if (!a[key]) {
                            a[key] = value;
                        }
                    })
                }
            },
            print(name) {
                if (state.hasOwnProperty(name)) {
                    console.log(state[name]);
                }
            }
        }
    }
}

cars();