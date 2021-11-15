import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FigureService {

  constructor(private http: HttpClient) { }

  getMonsters(): any {
    return this.http.get<{
      id: string,
      name: string,
      name_en: string,
      desc: string,
      rangedtype: number,
      rarity: number,
      level: object,
      demon: number,
      boss: number,
      res: object,
      block: object,
      crit: number,
      hp: object,
      ac: object,
      exp: object,
      TreasureClass1: object,
      TreasureClass2: object,
      TreasureClass3: object,
      TreasureClass4: object
    }[]>('/assets/monster.json');
  }

  getSuperUniques(): any {
    return this.http.get<{
      name: string,
      name_en: string,
      tc: object
    }[]>('/assets/superunique.json');
  }

  getMonsterLevels(): any {
    return this.http.get<{
      ac: object,
      hp: object,
      exp: object
    }[]>('/assets/monlvl.json');
  }

  getTreasureClass(): any {
    return this.http.get<{
      tc: string,
      level: number,
      picks: number,
      changes: object,
      nodrop: number,
      drops: object
    }[]>('/assets/tc.json');
  }
}
