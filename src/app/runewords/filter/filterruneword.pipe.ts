import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterruneword'
})
export class FilterrunewordPipe implements PipeTransform {

  transform(runewords: any, type: string, type_detail: string): any {
    if(type === 'rune'){
      return Object.values(runewords).filter( (runeword: any) => runeword['order'].indexOf(type_detail) > -1);
    }else if(type === 'weaponlimit'){
      return Object.values(runewords).filter( (runeword: any) => runeword[type].indexOf(type_detail) > -1);
    }else{
      return Object.values(runewords).filter( (runeword: any) => runeword[type] == type_detail);
    }
  }

}
