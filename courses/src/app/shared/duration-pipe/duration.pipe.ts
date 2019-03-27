import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'length'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const hours: number = Math.floor(value / 60);
    const minutes: number = value % 60;

    return hours ? `${hours}h ${minutes}min` : `${minutes}min`;
  }

}
