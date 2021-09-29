import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../recipe.service';
import { RuneService } from '../../../runewords/rune.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  type: string = this.route.snapshot.params.type;
  type_detail: string = this.route.snapshot.params.type_detail;

  crafts = this.recipe.getCrafts();

  kindNottofind = ['hitpower', 'blood', 'caster', 'safety'];

  kinds: { [key: string]: string } = {
    hitpower: '打擊',
    blood: '生命',
    caster: '施法',
    safety: '防護'
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

  getUniqueKind(obj: any): any {
    return [...new Map(obj.map((item: any) => [item['kind'], item['kind']])).values()];
  }

}
