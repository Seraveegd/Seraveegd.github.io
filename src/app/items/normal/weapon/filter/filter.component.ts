import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../item.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  type: string = this.route.snapshot.params.type;
  type_detail: string = this.route.snapshot.params.type_detail;

  weapons = this.item.getNormalWeaponItems();

  kinds: { [key: string]: string } = {
    sword: '刀劍',
    axe: '斧頭',
    polearm: '長斧',
    spear: '長槍',
    amazonspear: '亞馬遜限定長槍',
    mace: '釘頭錘',
    scepter: '權杖',
    bow: '弓箭',
    amazonbow: '亞馬遜限定弓箭',
    crossbow: '十字弓',
    javelin: '標槍',
    amazonjavelin: '亞馬遜限定標槍',
    dagger: '匕首',
    throwing: '投擲武器',
    wand: '魔杖',
    stave: '法杖',
    sorceressorb: '法師限定法珠',
    assassinkatar: '刺客限定爪',
    sorceress: '法師限定法珠',
    assassin: '刺客限定爪'
  };

  kindNeedtofind = ['amazon', 'one', 'two', 'missile', 'melee', '2', '3', '4', '5', '6'];

  constructor(private route: ActivatedRoute, private item: ItemService) {
    this.route.params.subscribe(params => {
      this.type = params.type;
      this.type_detail = params.type_detail;
    });
  }

  ngOnInit(): void {
  }

  getUniqueKind(obj: any): any {
    return [...new Map(obj.map((item: any) => [item['kind'], item['kind']])).values()];
  }

  toArray(detail: string): any {
    return detail.split(',');
  }

}
