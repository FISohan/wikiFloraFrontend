import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'badge'
})
export class BadgePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const v = Number(value);
    if(v <= 100)return "Fresher";
    if(v > 100 && v <= 300)return "Contributer";
    if(v > 300 && v < 500)return "Pro";
    return "Expert";
  }
}
