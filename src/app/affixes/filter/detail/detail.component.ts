import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  showAbility(a: string, replace: any[]): SafeHtml {
    if (replace.length > 0) {
      replace.forEach(value => a = a.replace('#', `<span style="color: rgb(3 203 203)">${value}</span>`));
      return this.sanitizer.bypassSecurityTrustHtml(a);
    } else {
      return a;
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  showLevel(level: any): string {
    if (typeof level === 'number') {
      return level + '';
    } else {
      return '(' + level.join('-') + ')';
    }
  }

  getRare(ability: any, td: string): SafeHtml {
    const details = td.split(',');

    let result = '稀有';

    if (ability !== {} && ability.hasOwnProperty('magic')) {
      details.forEach((d: any) => {
        if (ability.magic.includes(d) || d === 'smallcharm' || d === 'largecharm' || d === 'grandcharm') {
          result = '魔法';
        }
      });
    }

    if (details.length === 1 && (td === 'smallcharm' || td === 'largecharm' || td === 'grandcharm')) {
      result = '魔法';
    }

    return this.sanitizer.bypassSecurityTrustHtml(result === '稀有' ? `<span style="color: rgb(255 255 111)">${result}</span>` : result);
  }

}
