import { ActionReducerMap } from '@ngrx/store';
import { UserDetailsState, UsersState, usersReducer, userDetailsReducer } from './reducers';

export interface UserState {
    list: UsersState,
    details: UserDetailsState;
}

export const reducers: ActionReducerMap<UserState> = {
    list: usersReducer,
    details: userDetailsReducer,
};