import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user/user.service';


@Injectable()
export class AuthActivate implements CanActivate {
    constructor(private router: Router, private userService: UserService) {};


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const { authenticationRequired, redirectUrl } = route.data;
        if (typeof authenticationRequired == 'boolean' && authenticationRequired == this.userService.isLogged) {
            return true;
        } else {
            return this.router.parseUrl(redirectUrl + '?redirectUrl=' + state.url || '/');
        }
    }

}