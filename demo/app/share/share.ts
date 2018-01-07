import { NgModule } from '@angular/core';
import { MinirefreshModule } from 'meepo-minirefresh';
import { LoaderModule } from 'meepo-loader';
import { SwiperModule } from 'meepo-swiper';
import { FooterModule } from 'meepo-footer';
import { CategoryModule } from 'meepo-category';
import { ArticleModule } from 'meepo-article';
import { HomeModule } from 'meepo-home';
import { MeepoBmapModule } from 'meepo-bmap';
import { HeaderModule } from 'meepo-header';


@NgModule({
    imports: [
        MinirefreshModule,
        LoaderModule.forRoot({
            root: ''
        }),
        SwiperModule,
        FooterModule.forRoot({
            url: './assets/footer.json'
        }),
        CategoryModule.forRoot('./assets/category.json'),
        ArticleModule,
        HomeModule,
        MeepoBmapModule,
        HeaderModule
    ],
    exports: [
        MinirefreshModule,
        LoaderModule,
        SwiperModule,
        FooterModule,
        CategoryModule,
        ArticleModule,
        HomeModule,
        MeepoBmapModule,
        HeaderModule
    ]
})
export class ShareModule { }
