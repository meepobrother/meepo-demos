import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreMenuComponent } from './core-menu/core-menu';
import { CoreFormsComponent } from './core-forms/core-forms';
import { CoreTimeComponent } from './core-time/core-time';

import { SwiperModule } from 'meepo-swiper';
import { AxiosModule } from 'meepo-axios';
import { IconsModule } from 'meepo-icons';
import { MeepoBmapModule } from 'meepo-bmap';
import { LayoutModule } from 'meepo-layout';
import { PickerModule } from 'meepo-picker';
import { MeepoFormsModule } from 'meepo-forms';
import { MinirefreshModule } from 'meepo-minirefresh';
import { CategoryModule } from 'meepo-category';


@NgModule({
    imports: [
        CommonModule,
        SwiperModule.forRoot(),
        AxiosModule,
        IconsModule,
        MeepoBmapModule,
        LayoutModule,
        PickerModule,
        MeepoFormsModule,
        MinirefreshModule,
        CategoryModule
    ],
    exports: [
        CoreMenuComponent,
        CoreFormsComponent,
        CoreTimeComponent,
        SwiperModule,
        IconsModule,
        AxiosModule,
        MeepoBmapModule,
        LayoutModule,
        PickerModule,
        MeepoFormsModule,
        MinirefreshModule,
        CategoryModule
    ],
    declarations: [
        CoreMenuComponent,
        CoreFormsComponent,
        CoreTimeComponent
    ]
})
export class CoreModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule
        };
    }
}
