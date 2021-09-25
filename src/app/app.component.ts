import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav_content', {static: true}) sidenavContent: any;

  windowWidth = window.innerWidth;
  fixed = false;

  onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }

  onScroll(event: any) {
    this.fixed = event.target.scrollTop > 130;
  }

  scrollTop() {
    this.sidenavContent.elementRef.nativeElement.scrollTop = 0;
  }
}
