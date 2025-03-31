import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'thousand'
})
export class ThousandPipe implements PipeTransform {

  transform(value: number | string | null): string {
    if (value == null) return '';

    return value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

}
