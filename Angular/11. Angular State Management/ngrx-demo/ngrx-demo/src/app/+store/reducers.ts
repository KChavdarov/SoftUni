export interface AppState {
    counter: number,
    value: any;
}

const initialState: AppState = {
    counter: 0,
    value: null
};

export function appReducer(state: AppState = initialState, action: any) {
    if (action.type == 'INC') {
        return { ...state, counter: state.counter + 1 };
    };
    if (action.type == 'DEC') {
        return { ...state, counter: state.counter - 1 };
    };
    if (action.type == 'RES') {
        return { ...state, counter: 0 };
    }
    if (action.type == 'SET_VALUE') {
        return { ...state, value: action.payload };
    }
    return state;
}