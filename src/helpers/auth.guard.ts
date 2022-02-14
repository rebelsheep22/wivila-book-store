import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/services/auth.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private accountService: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        // const user = this.accountService.userValue;
        // if (user) {
        //     return true;
        // }

        // this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
