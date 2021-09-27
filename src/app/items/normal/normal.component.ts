import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss']
})
export class NormalComponent implements OnInit {
  selected = '';

  constructor() { }

  ngOnInit(): void {
  }

  clink(e: any): void {
    this.selected = e;
  }

}
