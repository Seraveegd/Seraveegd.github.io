import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterset'
})
export class FiltersetPipe implements PipeTransform {

  transform(sets: any, type: string, type_detail: string): any {
    if (sets) {
      const details = type_detail.split(',');
      return Object.values(sets).filter((craft: any) => details.includes(craft[type] + ''));
    } else {
      return null;
    }
  }

}
