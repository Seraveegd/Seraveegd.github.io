import { Component, OnInit } from '@angular/core';
import { RuneService } from './rune.service';

@Component({
  selector: 'app-runewords',
  templateUrl: './runewords.component.html',
  styleUrls: ['./runewords.component.scss']
})
export class RunewordsComponent implements OnInit {
  runes = this.rune.getRunes();

  windowWidth = window.innerWidth;

  constructor(private rune: RuneService) { }

  ngOnInit(): void {
  }

  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }

}
