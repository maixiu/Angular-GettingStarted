import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'pm-star',
	templateUrl: './star.component.html',
	styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
	starWidth: number;
	@Input() rating: number;
	@Output() ratingChange: EventEmitter<string>;

	constructor() {
		this.ratingChange = new EventEmitter<string>();
	}

	ngOnChanges(): void {
		this.starWidth = this.rating * 86 / 5;
	}

	onClick(): void {
		this.ratingChange.emit(`star clicked rating: ${ this.rating }`);
	}
}
