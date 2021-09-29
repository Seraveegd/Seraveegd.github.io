import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercraft'
})
export class FiltercraftPipe implements PipeTransform {

  transform(crafts: any, type: string, type_detail: string): any {
    return Object.values(crafts).filter( (craft: any) => craft[type] == type_detail);
  }

}
