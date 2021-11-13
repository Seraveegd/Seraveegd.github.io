import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

}
