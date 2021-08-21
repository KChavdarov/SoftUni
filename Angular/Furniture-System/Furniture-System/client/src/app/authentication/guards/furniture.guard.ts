import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class CanLoadFurniture implements CanLoad {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {

        if (this.authService.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['/signin']);

        return false;

    }

}