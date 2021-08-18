import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { incrementCounter, setValue } from './actions';
import { map } from 'rxjs/operators';

@Injectable()
export class GlobalEffects {

    increment = createEffect(() => this.actions$.pipe(
        ofType(setValue),
        map(() => {
            return incrementCounter();
        }),
    ));

    constructor(private actions$: Actions) {}
}