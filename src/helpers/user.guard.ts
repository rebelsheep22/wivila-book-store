import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserPageGuard implements CanActivate {
    constructor(
        private router: Router,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        const user = JSON.parse(sessionStorage.getItem('loggedUser')!)
        console.log(user)
        if (user?.roles[0]=== "ROLE_ADMIN") {
            return true;
        }

        this.router.navigate([''], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
