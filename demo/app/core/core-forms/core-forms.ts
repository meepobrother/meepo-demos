import {
    Component, EventEmitter, OnInit,
    Input, ViewChild, AfterViewInit, ViewEncapsulation,
    AfterContentInit, Output, AfterContentChecked
} from '@angular/core';
import { LayoutVComponent, LayoutHeaderDirective } from 'meepo-layout';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'core-forms',
    templateUrl: './core-forms.html',
    styleUrls: ['./core-forms.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CoreFormsComponent implements OnInit, AfterViewInit, AfterContentChecked {
    @ViewChild(LayoutVComponent) v: LayoutVComponent;
    @ViewChild(LayoutHeaderDirective) header: LayoutHeaderDirective;
    @Output() init: EventEmitter<any> = new EventEmitter();
    app: any = {};
    total: number = 0;
    startSetting: any = {
        show: true
    };
    endSetting: any = {
        show: true
    };
    weightSetting: any = {
        show: true,
        placeholder: '请输入重量'
    };
    endLoading: boolean = true;
    startLoading: boolean = true;


    btnTitle: string = '立即下单';
    constructor() {
        this.height$.debounceTime(100).subscribe(res => {
            this.init.emit(res);
        });
    }

    ngOnInit() { }

    touchstart(e: Event) {
        e.preventDefault();
        e.stopPropagation();
    }

    ngAfterViewInit() {
        const height = this.header.getHeight();
        this.height$.next(height);
    }
    height$: Subject<any> = new Subject();
    ngAfterContentChecked() {
        const height = this.header.getHeight();
        this.height$.next(height);
    }

    onTimePicker(e: any) { }

    _onStartAddressSelect() { }

    _onEndAddressSelect() { }

    myLocation() { }

    setWeight() { }

    finish() { }
}
