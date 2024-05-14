import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: "zh-CN",
    base: "/photograph-study/",
    title: "摄影基础学习",
    description: "记录一些摄影基础知识。",
    lastUpdated: true,
    themeConfig: {
        logo: "",
        siteTitle: "摄影基础学习",
        outline: {
            label: "章节导航",
            level: 'deep',
        },
        lastUpdated: {
            text: '最后更新时间',
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        editLink: {
            pattern: "https://github.com/curder/photographe-study/edit/master/docs/:path",
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/photographe-study'}
        ],
        nav: nav(),
        sidebar: {
            "/guide": sidebarGuide(),
        }
    }
});


function nav() {
    return [
        {text: "曝光三要素", link: "/three-elements-of-exposure"},
    ];
}

function sidebarGuide() {
    return [
        //
    ];
}