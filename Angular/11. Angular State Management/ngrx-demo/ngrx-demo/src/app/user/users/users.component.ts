import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { merge, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { AppState } from '../../+store';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../../+store/actions';
import { selectGlobalUsers } from '../../+store/selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users$ = this.store.select(selectGlobalUsers);
  isLoadingUsers$ = merge(
    this.actions$.pipe(ofType(loadUsers), mapTo(true)),
    this.actions$.pipe(ofType(loadUsersSuccess), mapTo(false)),
    this.actions$.pipe(ofType(loadUsersError), mapTo(false)),
    of(false)
  );

  constructor(private store: Store<AppState>, private actions$: Actions) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  loadUsers() {
    this.store.dispatch(loadUsers());
  }

}
