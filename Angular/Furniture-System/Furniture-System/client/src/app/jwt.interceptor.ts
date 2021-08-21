import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './authentication/auth.service';

@Injectable()

class JWTInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {};

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`,
            },
        });

        return next.handle(request);
    }

};

export const jwtInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: JWTInterceptor,
    multi: true,
};