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
    polearm: '長柄',
    spear: '長矛',
    amazonspear: '亞馬遜限定長矛',
    mace: '釘鎚',
    scepter: '權杖',
    bow: '弓',
    amazonbow: '亞馬遜限定弓',
    crossbow: '弩',
    javelin: '標槍',
    amazonjavelin: '亞馬遜限定標槍',
    dagger: '匕首',
    throwingknife: '投擲飛刀',
    throwingaxe: '投擲飛斧',
    wand: '魔杖',
    staff: '法杖',
    sorceressorb: '魔法使限定法珠',
    assassinkatar: '刺客限定爪',
    sorceress: '魔法使限定法珠',
    assassin: '刺客限定爪',
    hammer: '槌子',
    club: '棍棒',
    missilepotion: '投擲藥水'
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

  toGroup(items: Array<object>): any{
    return items.reduce(function(groups: any, item: any) {
      const val = item['group']
      groups[val] = groups[val] || []
      groups[val].push(item)
      return groups
    }, {})
  }

  typeChange(values: any): Array<object>{
    return values;
  }

  getvalue(item: any, key: string): string{
    return item[key];
  }

  getLength(items: any): number{
    return items.length;
  }

  getobject(item:any, key: string): object{
    return item[key];
  }
}
