import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorService } from './error.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor(private errorService: ErrorService) {};

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.startsWith('/api')) {
            req = req.clone({
                url: environment.apiUrl + req.url,
                withCredentials: true,
            });
        }
        return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
            this.errorService.handleError(err)
            return throwError(err);
        }));
    }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};