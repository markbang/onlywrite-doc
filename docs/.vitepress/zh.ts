import { defineConfig, DefaultTheme } from 'vitepress'



export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '仅记app官方文档',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/apis/': { base: '/apis/', items: sidebarGuide() },
      '/about/': { base: '/about/', items: sidebarReference() }
    },

    editLink: {
      pattern: 'https://github.com/markbang/onlywrite-doc/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      copyright: `版权所有 © 2024-${new Date().getFullYear()} 仅记`
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
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
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [

  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    
  ]
}

export const search: DefaultTheme.LocalSearchOptions['locales'] = {
  root: {
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        noResultsText: '无法找到相关结果',
        resetButtonTitle: '清除查询条件',
        footer: {
          selectText: '选择',
          navigateText: '切换'
        }
      }
    }
  }
}