import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-runewords',
  templateUrl: './runewords.component.html',
  styleUrls: ['./runewords.component.scss']
})
export class RunewordsComponent implements OnInit {
  selected = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  clink(e: any): void {
    this.selected = e;
  }

}
