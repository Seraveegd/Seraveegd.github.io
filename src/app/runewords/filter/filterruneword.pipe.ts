import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterruneword',
  // pure: false
})
export class FilterrunewordPipe implements PipeTransform {

  transform(runewords: any, filters: { [key: string]: string[] }): any {
    if (runewords != null) {
      return Object.values(runewords).filter((runeword: any) => {
        let result = true;
        Object.keys(filters).forEach(filter => {
          if (result === true) {
            if (filter === 'rune') {
              result = filters[filter].some((e: any) => {
                return runeword['order'].indexOf(e) > -1;
              });
            } else if (filter === 'weaponlimit') {
              result = filters[filter].some((e: any) => {
                return runeword[filter].indexOf(e) > -1;
              });
            } else {
              result = filters[filter].indexOf(runeword[filter] + '') > -1;
            }
          }
        })

        return result;
      });
    } else {
      return null;
    }
  }

}
