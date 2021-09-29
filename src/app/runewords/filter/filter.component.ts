import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuneService } from '../rune.service';
import { Config } from '../../core/config.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  type: string = this.route.snapshot.params.type;
  type_detail: string = this.route.snapshot.params.type_detail;

  runewords = this.rune.getRuneWords();
  control: any[] = [];
  runes = this.rune.getRunes().subscribe((val: any[]) => {
    if (val) {
      val.forEach((e: any) => {
        const key = e.name_en;
        const value = e.name;
        const code = e.number
        this.control[key] = {
          name: value,
          code: code
        };
      });
    }
  });

  types: { [key: string]: string } = {
    weapon: '武器',
    helmet: '頭盔',
    armor: '盔甲',
    shield: '盾牌'
  };

  weapontypes: { [key: string]: any } = {
    sword: {
      name: '刀劍',
      url: this.config.api_base_url + '/items/normal/weapon/filter/kind/sword'
    },
    axe: {
      name: '斧頭',
      url: this.config.api_base_url + '/items/normal/weapon/filter/kind/axe'
    },
    mace: {
      name: '釘頭錘',
      url: this.config.api_base_url + '/items/normal/weapon/filter/kind/mace'
    },
    stave: {
      name: '法杖',
      url: this.config.api_base_url + '/items/normal/weapon/filter/kind/stave'
    },
    wand: {
      name: '魔杖',
      url: this.config.api_base_url + '/items/normal/weapon/filter/kind/wand'
    },
    scepter: {
      name: '權杖',
      url: this.config.api_base_url + '/items/normal/weapon/filter/kind/scepter'
    },
    club: {
      name: '棍棒',
      url: this.config.api_base_url + '/items/normal/weapon/filter/kind/club'
    },
    polearm: {
      name: '長斧',
      url: this.config.api_base_url + '/items/normal/weapon/filter/kind/polearm'
    },
    assassinkatar: {
      name: '爪',
      url: this.config.api_base_url + '/items/normal/weapon/filter/kind/assassinkatar'
    },
    hammer: {
      name: '槌子',
      url: this.config.api_base_url + '/items/normal/weapon/filter/kind/hammer'
    },
    melee: {
      name: '近戰武器',
      url: this.config.api_base_url + '/items/normal/weapon/filter/attack/melee'
    },
    missile: {
      name: '遠程武器',
      url: this.config.api_base_url + '/items/normal/weapon/filter/attack/missile'
    },
    paladinshield: {
      name: '聖騎士限定盾牌',
      url: this.config.api_base_url + '/items/normal/armor/filter/limit/paladin'
    }
  };

  constructor(private route: ActivatedRoute, private rune: RuneService, private config: Config) {
    this.route.params.subscribe(params => {
      this.type = params.type;
      this.type_detail = params.type_detail;
    });
  }

  ngOnInit(): void {

  }

}
