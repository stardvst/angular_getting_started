import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

    constructor(private _route: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            // go to error page
            alert("Invalid product Id: " + id);
            this._route.navigate(['/products']);
            return false;
        }
        return true;
    }

}
