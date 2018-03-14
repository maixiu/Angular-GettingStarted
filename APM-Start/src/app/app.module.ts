import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ToSpacesPipe } from './shared/toSpaces.pipe';

@NgModule({
	declarations: [
		AppComponent,
		ProductListComponent,
		ToSpacesPipe
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
