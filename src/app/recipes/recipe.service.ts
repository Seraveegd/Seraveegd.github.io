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
      name_en: string,
      item: string[],
      rune: string,
      gem: string,
      jewelry: string,
      activity: string[],
      ability_values: Array<[]>
    }[]>('/assets/craft.json');
  }

  getRunes(): any{
    return this.http.get<{
      ladder: string,
      recipe: object[],
      result: string
    }[]>('/assets/runeupgrade.json');
  }

  getItems(): any{
    return this.http.get<{
      type: string[],
      recipe: object[],
      result: string,
      note: string,
      tag: string[]
    }[]>('/assets/item.json');
  }

  getEquipments(): any{
    return this.http.get<{
      type: string[],
      ladder: string,
      recipe: object[],
      result: string,
      note: string,
      tag: string[]
    }[]>('/assets/equipment.json');
  }
}
