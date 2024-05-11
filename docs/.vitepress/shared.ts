import { defineConfig } from 'vitepress'
import { search as ZhSearch } from './zh'

export const shared = defineConfig({
  title: '仅记',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],

  themeConfig: {
    logo: '/logo.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: { ...ZhSearch }
      }
    },
    
  }
})