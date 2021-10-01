import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterequipment'
})
export class FilterequipmentPipe implements PipeTransform {

  transform(equitments: any, type: string, type_detail: string): any {
    if (equitments) {
      return Object.values(equitments).filter((craft: any) => craft[type].includes(type_detail));
    } else {
      return null;
    }
  }

}
