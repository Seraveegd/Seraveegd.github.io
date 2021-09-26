import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuneService } from '../rune.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  type: string = this.route.snapshot.params.type;
  type_detail: string = this.route.snapshot.params.type_detail;

  runewords = this.rune.getRuneWords();
  control: object[] = [];
  runes = this.rune.getRunes().subscribe((val: any[]) => {
    if (val) {
      val.forEach((e: any) => {
        const key = e.name_en;
        const value = e.name;
        this.control[key] = value;
      });
    }
  });

  indexedArray: {[key: string]: number} = {
    foo: 2118,
    bar: 2118
}

  types: {[key: string]: string} = {
    weapon : '武器',
    helmet : '頭盔',
    armor : '盔甲',
    shield : '盾牌'
  };

  constructor(private route: ActivatedRoute, private rune: RuneService) {
    this.route.params.subscribe(params => {
      this.type = params.type;
      this.type_detail = params.type_detail;
    });



  }

  ngOnInit(): void {

  }

}
