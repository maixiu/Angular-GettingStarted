import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
	selector: 'pm-produc-detail',
	templateUrl: './produc-detail.component.html',
	styleUrls: ['./produc-detail.component.css']
})
export class ProducDetailComponent implements OnInit {
	pageTitle = 'Product Detail';
	product: IProduct;

	constructor() {}

	ngOnInit() {
	}
}
