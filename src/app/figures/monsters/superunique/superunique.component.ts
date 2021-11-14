import { Component, OnInit } from '@angular/core';
import { FigureService } from '../../figure.service';

@Component({
  selector: 'app-superunique',
  templateUrl: './superunique.component.html',
  styleUrls: ['./superunique.component.scss']
})
export class SuperuniqueComponent implements OnInit {

  superuniques = this.figure.getSuperUniques();

  constructor(private figure: FigureService) { }

  ngOnInit(): void {
  }

}
