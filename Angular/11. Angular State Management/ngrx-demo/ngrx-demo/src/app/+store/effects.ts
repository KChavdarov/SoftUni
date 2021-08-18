import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { incrementCounter, loadUsers, loadUsersCancel, loadUsersError, loadUsersSuccess, setValue } from './actions';
import { catchError, map, switchMap, takeUntil } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Injectable()
export class GlobalEffects {

    increment = createEffect(() => this.actions$.pipe(
        ofType(setValue),
        map(() => {
            return incrementCounter();
        }),
    ));

    loadUsers = createEffect(() => this.actions$.pipe(
        ofType(loadUsers),
        switchMap(() => this.userService.loadUsers().pipe(
            takeUntil(this.actions$.pipe(ofType(loadUsersCancel))),
            map(users => loadUsersSuccess({ users })),
            catchError(error => [loadUsersError({ error })])
        ))
    ));

    constructor(private actions$: Actions, private userService: UserService) {}
}