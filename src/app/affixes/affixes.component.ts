import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affixes',
  templateUrl: './affixes.component.html',
  styleUrls: ['./affixes.component.scss']
})
export class AffixesComponent implements OnInit {
  selected = '';

  constructor() { }

  ngOnInit(): void {
  }

  clink(e: any): void {
    this.selected = e;
  }

}
