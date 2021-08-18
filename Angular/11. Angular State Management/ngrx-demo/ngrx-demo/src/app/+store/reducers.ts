import { createReducer, on } from '@ngrx/store';
import { decrementCounter, incrementCounter, resetCounter, setValue } from './actions';

export interface GlobalState {
    readonly counter: number,
    readonly value: string,
}

const initialState: GlobalState = {
    counter: 0,
    value: '',
};

export const globalReducer = createReducer(
    initialState,
    on(incrementCounter, (state) => ({ ...state, counter: state.counter + 1 })),
    on(decrementCounter, (state) => ({ ...state, counter: state.counter - 1 })),
    on(resetCounter, (state) => ({ ...state, counter: 0 })),
    on(setValue, (state, { value }) => ({ ...state, value })),
);