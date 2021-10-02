import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.scss']
})
export class GemComponent implements OnInit {
  selected = '';

  constructor() { }

  ngOnInit(): void {
  }

  clink(e: any): void {
    this.selected = e;
  }

}
