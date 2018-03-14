import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IProduct } from './product';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {
	productsUrl = './api/products/products.json';

	constructor(private _httpClient: HttpClient) {}

	getProducts(): Observable<IProduct[]> {
		return this._httpClient.get<IProduct[]>(this.productsUrl)
			.do(data => console.log('All: ' + JSON.stringify(data)))
			.catch(this.handleError);
	}

	private handleError(err: HttpErrorResponse) {
		console.log(err.message);
		return Observable.throw(err.message);
	}
}
