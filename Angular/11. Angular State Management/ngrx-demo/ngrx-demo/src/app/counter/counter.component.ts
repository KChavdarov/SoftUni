import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../+store';
import { decrementCounter, incrementCounter, resetCounter, setValue } from '../+store/actions';
import { selectGlobalCounter, selectGlobalValue } from '../+store/selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$ = this.store.select(selectGlobalCounter);
  value$ = this.store.select(selectGlobalValue);

  constructor(private store: Store<AppState>) {}

  incrementHandler() {
    this.store.dispatch(incrementCounter());
  }
  decrementHandler() {
    this.store.dispatch(decrementCounter());
  }
  resetHandler() {
    this.store.dispatch(resetCounter());
  }

  setValueHandler(input: HTMLInputElement) {
    this.store.dispatch(setValue({ value: input.value }));
    input.value = '';
  }
}
