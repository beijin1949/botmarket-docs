import {defineUserConfig} from "vuepress";
import type {DefaultThemeOptions} from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
    title: "Botmarket Docs",
    description: "Botmarket机器人市场的api文档，kook机器人对接bm请看此文档",
    locales: {
        '/': {
            lang: 'zh-CN',
            selectLanguageName: '简体中文',
        },
        '/en-us/': {
            lang: 'en-US',
            selectLanguageName: 'English',
        },
    },


    theme: recoTheme({
        style: "@vuepress-reco/style-default",
        logo: "/logo.png",
        authorAvatar: "/head.png",
        docsRepo: "https://github.com/beijin1949/botmarket-docs",
        docsBranch: "main",
        autoSetSeries: true,
        primaryColor: '#0075ff',
        locales: {
            '/': {
                lang: 'zh-CN',
                selectLanguageText: '切换语言',
                navbar: [
                    {text: 'Hook API', link: '/hook/', icon: 'Harbor'},
                ],
                series: {
                    "/hook/": [
                        {
                            text: "机器人",
                            children: ['gift', 'comment'],
                        },
                    ],
                },
            },
            '/en-us/': {
                lang: 'en-US',
                selectLanguageText: 'Language',
                navbar: [
                    {text: 'Hook API', link: '/hook/', icon: 'Harbor'},
                ],
                series: {
                    "/en-us/hook/": [
                        {
                            text: "Bots",
                            children: ['gift', 'comment'],
                        },
                    ],
                },
            },
        },

        // bulletin: {
        //   body: [
        //     {
        //       type: "text",
        //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
        //       style: "font-size: 12px;",
        //     },
        //     {
        //       type: "hr",
        //     },
        //     {
        //       type: "title",
        //       content: "QQ 群",
        //     },
        //     {
        //       type: "text",
        //       content: `
        //       <ul>
        //         <li>QQ群1：1037296104</li>
        //         <li>QQ群2：1061561395</li>
        //         <li>QQ群3：962687802</li>
        //       </ul>`,
        //       style: "font-size: 12px;",
        //     },
        //     {
        //       type: "hr",
        //     },
        //     {
        //       type: "title",
        //       content: "GitHub",
        //     },
        //     {
        //       type: "text",
        //       content: `
        //       <ul>
        //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
        //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
        //       </ul>`,
        //       style: "font-size: 12px;",
        //     },
        //     {
        //       type: "hr",
        //     },
        //     {
        //       type: "buttongroup",
        //       children: [
        //         {
        //           text: "打赏",
        //           link: "/docs/others/donate.html",
        //         },
        //       ],
        //     },
        //   ],
        // },
        // commentConfig: {
        //   type: 'valine',
        //   // options 与 1.x 的 valineConfig 配置一致
        //   options: {
        //     // appId: 'xxx',
        //     // appKey: 'xxx',
        //     // placeholder: '填写邮箱可以收到回复提醒哦！',
        //     // verify: true, // 验证码服务
        //     // notify: true,
        //     // recordIP: true,
        //     // hideComments: true // 隐藏评论
        //   },
        // },
    }),
    // debug: true,
});
