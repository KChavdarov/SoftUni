import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnDestroy {

  timeStreamSubscription!: Subscription;
  timeValue!: string;

  time$ = interval(1000).pipe(startWith(''), map(a => new Date()))

  constructor() {
    this.timeStreamSubscription = this.time$.subscribe(
      timeValue => this.timeValue = timeValue.toLocaleTimeString()
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.timeStreamSubscription.unsubscribe();
  }

}
