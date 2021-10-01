import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteritem'
})
export class FilteritemPipe implements PipeTransform {

  transform(items: any, type: string, type_detail: string): any {
    if (items) {
      return Object.values(items).filter((craft: any) => craft[type].includes(type_detail));
    } else {
      return null;
    }
  }

}
