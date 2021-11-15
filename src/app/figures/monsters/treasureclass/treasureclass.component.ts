import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FigureService } from '../../figure.service';

@Component({
  selector: 'app-treasureclass',
  templateUrl: './treasureclass.component.html',
  styleUrls: ['./treasureclass.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TreasureclassComponent implements OnInit {

  formattcs: { [key: string]: object[] } = {};

  tcs = this.figure.getTreasureClass().subscribe((val: any) => {
    // console.log(val);
    if (val) {
      val.forEach((e: any) => {
        const key = e.tc;
        this.formattcs[key] = e;
      });
    }

    if (this.data) {
      this.gettcs(this.data);
    }
  });


  storedtcs: string[] = [];

  drops: string[] = [];

  constructor(public dialogRef: MatDialogRef<TreasureclassComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private figure: FigureService) {
    // if(this.data){
    //   this.gettcs(this.data);
    // }
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  gettcs(tc: string): void {
    this.getvalue(this.formattcs[tc]).forEach((e: any) => {
      if (e.item != "") {
        if (e.item.charAt(0) === e.item.charAt(0).toUpperCase()) {
          this.addtcs(e.item);
          this.gettcs(e.item);
        } else {
          this.adddrops(e.item);
        }
      }
    });
  }

  addtcs(tc: string) {
    if (this.storedtcs.indexOf(tc) == -1) {
      this.storedtcs.push(tc)
    }
  }

  adddrops(drop: string) {
    if (this.drops.indexOf(drop) == -1) {
      this.drops.push(drop)
    }
  }

  getvalue(o: any): any[] {
    return o.drops;
  }

}
