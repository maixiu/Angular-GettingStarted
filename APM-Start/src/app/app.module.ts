import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ToSpacesPipe } from './shared/toSpaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProducDetailComponent } from './products/produc-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
	declarations: [
		AppComponent,
		ProductListComponent,
		StarComponent,
		ToSpacesPipe,
		ProducDetailComponent,
		WelcomeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		RouterModule.forRoot([
			{ path: 'products', component: ProductListComponent },
			{ path: 'product/:id', component: ProducDetailComponent },
			{ path: 'welcome', component: WelcomeComponent },
			{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
			{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
