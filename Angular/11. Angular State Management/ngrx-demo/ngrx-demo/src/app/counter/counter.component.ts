import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrementCounter, incrementCounter, resetCounter, setValue } from '../+store/actions';
import { getCounter, getValue } from '../+store/selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$: Observable<number>;
  value$: Observable<any>;

  constructor(private store: Store) {
    this.count$ = this.store.select(getCounter);
    this.value$ = this.store.select(getValue);
  }

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
    this.store.dispatch(setValue(input.value));
    input.value = '';
  }
}
