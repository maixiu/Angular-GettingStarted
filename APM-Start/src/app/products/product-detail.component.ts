import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.css']
})
export class ProducDetailComponent implements OnInit {
	pageTitle: string;
	product: IProduct;

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _router: Router) {}

	ngOnInit() {
		const id = this._activatedRoute.snapshot.params['id'];

		this.product = {
			productId: 2,
			productName: 'Garden Cart',
			productCode: 'GDN-0023',
			releaseDate: 'March 18, 2016',
			description: '15 gallon capacity rolling garden cart',
			price: 32.99,
			starRating: 4.2,
			imageUrl: 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
		},

		this.pageTitle = `Product Detail: ${ id }`;
	}

	onBack(): void {
		this._router.navigate(['/products']);
	}
}
