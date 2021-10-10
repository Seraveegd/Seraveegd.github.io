import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  type: string = this.route.snapshot.params.type;
  type_detail: string = this.route.snapshot.params.type_detail;

  sets = this.item.getSets();
  setEffects = this.item.getSetEffects();

  groups: { [key: string]: string } = {
    angelicraiment: '天使的衣裝',
    arcannastricks: '阿卡娜的詭計',
    arcticgear: '北極裝備',
    berserkersarsenal: '狂戰士的武裝',
    cathanstraps: '卡珊的衣著',
    civerbsvestments: '克維雷布的法衣',
    cleglawsbrace: '克雷德勞的防備',
    deathsdisguise: '死亡的偽裝',
    hsarusdefense: '海沙魯的鐵禦',
    infernaltools: '煉獄器具',
    irathasfinery: '依雷撒的華服',
    isenhartsarmory: '依森哈特的軍械',
    milabregasregalia: '米拉伯佳戰裝',
    sigonscompletesteel: '西剛的全套鋼甲',
    tancredsbattlegear: '坦克雷的戰裝',
    vidalasrig: '維達拉的配備',
    aldurswatchtower: '艾爾多的守衛',
    bulkathoschildren: '布爾凱索的子嗣',
    cowkingsleathers: '牛王皮甲',
    thedisciple: '門徒',
    griswoldslegacy: '格里斯瓦德的傳奇',
    heavensbrethren: '天堂的同胞',
    hwaninsmajesty: '桓因的威嚴',
    immortalking: '不朽之王',
    mavinasbattlehymn: '馬維娜之戰鬥詩歌',
    natalyasodium: '娜塔亞的非難',
    najsancientvestige: '娜吉的上古遺物',
    orphanscall: '孤兒的呼喚',
    sandersfolly: '山德的愚行',
    sazabisgrandtribute: '沙撒璧的雄偉貢品',
    talrashaswrappings: '塔拉夏的外袍',
    trangoulsavatar: '塔格奧的化身'
  }

  parts: { [key: string]: string } = {
    barbarianhelmet: '野蠻人專用',
    druidpeltshelmet: '德魯伊專用',
    paladinshield: '聖騎士專用',
    ncershrunkenhead: '死靈法師專用',
    necromancer: '死靈法師專用',
    amazonspear: '亞馬遜專用',
    amazonbow: '亞馬遜專用',
    amazonjavelin: '亞馬遜專用',
    sorceressorb: '魔法使專用',
    assassinkatar: '刺客專用'
  };

  constructor(private route: ActivatedRoute, private item: ItemService, private sanitizer: DomSanitizer) {
    this.route.params.subscribe(params => {
      this.type = params.type;
      this.type_detail = params.type_detail;
    });
  }

  ngOnInit(): void {
  }

  getUniqueGroup(obj: any): any {
    return [...new Map(obj.map((item: any) => [item['group'], item['group']])).values()];
  }

  showAbility(a: string, replace: any[]): SafeHtml {
    if (replace.length > 0) {
      replace.forEach(value => a = a.replace('#', `<span style="color: rgb(3 203 203)">${value}</span>`));
      return this.sanitizer.bypassSecurityTrustHtml(a);
    } else {
      return a;
    }
  }

  getKeys(obj: object): string[] {
    return Object.keys(obj);
  }

  isnumber(s: any): boolean {
    return !isNaN(s);
  }

}
