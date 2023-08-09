import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summery'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, length:number): string {
    let summery:string = value.slice(0,length);
    summery += "...";
    return summery;
  }

}
