import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RuneService {

  constructor(private http: HttpClient) { }

  getRunes(): any{
    return this.http.get<{
      number: number,
      level: number,
      name: string,
      name_en: string,
      weapen: string,
      equipment: string,
      drop: number,
      boss: string,
      difficulty: string
    }[]>('/assets/rune.json');
  }

  getRuneWords(): any{
    return this.http.get<{
      type: string,
      name: string,
      name_en: string,
      slot: number,
      level: number,
      order: string[],
      ability: string[],
      range: number[],
      weaponlimit: string[],
      limit: string,
      attack: string
    }[]>('/assets/runewords.json');
  }
}
