import { Component, OnInit } from '@angular/core';
import { RuneService } from '../../runewords/rune.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.scss']
})
export class RunesComponent implements OnInit {

  runeupgrades = this.recipe.getRunes();

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

  constructor(private recipe: RecipeService, private rune: RuneService) { }

  ngOnInit(): void {
  }

}
