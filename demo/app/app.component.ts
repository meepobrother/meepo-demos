import { Component, ViewChild } from '@angular/core';
import { EventService, WinEventService } from 'meepo-event';
import { SwiperHComponent } from 'meepo-swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuWidth: string = (80 * 3) + 'px';

  @ViewChild(SwiperHComponent) swiperH: SwiperHComponent;

  rightOpen: boolean = false;
  leftOpen: boolean = false;
  constructor(
    public event: EventService,
    public win: WinEventService
  ) {
    const now = new Date();
    const version = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate()).getTime();
    this.event.checkVersion(version);

    this.event.subscribe('menu.open', () => {
      if (this.swiperH) {
        this.swiperH.slideTo(0);
      }
    });
  }

  openLeftMenu(e: any) {
    if (this.swiperH) {
      if (this.leftOpen) {
        this.swiperH.slideTo(1);
        this.leftOpen = false;
      } else {
        this.swiperH.slideTo(0);
        this.leftOpen = true;
      }
    }
    e.preventDefault();
    e.stopPropagation();
  }

  openRightMenu(e: any) {
    if (this.swiperH) {
      if (this.rightOpen) {
        this.swiperH.slideTo(1);
        this.leftOpen = false;
      } else {
        this.swiperH.slideTo(2);
        this.leftOpen = true;
      }
    }
    e.preventDefault();
    e.stopPropagation();
  }
}
