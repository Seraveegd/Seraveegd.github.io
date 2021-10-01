import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equitments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {
  selected = '';

  constructor() { }

  ngOnInit(): void {
  }

  clink(e: any): void {
    this.selected = e;
  }

}
