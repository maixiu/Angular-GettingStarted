import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductModule } from './product/product.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{ path: 'welcome', component: WelcomeComponent },
			{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
			{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
		]),
		ProductModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
