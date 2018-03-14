import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'toSpaces'
})
export class ToSpacesPipe implements PipeTransform {
	transform(value: string, char: string) {
		return value.replace(char, ' ');
	}
}
