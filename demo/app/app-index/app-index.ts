import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MeepoCache } from 'meepo-base';
import { StoreService } from 'meepo-store';
import { Title } from '@angular/platform-browser';
import { AxiosService } from 'meepo-axios';
import { EventService } from 'meepo-event';
import { HEADER_SHOWN, HEADER_HIDDEN } from 'meepo-header';
import { FOOTER_HIDDEN, FOOTER_SHOWN } from 'meepo-footer';
import { SwiperVComponent } from 'meepo-swiper';


@Component({
    selector: 'app-index',
    templateUrl: './app-index.html',
    styleUrls: ['./app-index.scss']
})
export class AppIndexComponent extends MeepoCache {
    @ViewChild('swiperV') swiperV: SwiperVComponent;
    key: string = 'app.index';
    offset: number = 0;
    absolute: boolean = true;
    data: any = {
        advs: [],
        runners: [],
        tasks: [],
        city: {}
    };
    constructor(
        public store: StoreService,
        public cd: ChangeDetectorRef,
        public title: Title,
        public axios: AxiosService,
        public event: EventService
    ) {
        super(store, cd, title);
    }

    onEnd(res) {
        if (res) {
            this.absolute = !res.isEnd;
            this.cd.markForCheck();
        }
    }

    openMenu(e: Event) {
        this.event.publish('menu.open', '');
        e.preventDefault();
        e.stopPropagation();
    }

    initForms(e: any) {
        this.offset = e;
        this.cd.detectChanges();
    }

    meepoInit() {
        console.log('meepoInit');
    }
}
