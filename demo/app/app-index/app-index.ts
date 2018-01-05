import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

const charms: any[] = [{
    title: '标题1',
    image: 'https://p.qpic.cn/qqconadmin/0/225ce8067b434eb9b2bb02f966599a4e/0',
    desc: '简介简介简介简介简介简介',
    color: 'rgb(26, 182, 252)'
}, {
    title: '标题1',
    image: 'https://p.qpic.cn/qqconadmin/0/225ce8067b434eb9b2bb02f966599a4e/0',
    desc: '简介简介简介简介简介简介',
    color: 'rgb(255, 184, 0)'
}, {
    title: '标题1',
    image: 'https://p.qpic.cn/qqconadmin/0/225ce8067b434eb9b2bb02f966599a4e/0',
    desc: '简介简介简介简介简介简介',
    color: 'rgb(255, 100, 100)'
}, {
    title: '标题1',
    image: 'https://p.qpic.cn/qqconadmin/0/225ce8067b434eb9b2bb02f966599a4e/0',
    desc: '简介简介简介简介简介简介',
    color: 'rgb(255, 90, 164)'
}];

const items = [{
    desc: '考上就“偷着乐”的五类专业, 20年后也不会“衰落”!',
    images: [
        {
            src: 'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
            type: 'video'
        }
    ],
    avatar: 'https://q.qlogo.cn/g?b=qq&k=VIE5RHCJLvbeXSZXXndASw&s=100',
    nickname: '杨明明',
    goods: 0,
    discuss: 0,
    look: 0,
    title: '米波网络',
    color: 'red',
    link: ''
}, {
    desc: '考上就“偷着乐”的五类专业, 20年后也不会“衰落”!',
    images: [
        {
            src: 'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
            type: 'image'
        },
        {
            src: 'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
            type: 'image'
        },
        {
            src: 'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
            type: 'image'
        },
    ],
    avatar: 'https://q.qlogo.cn/g?b=qq&k=VIE5RHCJLvbeXSZXXndASw&s=100',
    nickname: '杨明明',
    goods: 0,
    discuss: 0,
    look: 0,
    title: '米波网络',
    color: 'red',
    link: ''
}, {
    desc: '考上就“偷着乐”的五类专业, 20年后也不会“衰落”!',
    images: [
        {
            src: 'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
            type: 'image'
        },
        {
            src: 'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
            type: 'image'
        },
        {
            src: 'https://gpic.qpic.cn/gbar_pic/SMBRdKzfPmiaJsG7tzfXFeYKicBIUzEzPwXgXtibQUJiaCRmFYbroVOumWCSRtlI9kiaP/320',
            type: 'image'
        },
    ],
    avatar: 'https://q.qlogo.cn/g?b=qq&k=VIE5RHCJLvbeXSZXXndASw&s=100',
    nickname: '杨明明',
    goods: 0,
    discuss: 0,
    look: 0,
    title: '米波网络',
    color: 'red',
    link: ''
}];

@Component({
    selector: 'app-index',
    templateUrl: './app-index.html'
})

export class AppIndexComponent {
    advs: any[] = [{
        image: 'https://bpic.588ku.com/element_banner/20/18/01/30e45fbaed76c6d9e1c75f81cbe4e324.jpg',
    }, {
        image: 'https://bpic.588ku.com/element_banner/20/18/01/1f074dddcd63a3356376372985d48bea.jpg',
    }];

    items: any[] = [];
    charms: any[] = [];

    constructor(
        public cd: ChangeDetectorRef
    ) {

    }

    up(e: any) {
        const hasMore = false;
        this.items = [...this.items, ...items];
        // 是否还有更多了
        console.log('load');
        e.next(hasMore);
        this.cd.markForCheck();
    }

    down(e: any) {
        this.items = items;
        this.charms = charms;
        console.log('refresh');
        e.next(false);
        this.cd.markForCheck();
    }
}
