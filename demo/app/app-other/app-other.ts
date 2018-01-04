import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from 'meepo-event';
import { CategoryComponent } from 'meepo-category';

@Component({
    selector: 'app-other',
    templateUrl: './app-other.html',
    styleUrls: ['./app-other.css']
})
export class AppOtherComponent implements OnInit {
    @ViewChild('category') category: CategoryComponent;

    ngOnInit() { }

    constructor(
        public event: EventService
    ) {
        const now = new Date();
        const version = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate()).getTime();
        this.event.checkVersion(version);
    }

    setItem(item: any) {
        this.category.addHistory(item);
    }
}
