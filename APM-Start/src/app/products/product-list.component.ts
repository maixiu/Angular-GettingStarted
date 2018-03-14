import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
	selector: 'pm-products',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
	pageTitle = 'Product List';
	imageWidth = 50;
	imagePadding = 2;
	imageIsShown = false;

	_filterBy: string;
	get filterBy(): string {
		return this._filterBy;
	}
	set filterBy(value: string) {
		this._filterBy = value;
		this.filteredProducts = this._filterBy ? this.filterProducts(this._filterBy) : this.products;
	}

	filteredProducts: IProduct[];

	products: IProduct[] = [{
		productId: 1,
		productName: 'Leaf Rake',
		productCode: 'GDN-0011',
		releaseDate: 'March 19, 2016',
		description: 'Leaf rake with 48-inch wooden handle.',
		price: 19.95,
		starRating: 3.2,
		imageUrl: 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
	},
	{
		productId: 2,
		productName: 'Garden Cart',
		productCode: 'GDN-0023',
		releaseDate: 'March 18, 2016',
		description: '15 gallon capacity rolling garden cart',
		price: 32.99,
		starRating: 4.2,
		imageUrl: 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
	}];

	constructor() {
		this.filterBy = 'cart';
	}

	toggleImage(): void {
		this.imageIsShown = !this.imageIsShown;
	}

	filterProducts(filter: string): IProduct[] {
		const lowercaseFilter = filter.toLocaleLowerCase();
		return this.products.filter((product, index) => {
			return product.productName.toLocaleLowerCase().indexOf(lowercaseFilter) !== -1;
		});
	}

	ngOnInit(): void {
		console.log('ngOnInit');
	}
}
