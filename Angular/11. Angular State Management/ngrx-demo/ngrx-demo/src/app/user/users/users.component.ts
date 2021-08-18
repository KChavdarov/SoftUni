import { Component, OnInit } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { merge, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { UserState } from '../+store';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../+store/actions';
import { selectUsersListUsers } from '../+store/selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userId: string | null = null;
  users$ = this.store.select(selectUsersListUsers);
  isLoadingUsers$ = merge(
    this.actions$.pipe(ofType(loadUsers), mapTo(true)),
    this.actions$.pipe(ofType(loadUsersSuccess), mapTo(false)),
    this.actions$.pipe(ofType(loadUsersError), mapTo(false)),
    of(false)
  );

  constructor(private store: Store<UserState>, private actions$: Actions) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  loadUsers() {
    this.store.dispatch(loadUsers());
  }

  showDetails(id: string) {
    this.userId = id;
  }

}
