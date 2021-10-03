import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AffixeService {

  constructor(private http: HttpClient) { }

  getPrefixs(): any{
    return this.http.get<{
      group: string,
      format: string,
      abilitys: Array<object>,
      part: string[]
    }[]>('/assets/prefix.json');
  }

  getSuffixs(): any{
    return this.http.get<{
      group: string,
      format: string,
      abilitys: Array<object>,
      part: string[]
    }[]>('/assets/suffix.json');
  }
}
