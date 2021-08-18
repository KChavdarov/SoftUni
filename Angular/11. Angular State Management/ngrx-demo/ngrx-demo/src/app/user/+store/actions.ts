import { createAction, props } from '@ngrx/store';

const namespace = '[USER]';

/*- USERS -*/
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
);

/*- USER DETAILS-*/
export const loadUserDetails = createAction(
    `${namespace} load user details`,
    props<{ id: string; }>()
);
export const loadUserDetailsSuccess = createAction(
    `${namespace} load user details success`,
    props<{ user: any; }>()
);
export const loadUserDetailsError = createAction(
    `${namespace} load user details error`,
    props<{ error: Error; }>()
);
export const loadUserDetailsCancel = createAction(
    `${namespace} load user details cancel`,
);