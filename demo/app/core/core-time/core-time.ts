import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'core-time',
    templateUrl: './core-time.html',
    styleUrls: ['./core-time.scss']
})
export class CoreTimeComponent implements OnInit {
    @Input() isCoach: boolean = false;
    @Output() onPicker: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnInit() { }

    doNow() {
        this.isCoach = false;
    }

    doCoach() {
        this.isCoach = true;
    }

    timePicker(e: any) {
        this.onPicker.emit(e);
    }
}
