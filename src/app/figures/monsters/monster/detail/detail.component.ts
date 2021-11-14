import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Config } from '../../../../core/config.service';
import { Clipboard } from "@angular/cdk/clipboard"

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private clipboard: Clipboard, private snackBar: MatSnackBar,
    private config: Config) {
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

}
