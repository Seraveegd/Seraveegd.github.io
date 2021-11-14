import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FigureService } from '../../figure.service';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent implements OnInit {

  monsters = this.figure.getMonsters();

  constructor(private figure: FigureService, private dialog: MatDialog, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if(params.id){
        this.figure.getMonsters().subscribe((monsters: any[]) =>{
          if(monsters){
            monsters.forEach((monster: any) => {
              if(monster.id === params.id){
                this.showDetail(monster);
              }
            });
          }
        });
      }
    });
  }

  ngOnInit(): void {
  }

  showDetail(monster: any): void {
    let dialogRef = this.dialog.open(DetailComponent, {
      data: {
        monster: monster,
      },
      backdropClass: 'backdropBackground',
      panelClass: 'custom-dialog-container'
    });
  }

}
