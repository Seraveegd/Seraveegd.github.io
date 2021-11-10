import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuneService } from '../rune.service';
import { Config } from '../../core/config.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommunivateService } from '../communivate.service';
import { Clipboard } from "@angular/cdk/clipboard"
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  code: string = this.route.snapshot.params.code;

  filters: string[] = [];

  filtersFormat: { [key: string]: string[] } = {};

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
      name: '釘鎚',
      url: this.config.api_base_url + '/items/normal/weapon/filter/kind/mace'
    },
    staff: {
      name: '法杖',
      url: this.config.api_base_url + '/items/normal/weapon/filter/kind/staff'
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
      name: '長柄',
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

  constructor(private route: ActivatedRoute, private rune: RuneService, private config: Config, private sanitizer: DomSanitizer,
    private c: CommunivateService, private clipboard: Clipboard, private snackBar: MatSnackBar) {
    this.route.params.subscribe(params => {
      this.code = params.code;

      this.filters = eval(window.atob(this.code));

      this.filterFormat();

      this.c.updateData(this.code);
    });
  }

  ngOnInit(): void {

  }

  showAbility(a: string, replace: any[]): SafeHtml {
    if (replace.length > 0) {
      replace.forEach(value => a = a.replace('#', `<span style="color: rgb(3 203 203)">${value}</span>`));
      return this.sanitizer.bypassSecurityTrustHtml(a);
    } else {
      return a;
    }
  }

  filterFormat(): void {
    this.filtersFormat = {};
    this.filters.forEach((filter: string) => {
      const filters = filter.split(':')

      if (this.filtersFormat[filters[0]] && !this.filtersFormat[filters[0]].includes(filters[1])) {
        this.filtersFormat[filters[0]].push(filters[1])
      } else {
        this.filtersFormat[filters[0]] = [filters[1]]
      }
    });
  }

  genandcopy(item: any): void {
    if (this.clipboard.copy(this.config.api_base_url + '/runewords/filter/' + window.btoa(JSON.stringify(['type:' + item.type, 'name_en:' + item.name_en])))) {
      this.snackBar.open('已複製連結', '確認', {
        duration: 2000
      });
    } else {
      this.snackBar.open('複製連結失敗', '確認', {
        duration: 2000
      });
    }
  }

}
