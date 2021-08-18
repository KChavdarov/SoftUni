export function incrementCounter() {
    return {
        type: 'INC'
    };
}
export function decrementCounter() {
    return {
        type: 'DEC'
    };
}
export function resetCounter() {
    return {
        type: 'RES'
    };
}

export function setValue(value: any) {
    return {
        type: 'SET_VALUE',
        payload: value
    };
}