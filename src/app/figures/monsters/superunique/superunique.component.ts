import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FigureService } from '../../figure.service';
import { TreasureclassComponent } from '../treasureclass/treasureclass.component';

@Component({
  selector: 'app-superunique',
  templateUrl: './superunique.component.html',
  styleUrls: ['./superunique.component.scss']
})
export class SuperuniqueComponent implements OnInit {

  superuniques = this.figure.getSuperUniques();

  constructor(private figure: FigureService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showTC(tc: string) {
    let dialogRef = this.dialog.open(TreasureclassComponent, {
      data: tc,
      backdropClass: 'backdropBackground',
      panelClass: 'custom-dialog-container'
    });
  }

}
