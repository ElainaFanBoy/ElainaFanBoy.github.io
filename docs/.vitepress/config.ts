import { defineConfig } from 'vitepress'
import socialLinks from './sociallinks'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "IRONY",
  titleTemplate: "使用文档",
  description: "IRONY 使用文档",

  themeConfig: {
  siteTitle: "IRONY's Docs",
  search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://gcore.jsdelivr.net/gh/ElainaFanBoy/ElainaFanBoy.github.io/docs/logo.png',
    outline: 'deep',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '返回顶部',
    outlineTitle: '导航栏',
    darkModeSwitchLabel: '夜间模式',
    sidebarMenuLabel: '目录',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '📝 功能列表',
        items: [
          { text: '😺 聊天辅助类', link: '/helps#一、聊天辅助类' },
          { text: '🔨 实用工具类', link: '/helps#二、实用工具类' },
          { text: '🎮 娱乐游戏类', link: '/helps#三、娱乐游戏类' },
        ],
      },
      { text: '🚫 封禁记录', link: '/banned' },
      { text: '💴 赞助支持', link: '/donates' },
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '🎉 快速开始', link: '/home' },
          { text: '📝 使用条款', link: '/terms-of-use' },
          { text: '📝 隐私政策', link: '/privacy-policy' },
          
        ],
      },
      {
        text: '使用文档',
        items: [
          {text: '📝 功能列表', link: '/helps'},
          { text: '🚫 封禁记录', link: '/banned' },
          { text: '💴 赞助支持', link: '/donates' }
        ]
      }
    ],

    socialLinks,

    footer: {
      message: `Edited By Nanako`,
      copyright: `Copyright © 2022`
    }
  }
})
