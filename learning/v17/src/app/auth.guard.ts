import {
  ActivatedRouteSnapshot,
  CanActivate, Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.isAuthenticated().then((isAuth: boolean): Promise<boolean> | boolean => {
      if (isAuth) {
        return true;
      } else {
        return this.router.navigate(['/'], {
          queryParams: {
            auth: false
          }
        });
      }
    })
  }
}
