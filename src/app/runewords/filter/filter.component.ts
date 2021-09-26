import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RuneService } from '../rune.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  type: string = this.route.snapshot.params.type;
  type_detail: string = this.route.snapshot.params.type_detail;

  runewords = this.rune.getRuneWords();

  constructor(private route: ActivatedRoute, private rune: RuneService) {
    this.route.params.subscribe( params => {
      this.type = params.type;
      this.type_detail = params.type_detail;
    });
  }

  ngOnInit(): void {
  }

}
