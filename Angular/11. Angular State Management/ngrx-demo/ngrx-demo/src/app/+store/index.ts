import { ActionReducerMap } from '@ngrx/store';
import { globalReducer, GlobalState } from './reducers';

export interface AppState {
    readonly global: GlobalState,
}

export const reducers: ActionReducerMap<AppState> = {
    global: globalReducer,
};