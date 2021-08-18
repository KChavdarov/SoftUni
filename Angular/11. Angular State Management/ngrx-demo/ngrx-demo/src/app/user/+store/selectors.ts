import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '.';

const userModuleSelector = createFeatureSelector<UserState>('user');

const selectUsersList = createSelector(
    userModuleSelector,
    state => state.list
);

const selectUserDetails = createSelector(
    userModuleSelector,
    state => state.details
);

export const selectUsersListUsers = createSelector(selectUsersList, state => state.users);
export const selectUserDetailsUser = createSelector(selectUserDetails, state => state.user);
