import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filternormalarmor'
})
export class FilternormalarmorPipe implements PipeTransform {

  transform(armors: any, type: string, type_detail: string): any {
    return Object.values(armors).filter( (runeword: any) => runeword[type] == type_detail )
  }

}
