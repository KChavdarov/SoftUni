import { createSelector } from '@ngrx/store';
import { AppState } from '.';
import { GlobalState } from './reducers';

export const selectGlobal = (state: AppState) => state.global;

export const selectGlobalCounter = createSelector(
    selectGlobal,
    (state: GlobalState) => state.counter
);

export const selectGlobalValue = createSelector(        
    selectGlobal,
    (state: GlobalState) => state.value
);
export const selectGlobalUsers = createSelector(
    selectGlobal,
    (state: GlobalState) => state.users
);








// export function getCounter(state: any) {
//     return state.global.counter;
// }

// export function getValue(state: any) {
//     return state.global.value;
// }