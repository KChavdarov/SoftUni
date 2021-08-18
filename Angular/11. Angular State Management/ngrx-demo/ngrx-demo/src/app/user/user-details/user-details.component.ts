import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from '../+store';
import { loadUserDetails } from '../+store/actions';
import { selectUserDetailsUser } from '../+store/selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements  OnChanges {
  @Input() userId!: string;

  user$ = this.store.select(selectUserDetailsUser);

  constructor(private store: Store<UserState>,) {}

  ngOnChanges(): void {
    this.store.dispatch(loadUserDetails({ id: this.userId }));
  }

}
