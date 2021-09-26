import { Component, OnInit } from '@angular/core';
import { RuneService } from '../rune.service';

@Component({
  selector: 'app-rune',
  templateUrl: './rune.component.html',
  styleUrls: ['./rune.component.scss']
})
export class RuneComponent implements OnInit {
  runes = this.rune.getRunes();

  windowWidth = window.innerWidth;

  constructor(private rune: RuneService) { }

  ngOnInit(): void {
  }

  onResize(event: any): void {
    this.windowWidth = event.target.innerWidth;
  }

}
