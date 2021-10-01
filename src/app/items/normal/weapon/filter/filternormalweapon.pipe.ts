import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filternormalweapon'
})
export class FilternormalweaponPipe implements PipeTransform {

  transform(weapons: any, type: string, type_detail: string): any {
    if (weapons) {
      const details = type_detail.split(',');
      return Object.values(weapons).filter((runeword: any) => details.includes(runeword[type] + ''));
    } else {
      return null;
    }
  }

}
