import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AffixeService } from '../affixe.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { DetailComponent } from './detail/detail.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  type: string = this.route.snapshot.params.type;
  type_detail: string = this.route.snapshot.params.type_detail;

  prefixs = this.affixe.getPrefixs();
  suffixs = this.affixe.getSuffixs();

  constructor(private route: ActivatedRoute, private affixe: AffixeService, private sanitizer: DomSanitizer,
    private dialog: MatDialog) {
    this.route.params.subscribe(params => {
      this.type = params.type;
      this.type_detail = params.type_detail;
    });
  }

  ngOnInit(): void {
  }

  showDetail(format: string, abilitys: object[]): void {
    let dialogRef = this.dialog.open(DetailComponent, {
      data: {
        format: format,
        abilitys: abilitys,
        type: this.type,
        type_detail: this.type_detail
      },
      backdropClass: 'backdropBackground',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  showAbility(a: string, replace: any[]): SafeHtml {
    if (replace.length > 0) {
      replace.forEach(value => a = a.replace('#', `<span style="color: rgb(3 203 203)">${value}</span>`));
      return this.sanitizer.bypassSecurityTrustHtml(a);
    } else {
      return a;
    }
  }

  showAffixe(a: string, replace: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(a.replace(new RegExp("#", "gm"), `<span style="color: rgb(3 203 203)">${replace}</span>`));
  }

  getMaxlevel(abilitys: object[]){
    let level = 0;
    abilitys.forEach((a: any) => {
      if(a.level >= level){
        level = a.level
      }
    });

    return level;
  }

}