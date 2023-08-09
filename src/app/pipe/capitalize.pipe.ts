import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    let capitalizedValue = value[0].toUpperCase() + value.substring(1);
   // capitalizedValue = value[0].toUpperCase();
    return capitalizedValue;
  }

}
