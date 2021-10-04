import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteraffixe'
})
export class FilteraffixePipe implements PipeTransform {

  transform(affixes: any, type: string, type_detail: string): any {
    if(affixes){
      const details = type_detail.split(',');
      return Object.values(affixes).filter((affixe: any) => {
        let r = false;
        details.forEach((detail: any) => {
          if(affixe[type].includes(detail)){
            r = true
          }
        })

        return r
      });
    }else{
      return null;
    }
  }

}
