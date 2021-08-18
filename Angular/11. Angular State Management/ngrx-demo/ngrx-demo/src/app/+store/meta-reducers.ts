import { ActionReducer, MetaReducer } from '@ngrx/store';

export function clearAppStateMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        if (action.type === '[GLOBAL] clear app state') {
            state = undefined;
        }
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<any>[] = [clearAppStateMetaReducer];