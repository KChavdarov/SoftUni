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

export const clearAppState = createAction(
    `${namespace} clear app state`
);