import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuneService } from 'src/app/runewords/rune.service';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  type: string = this.route.snapshot.params.type;
  type_detail: string = this.route.snapshot.params.type_detail;

  equipments = this.recipe.getEquipments();

  types: { [key: string]: string } = {
    hole: '鑲孔',
    equipment: '裝備',
    weapon: '武器',
    armor: '防具',
    repair: '修復',
    upgrade: '水管',
    destory: '摧毀',
    rune: '符文',
    gem: '寶石'
  };

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

  constructor(private route: ActivatedRoute, private recipe: RecipeService, private rune: RuneService) {
    this.route.params.subscribe(params => {
      this.type = params.type;
      this.type_detail = params.type_detail;
    });
  }

  ngOnInit(): void {
  }

}
