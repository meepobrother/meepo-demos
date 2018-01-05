import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MeepoCache } from 'meepo-base';
import { StoreService } from 'meepo-store';
import { Title } from '@angular/platform-browser';
import { AxiosService } from 'meepo-axios';

@Component({
    selector: 'app-index',
    templateUrl: './app-index.html'
})
export class AppIndexComponent extends MeepoCache {
    key: string = 'app.index';
    data: any = {
        advs: [],
        items: [],
        charms: []
    };
    constructor(
        public store: StoreService,
        public cd: ChangeDetectorRef,
        public title: Title,
        public axios: AxiosService
    ) {
        super(store, cd, title);
    }

    meepoInit() {
        this.down();
    }

    up(e?: any) {
        this.axios.get('./assets/index.json').subscribe((res: any) => {
            this.data.items = [...this.data.items, ...res.info.items];
            const hasMore = false;
            e.next(hasMore);
            this.cd.markForCheck();
        });
    }

    down(e?: any) {
        this.axios.get('./assets/index.json').subscribe((res: any) => {
            this.data.items = res.info.items;
            this.data.advs = res.info.advs;
            this.data.charms = res.info.charms;
            if (e) {
                e.next(false);
            }
            this.cd.markForCheck();
        });
    }
}
