import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  title: 'VitePress',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
  },

  /* prettier-ignore */
  head: [
    ],

  themeConfig: {
    logo: '/logo.png',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    },
    
  }
})