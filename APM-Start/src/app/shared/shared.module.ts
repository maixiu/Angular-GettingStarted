import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarComponent } from './star.component';
import { ToSpacesPipe } from './toSpaces.pipe';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		StarComponent,
		ToSpacesPipe
	],
	exports: [
		StarComponent,
		ToSpacesPipe
	]
})
export class SharedModule { }
