import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuneService } from '../rune.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  type: string = this.route.snapshot.params.type;
  type_detail: string = this.route.snapshot.params.type_detail;

  runewords = this.rune.getRuneWords();
  control: object[] = [];
  runes = this.rune.getRunes().subscribe((val: any[]) => {
    if (val) {
      val.forEach((e: any) => {
        const key = e.name_en;
        const value = e.name;
        this.control[key] = value;
      });
    }
  });

  types: { [key: string]: string } = {
    weapon: '武器',
    helmet: '頭盔',
    armor: '盔甲',
    shield: '盾牌'
  };

  weapontypes: { [key: string]: string } = {
    sword: '劍',
    axe: '斧',
    mace: '釘頭錘',
    stave: '法杖',
    wand: '魔杖',
    scepter: '權杖',
    club: '棍棒',
    polearm: '長炳戰斧',
    assassinkatar: '爪',
    weapons: '武器'
  };

  constructor(private route: ActivatedRoute, private rune: RuneService) {
    this.route.params.subscribe(params => {
      this.type = params.type;
      this.type_detail = params.type_detail;
    });



  }

  ngOnInit(): void {

  }

}
