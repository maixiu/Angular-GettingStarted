import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductListComponent } from './product-list.component';
import { ProductGardService } from './product-gard.service';
import { ProducDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forChild([
			{ path: 'product', component: ProductListComponent },
			{ path: 'product/:id', canActivate: [ProductGardService], component: ProducDetailComponent },
		]),
		SharedModule
	],
	declarations: [
		ProductListComponent,
		ProducDetailComponent
	],
	providers: [
		ProductService,
		ProductGardService
	]
})
export class ProductModule { }
