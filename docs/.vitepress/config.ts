import { defineConfig } from 'vitepress'
import algolia from './algolia'
import socialLinks from './sociallinks'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IRONY",
  description: "",
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    outline: 'deep',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '返回顶部',
    outlineTitle: '导航栏',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '归档',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '📖 功能列表',
        items: [
          { text: '🤖 聊天辅助类', link: '/help1' },
          { text: '🔨 实用工具类', link: '/help2' },
          { text: '🎮 娱乐游戏类', link: '/help3' },
        ],
      },
      { text: '🚫 封禁记录', link: '/banned' },
      { text: '💴 赞助支持', link: '/sponsors' },
    ],

    sidebar: [
      {
        text: '使用文档',
        items: [
          {
            text: '📖 功能列表',
            items: [
              { text: '🤖 聊天辅助类', link: '/help1' },
              { text: '🔨 实用工具类', link: '/help2' },
              { text: '🎮 娱乐游戏类', link: '/help3' },
            ],
          },
          { text: '🚫 封禁记录', link: '/banned' },
          { text: '💴 赞助支持', link: '/sponsors' }
        ]
      }
    ],

    socialLinks,

    algolia,

  footer: {
      message: `感谢陪伴，一路有你`,
      copyright: `版权所有 © 2022-2023`
    },

  }
})
