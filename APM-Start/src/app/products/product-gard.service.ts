import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGardService implements CanActivate {
	constructor(private _router: Router) { }

	canActivate(route: ActivatedRouteSnapshot): boolean {
		const id = +route.params['id'];
		if (isNaN(id) || id <= 0) {
			alert('wrong route');
			this._router.navigate(['/products']);
			return false;
		}

		return true;
	}
}
