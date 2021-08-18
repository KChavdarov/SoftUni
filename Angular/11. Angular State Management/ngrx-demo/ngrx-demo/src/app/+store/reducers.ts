import { createReducer, on } from '@ngrx/store';
import { decrementCounter, incrementCounter, loadUsersSuccess, resetCounter, setValue } from './actions';

export interface GlobalState {
    readonly counter: number,
    readonly value: string,
    readonly users: any[] | null,
}

const initialState: GlobalState = {
    counter: 0,
    value: '',
    users: null,
};

export const globalReducer = createReducer(
    initialState,
    on(incrementCounter, (state) => ({ ...state, counter: state.counter + 1 })),
    on(decrementCounter, (state) => ({ ...state, counter: state.counter - 1 })),
    on(resetCounter, (state) => ({ ...state, counter: 0 })),
    on(setValue, (state, { value }) => ({ ...state, value })),
    on(loadUsersSuccess, (state, { users }) => ({ ...state, users })),
);

// export function appReducer(state: AppState = initialState, action: any) {
//     if (action.type == 'INC') {
//         return { ...state, counter: state.counter + 1 };
//     };
//     if (action.type == 'DEC') {
//         return { ...state, counter: state.counter - 1 };
//     };
//     if (action.type == 'RES') {
//         return { ...state, counter: 0 };
//     }
//     if (action.type == 'SET_VALUE') {
//         return { ...state, value: action.payload };
//     }
//     return state;
// }