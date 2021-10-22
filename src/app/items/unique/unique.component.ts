import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunivateService } from '../../runewords/communivate.service';

@Component({
  selector: 'app-unique',
  templateUrl: './unique.component.html',
  styleUrls: ['./unique.component.scss']
})
export class UniqueComponent implements OnInit {
  filters: string[] = [];

  constructor(private router: Router, private c: CommunivateService) {
    this.c.getData().subscribe((data: any) => {
      this.filters = eval(window.atob(data));
    });
  }

  ngOnInit(): void {
  }

  addfilter(filter: string): void {
    if (!this.filters.includes(filter)) {
      this.filters.push(filter);
    } else {
      this.filters.splice(this.filters.findIndex(e => e === filter), 1);
    }

    if (this.filters.length === 0) {
      this.router.navigate(['items', 'unique']);
    } else {
      this.router.navigate(['items', 'unique', 'filter', this.btoa()]);
    }
  }

  btoa(): string {
    return window.btoa(JSON.stringify(this.filters));
  }

  clearfilters(): void {
    this.filters = [];
    this.router.navigate(['items', 'unique']);
  }

}
