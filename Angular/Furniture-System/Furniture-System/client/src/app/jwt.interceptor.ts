import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from './authentication/auth.service';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()

class JWTInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService, private toastr: ToastrService) {};

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`,
            },
        });

        return next.handle(request).pipe(
            tap(event => {
                if (event instanceof HttpResponse && event.ok && event.body && event.body.message) {
                    this.toastr.success(event.body.message);
                }
            }),
            catchError(err => {
                if (err instanceof HttpErrorResponse) {
                    try {
                        this.toastr.error(err.error.message);
                    } catch (e) {
                        this.toastr.error('An error occurred');
                    }
                }
                return of(err);
            })
        );

    }

};

export const jwtInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: JWTInterceptor,
    multi: true,
};