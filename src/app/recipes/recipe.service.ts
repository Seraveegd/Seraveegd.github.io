import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getCrafts(): any{
    return this.http.get<{
      type: string,
      kind: string,
      part: string,
      name: string,
      item: string[],
      rune: string,
      gem: string,
      jewelry: string,
      activity: string[],
      range: number[]
    }[]>('/assets/craft.json');
  }
}
