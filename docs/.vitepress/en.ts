import { defineConfig, DefaultTheme } from 'vitepress'


export const en = defineConfig({
  lang: 'en-US',
  description: 'Vite & Vue powered static site generator.',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/apis/': { base: '/apis/', items: sidebarAPI() },
      '/about/': { base: '/about/', items: sidebarAbout() }
    },

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'API文档',
      link: '/apis/index',
      activeMatch: '/api/'
    },
    {
      text: '关于',
      link: '/about/index',
      activeMatch: '/about/'
    },
    {
      text: 'pkg.version',
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}

function sidebarAPI(): DefaultTheme.SidebarItem[] {
  return [
    
  ]
}

function sidebarAbout(): DefaultTheme.SidebarItem[] {
  return [
    
  ]
}