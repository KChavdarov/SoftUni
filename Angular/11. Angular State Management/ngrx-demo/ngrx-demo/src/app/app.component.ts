import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearAppState } from './+store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-demo';

  constructor(private store: Store) {}

  clearState() {
    this.store.dispatch(clearAppState());
  }
}
