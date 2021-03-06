import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Config } from '../../../../core/config.service';
import { Clipboard } from "@angular/cdk/clipboard"
import { FigureService } from '../../../figure.service';
import { TreasureclassComponent } from '../../treasureclass/treasureclass.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit {

  monlvls = this.figure.getMonsterLevels();

  constructor(public dialogRef: MatDialogRef<DetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private clipboard: Clipboard, private snackBar: MatSnackBar,
    private config: Config, private figure: FigureService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  genandcopy(monster: any): void {
    if (this.clipboard.copy(this.config.api_base_url + '/figures/monsters/monster/detail/' + monster.id)) {
      this.snackBar.open('已複製連結', '確認', {
        duration: 2000
      });
    } else {
      this.snackBar.open('複製連結失敗', '確認', {
        duration: 2000
      });
    }
  }

  getMultiplies(levels: any, level: number, type: string, difficult: string): number {
    return levels[level][type][difficult];
  }

  showTC(tc: string) {
    let dialogRef = this.dialog.open(TreasureclassComponent, {
      data: tc,
      backdropClass: 'backdropBackground',
      panelClass: 'custom-dialog-container'
    });
  }

}
