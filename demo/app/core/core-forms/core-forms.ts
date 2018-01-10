import {
    Component, EventEmitter, OnInit,
    Input, ViewChild, AfterViewInit, ViewEncapsulation,
    AfterContentInit, Output, AfterContentChecked
} from '@angular/core';
import { LayoutVComponent, LayoutHeaderDirective } from 'meepo-layout';
import { Subject } from 'rxjs/Subject';
import { SwiperScrollComponent } from 'meepo-swiper';
import { EventService } from 'meepo-event';

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
    @ViewChild('scroll') scroll: SwiperScrollComponent;
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

    items: any[] = [{}, {}, {}, {}, {}, {}];
    height$: Subject<any> = new Subject();

    constructor(
        public event: EventService
    ) {
        this.height$.debounceTime(100).subscribe(res => {
            this.init.emit(res);
        });
    }

    ngOnInit() { }

    ngAfterViewInit() {
        const height = this.header.getHeight();
        this.height$.next(height);
        this.scroll.setItems(this.items);
    }
    ngAfterContentChecked() {
        const height = this.header.getHeight();
        this.height$.next(height);
    }

    up(e: any) {
        e.next();
    }

    down(e: any) {
        e.next();
    }

    onTimePicker(e: any) { }

    _onStartAddressSelect() { }

    _onEndAddressSelect() { }

    myLocation() { }

    setWeight() { }

    finish() { }
}
