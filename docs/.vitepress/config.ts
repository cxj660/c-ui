import { defineConfig } from 'vitepress'

import {
  componentPreview,
  containerPreview
} from '@vitepress-demo-preview/plugin'

export default defineConfig({
  title: 'C-UI基础组件文档',
  description: '基于Element-plus基础组件封装使用',
  lang: 'cn-ZH',
  base: '/c-ui/',
  lastUpdated: true,
  themeConfig: {
    logo: 'https://img1.baidu.com/it/u=1546227440,2897989905&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    siteTitle: '基础组件文档',
    outline: 3,
    socialLinks: [
      { icon: 'github', link: '' }
    ],
    nav: [
      {
        text: '安装指南',
        link: '/components/'
      },
      { text: '基础组件', link: '/components/button/index.md' },
      {
        text: '图表组件',
        link: 'https://gitee.com/wocwin/t-ui-plus'
      },
      {
        text: 'GitHub地址',
        link: 'https://github.com/wocwin/t-ui-plus'
      },
      {
        text: '博客',
        items: [
          { text: 'CSDN', link: 'https://blog.csdn.net/cwin8951' },
          { text: '掘金', link: 'https://juejin.cn/user/888061128344087/posts' }
        ]
      }
    ],
    sidebar: {
      '/components': [
        {
          text: '常用组件',
          items: [
            { text: 'Button按钮', link: '/components/button/index.md' },
            { text: 'Icon图标', link: '/components/icon/index.md' },
            { text: 'Link链接', link: '/components/link/index.md' }
          ]
        },
        {
          text: '布局',
          items: [
            {
              text: 'Divider分割线',
              link: '/components/divider/index.md'
            },
            { text: 'Grid栅格', link: '/components/grid/index.md' },
            { text: 'Layout布局', link: '/components/TTable/index.md' },
            { text: 'Space间距', link: '/components/TTable/index.md' }
          ]
        },
        {
          text: '数据展示',
          items: [
            {
              text: 'Avatar头像',
              link: '/components/TQueryCondition/index.md'
            },
            { text: 'Badge徽标', link: '/components/TForm/index.md' },
            { text: 'Calendar日历', link: '/components/TTable/index.md' },
            { text: 'Card卡片', link: '/components/TTable/index.md' },
            { text: 'Carousel图片轮播', link: '/components/TTable/index.md' },
            { text: '折叠面板', link: '/components/TTable/index.md' },
            { text: '空状态', link: '/components/TTable/index.md' },
            { text: '图片', link: '/components/TTable/index.md' },
            { text: '气泡卡片', link: '/components/TTable/index.md' },
            { text: '表格', link: '/components/TTable/index.md' },
            { text: '标签页', link: '/components/TTable/index.md' },
            { text: '标签', link: '/components/TTable/index.md' },
            { text: '时间轴', link: '/components/TTable/index.md' },
            { text: '文字气泡', link: '/components/TTable/index.md' },
            { text: '树', link: '/components/TTable/index.md' }
          ]
        },
        {
          text: '数据输入',
          items: [
            {
              text: '输入自动补全',
              link: '/components/TQueryCondition/index.md'
            },
            { text: '级联选择', link: '/components/TForm/index.md' },
            { text: '复选框', link: '/components/TTable/index.md' },
            { text: '日期选择器', link: '/components/TTable/index.md' },
            { text: '表单', link: '/components/TTable/index.md' },
            { text: '输入框', link: '/components/TTable/index.md' },
            { text: '数字输入框', link: '/components/TTable/index.md' },
            { text: '标签输入框', link: '/components/TTable/index.md' },
            { text: '单选框', link: '/components/TTable/index.md' },
            { text: '评分', link: '/components/TTable/index.md' },
            { text: '选择器', link: '/components/TTable/index.md' },
            { text: '开关', link: '/components/TTable/index.md' },
            { text: '文本域', link: '/components/TTable/index.md' },
            { text: '时间选择器', link: '/components/TTable/index.md' },
            { text: '上传', link: '/components/TTable/index.md' }
          ]
        },
        {
          text: '反馈',
          items: [
            {
              text: '全局提示',
              link: '/components/TQueryCondition/index.md'
            },
            { text: '弹框', link: '/components/TForm/index.md' },
            { text: '进度条', link: '/components/TTable/index.md' },
            { text: '加载中', link: '/components/TTable/index.md' }
          ]
        },
        {
          text: '导航',
          items: [
            {
              text: '面包屑',
              link: '/components/TQueryCondition/index.md'
            },
            { text: '下拉菜单', link: '/components/TForm/index.md' },
            { text: '菜单', link: '/components/TTable/index.md' },
            { text: '分页', link: '/components/TTable/index.md' },
            { text: '步骤条', link: '/components/TTable/index.md' }
          ]
        },
        {
          text: '其他',
          items: [
            {
              text: '返回顶部',
              link: '/components/TQueryCondition/index.md'
            },
            { text: '滚动条', link: '/components/TForm/index.md' },
            { text: '水印', link: '/components/TTable/index.md' }
          ]
        }
      ]
    }
  },
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
})
