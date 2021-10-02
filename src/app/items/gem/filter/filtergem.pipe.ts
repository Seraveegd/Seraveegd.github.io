import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtergem'
})
export class FiltergemPipe implements PipeTransform {

  transform(gems: any, type: string, type_detail: string): any {
    if (gems) {
      // const details = type_detail.split(',');
      return Object.values(gems).filter((runeword: any) => runeword[type].includes(type_detail + ''))
    } else {
      return null;
    }
  }

}
