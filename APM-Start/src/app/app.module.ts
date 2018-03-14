import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ToSpacesPipe } from './shared/toSpaces.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
	declarations: [
		AppComponent,
		ProductListComponent,
		StarComponent,
		ToSpacesPipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
