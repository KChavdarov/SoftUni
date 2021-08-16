import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  serverError = new Subject<string>();
  constructor() {}

  handleError(err: HttpErrorResponse) {
    this.serverError.next(err.error.message);
    setTimeout(() => {
      this.serverError.next('');
    }, 1500);
  };
}
