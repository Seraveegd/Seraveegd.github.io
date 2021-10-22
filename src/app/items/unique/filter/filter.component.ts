import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CommunivateService } from '../../../runewords/communivate.service';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  code: string = this.route.snapshot.params.code;

  filters: string[] = [];

  filtersFormat: { [key: string]: string[] } = {};

  uniques = this.item.getUniques();

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

  constructor(private route: ActivatedRoute, private item: ItemService, private sanitizer: DomSanitizer, private c: CommunivateService) {
    this.route.params.subscribe(params => {
      this.code = params.code;

      this.filters = eval(window.atob(this.code));

      this.filterFormat();

      this.c.updateData(this.code);
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

  filterFormat(): void {
    this.filtersFormat = {};
    this.filters.forEach((filter: string) => {
      const filters = filter.split(':')
      const filter_details = filters[1].split(',')

      filter_details.forEach(val => {
        if (this.filtersFormat[filters[0]] && !this.filtersFormat[filters[0]].includes(val)) {
          this.filtersFormat[filters[0]].push(val)
        } else {
          this.filtersFormat[filters[0]] = [val]
        }
      })
    });
  }

  rename(name: string): string{
    return name.replace(new RegExp(' ','gm'), '_');
  }

}
