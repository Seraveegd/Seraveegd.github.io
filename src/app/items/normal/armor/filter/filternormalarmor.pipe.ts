import { NonNullAssert } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filternormalarmor'
})
export class FilternormalarmorPipe implements PipeTransform {

  transform(armors: any, type: string, type_detail: string): any {
    if (armors) {
      const details = type_detail.split(',');
      return Object.values(armors).filter((runeword: any) => details.includes(runeword[type] + ''))
    } else {
      return null;
    }
  }

}
