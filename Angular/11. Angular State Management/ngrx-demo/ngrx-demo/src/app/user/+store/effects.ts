import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, takeUntil } from 'rxjs/operators';
import { UserService } from '../user.service';
import { loadUserDetails, loadUsers, loadUsersCancel, loadUsersError, loadUsersSuccess } from './actions';

@Injectable()
export class UserListEffects {
    loadUsersList = createEffect(() => this.actions$.pipe(
        ofType(loadUsers),
        switchMap(() => this.userService.loadUsers().pipe(
            takeUntil(this.actions$.pipe(ofType(loadUsersCancel))),
            map(users => loadUsersSuccess({ users })),
            catchError(error => [loadUsersError({ error })])
        ))
    ));

    constructor(private actions$: Actions, private userService: UserService) {}
}

@Injectable()
export class UserDetailsEffects {
    loadUserDetails = createEffect(() => this.actions$.pipe(
        ofType(loadUserDetails),
        switchMap(() => this.userService.loadUserDetails)
    ));

    constructor(private actions$: Actions, private userService: UserService) {}

}