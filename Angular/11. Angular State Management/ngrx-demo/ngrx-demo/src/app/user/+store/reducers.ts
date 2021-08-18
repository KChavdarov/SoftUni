import { createReducer, on } from '@ngrx/store';
import { loadUserDetailsSuccess, loadUsersSuccess } from './actions';

export interface UsersState {
    readonly users: any[] | null,
}

const initialUsersState: UsersState = {
    users: null
};

export const usersReducer = createReducer(
    initialUsersState,
    on(loadUsersSuccess, (state, { users }) => ({ ...state, users }))
);

/**************/

export interface UserDetailsState {
    readonly user: any | null,
}

const initialUserDetailsState: UserDetailsState = {
    user: null
};

export const userDetailsReducer = createReducer(
    initialUserDetailsState,
    on(loadUserDetailsSuccess, (state, { user }) => ({ ...state, user }))
);