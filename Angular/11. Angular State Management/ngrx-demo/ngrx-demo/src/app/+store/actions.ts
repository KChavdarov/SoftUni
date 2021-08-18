import { createAction, props } from '@ngrx/store';


const namespace = '[GLOBAL]';

export const incrementCounter = createAction(
    `${namespace} increment counter`
);

export const decrementCounter = createAction(
    `${namespace} decrement counter`
);

export const resetCounter = createAction(
    `${namespace} reset counter`
);

export const setValue = createAction(
    `${namespace} set value`,
    props<{ value: string; }>()
);

//USERS
export const loadUsers = createAction(
    `${namespace} load users`,
);
export const loadUsersSuccess = createAction(
    `${namespace} load users success`,
    props<{ users: any[]; }>()
);
export const loadUsersError = createAction(
    `${namespace} load users error`,
    props<{ error: Error; }>()
);
export const loadUsersCancel = createAction(
    `${namespace} load users cancel`,
);;








// export function incrementCounter() {
//     return {
//         type: 'INC'
//     };
// }
// export function decrementCounter() {
//     return {
//         type: 'DEC'
//     };
// }
// export function resetCounter() {
//     return {
//         type: 'RES'
//     };
// }

// export function setValue(value: any) {
//     return {
//         type: 'SET_VALUE',
//         payload: value
//     };
// }