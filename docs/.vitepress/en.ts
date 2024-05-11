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
      pattern: 'https://github.com/markbang/onlywrite-doc/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      copyright: `Copyright © 2024-${new Date().getFullYear()} OnlyWrite`
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'API Docs',
      link: '/apis/index',
      activeMatch: '/api/'
    },
    {
      text: 'About',
      link: '/about/index',
      activeMatch: '/about/'
    },
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