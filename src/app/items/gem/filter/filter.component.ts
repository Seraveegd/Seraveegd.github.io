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

  gems = this.item.getGems();

  types: { [key: string]: string } = {
    skull: '骷髏石',
    amethyst: '紫寶石',
    ruby: '紅寶石',
    sapphire: '藍寶石',
    topaz: '黃寶石',
    emerald: '綠寶石',
    diamond: '鑽石'
  };

  constructor(private route: ActivatedRoute, private item: ItemService, private sanitizer: DomSanitizer) {
    this.route.params.subscribe(params => {
      this.type = params.type;
      this.type_detail = params.type_detail;
    });
   }

  ngOnInit(): void {
  }

  getUniqueType(obj: any): any {
    return [...new Map(obj.map((item: any) => [item['type'], item['type']])).values()];
  }

  showAbility(a: string, replace: any[]): SafeHtml {
    if (replace.length > 0) {
      replace.forEach(value => a = a.replace('#', `<span style="color: rgb(3 203 203)">${value}</span>`));
      return this.sanitizer.bypassSecurityTrustHtml(a);
    } else {
      return a;
    }
  }

}
