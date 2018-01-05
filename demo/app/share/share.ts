import { NgModule } from '@angular/core';
import { MinirefreshModule } from 'meepo-minirefresh';
import { LoaderModule } from 'meepo-loader';
import { SwiperModule } from 'meepo-swiper';
import { FooterModule } from 'meepo-footer';
import { CategoryModule } from 'meepo-category';
import { ArticleModule } from 'meepo-article';
import { HomeModule } from 'meepo-home';

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
        HomeModule
    ],
    exports: [
        MinirefreshModule,
        LoaderModule,
        SwiperModule,
        FooterModule,
        CategoryModule,
        ArticleModule,
        HomeModule
    ]
})
export class ShareModule { }
