import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

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
	products: IProduct[];

	constructor(private _productService: ProductService) {
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

	onRatingChange(rating: string) {
		this.pageTitle = `Product List ${ rating }`;
	}

	ngOnInit(): void {
		this.products = this._productService.getProducts();
		this.filterBy = '';
	}
}
