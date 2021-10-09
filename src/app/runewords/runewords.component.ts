import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunivateService } from './communivate.service';

@Component({
  selector: 'app-runewords',
  templateUrl: './runewords.component.html',
  styleUrls: ['./runewords.component.scss']
})
export class RunewordsComponent implements OnInit {
  selected = '';

  filters: string[] = [];

  constructor(private router: Router, private c: CommunivateService) {
    this.c.getData().subscribe((data: any) => {
      this.filters = eval(window.atob(data));
    });
  }

  ngOnInit(): void {
  }

  clink(e: any): void {
    this.selected = e;
    this.filters = [];
  }

  addfilter(filter: string): void {
    if (!this.filters.includes(filter)) {
      this.filters.push(filter);
    } else {
      this.filters.splice(this.filters.findIndex(e => e === filter), 1);
    }

    if (this.filters.length === 0) {
      this.router.navigate(['runewords']);
    } else {
      this.router.navigate(['runewords', 'filter', this.btoa()]);
    }

    this.selected = '';
  }

  btoa(): string {
    return window.btoa(JSON.stringify(this.filters));
  }

  clearfilters(): void{
    this.filters = [];
    this.router.navigate(['runewords']);
  }

}
