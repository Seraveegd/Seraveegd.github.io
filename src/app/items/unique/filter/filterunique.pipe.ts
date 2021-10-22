import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterunique'
})
export class FilteruniquePipe implements PipeTransform {

  transform(uniques: any, filters: { [key: string]: string[] }): any {
    if (uniques != null) {
      return Object.values(uniques).filter((unique: any) => {
        let result = true;
        Object.keys(filters).forEach(filter => {
          if (result === true) {
            if (filter === 'rune') {
              result = filters[filter].some((e: any) => {
                return unique['order'].indexOf(e) > -1;
              });
            } else if (filter === 'weaponlimit') {
              result = filters[filter].some((e: any) => {
                return unique[filter].indexOf(e) > -1;
              });
            } else {
              result = filters[filter].indexOf(unique[filter] + '') > -1;
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
