import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getNormalArmorItems(): any{
    return this.http.get<{
      type: string,
      part: string,
      group: string,
      name: string,
      name_en: string,
      weight: string,
      defense: object,
      critical_damage: object,
      level: number,
      strength: number,
      durability: number,
      max_slot: number,
      block: number,
      damage_reduction: number,
      capacity: number,
      assassin_kick_damage: object,
      limit: string
    }[]>('/assets/armor.json');
  }
}
