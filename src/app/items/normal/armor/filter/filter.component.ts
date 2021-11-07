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

  armors = this.item.getNormalArmorItems();

  weights: { [key: string]: string } = {
    light: '輕型',
    medium: '中型',
    heavy: '重型',
  };

  parts: { [key: string]: string } = {
    helmet: '頭盔',
    barbarianhelmet: '野蠻人限定頭盔',
    barbarian: '野蠻人限定頭盔',
    druidpeltshelmet: '德魯伊限定頭盔',
    druld: '德魯伊限定頭盔',
    armor: '盔甲',
    belt: '腰帶',
    glove: '手套',
    boot: '鞋子',
    shield: '盾牌',
    paladinshield: '聖騎士限定盾牌',
    paladin: '聖騎士限定盾牌',
    ncershrunkenhead: '死靈法師限定盾牌',
    necromancer: '死靈法師限定盾牌',
    circlet: '頭飾'
  };

  partNeedtofind = ['light', 'medium', 'heavy', '2', '3', '4'];

  constructor(private route: ActivatedRoute, private item: ItemService) {
    this.route.params.subscribe(params => {
      this.type = params.type;
      this.type_detail = params.type_detail;
    });
  }

  ngOnInit(): void {
  }

  toArray(detail: string): any {
    return detail.split(',');
  }

  getUniqueKind(obj: any): any {
    return [...new Map(obj.map((item: any) => [item['part'], item['part']])).values()];
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
