import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterruneword'
})
export class FilterrunewordPipe implements PipeTransform {

  transform(runewords: any, type: string, type_detail: string): any {
    return Object.values(runewords).filter( (runeword: any) => runeword[type] == type_detail);
  }

}
