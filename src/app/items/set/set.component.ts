import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})
export class SetComponent implements OnInit {
  selected = '';

  constructor() { }

  ngOnInit(): void {
  }

  clink(e: any): void {
    this.selected = e;
  }

}
