import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteraffixe'
})
export class FilteraffixePipe implements PipeTransform {

  transform(affixes: any, type: string, type_detail: string): any {
    if(affixes){
      return Object.values(affixes).filter((affixe: any) => affixe[type].includes(type_detail));
    }else{
      return null;
    }
  }

}
