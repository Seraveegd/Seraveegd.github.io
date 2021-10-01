import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  type: string = this.route.snapshot.params.type;
  type_detail: string = this.route.snapshot.params.type_detail;

  Items = this.recipe.getItems();

  types: { [key: string]: string } = {
    item: '物品',
    portal: '傳送門',
    hole: '鑲孔',
    quality: '品質',
    affixe: '詞綴',
    necklace: '項鍊',
    ring: '戒指',
    equipment: '裝備',
    pharmacy: '藥劑',
    consumables: '消耗品',
    reset: '重置'
  };

  constructor(private route: ActivatedRoute, private recipe: RecipeService) {
    this.route.params.subscribe(params => {
      this.type = params.type;
      this.type_detail = params.type_detail;
    });
  }

  ngOnInit(): void {
  }

  toArray(detail: string): any {
    console.log(detail);
    return detail.split(',');
  }

  getUniqueType(obj: any): any {
    return [...new Map(obj.map((item: any) => [item['type'], item['type']])).values()];
  }

}
