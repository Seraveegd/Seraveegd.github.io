import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getNormalArmorItems(): any {
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

  getNormalWeaponItems(): any {
    return this.http.get<{
      type: string,
      kind: string,
      group: string,
      name: string,
      name_en: string,
      attack: string,
      hand: string,
      oneharm: object,
      twoharm: object,
      throw: object;
      level: number,
      strength: number,
      agile: number,
      range: number,
      durability: string,
      max_slot: number,
      extra_skills: string,
      speed: number,
      limit: string
    }[]>('/assets/weapon.json');
  }

  getGems(): any {
    return this.http.get<{
      type: string,
      quility: string,
      name: string,
      level: number,
      weapon: Array<[]>,
      shield: Array<[]>,
      armor: Array<[]>,
      keywords: string[]
    }[]>('/assets/gem.json');
  }

  getSets(): any {
    return this.http.get<{
      group: string,
      set: string,
      set_en: string,
      type: string,
      part: string,
      name: string,
      name_en: string,
      attributes: object,
      ability: Array<[]>,
      ability_values: Array<[]>,
      set_ability: Array<[]>,
      set_ability_values: Array<[]>,
      limit: string
    }[]>('/assets/set.json');
  }

  getSetEffects(): any {
    return this.http.get<{
      group: string,
      ability: object,
      ability_values: object
    }[]>('/assets/seteffect.json');
  }
}
