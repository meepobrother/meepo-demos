import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AxiosService } from 'meepo-axios';

@Component({
    selector: 'core-menu',
    templateUrl: './core-menu.html',
    styleUrls: ['./core-menu.scss']
})
export class CoreMenuComponent implements OnInit {
    menus: any[] = [];
    others: any[] = [];
    info: any = {};

    absolute: boolean = true;
    constructor(
        public axios: AxiosService,
        public cd: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.axios.get('./assets/core.menu.json?t' + new Date().getTime()).subscribe((data: any) => {
            const res: any = data.info;
            if (res) {
                if (res.menus) {
                    this.menus = res.menus;
                }
                if (res.others) {
                    this.others = res.others;
                }
                if (res.user) {
                    this.info = res.user;
                }
            }
        });
    }

    onEnd(res) {
        if (res) {
            this.absolute = !res.isEnd;
            this.cd.markForCheck();
        }
    }

}
