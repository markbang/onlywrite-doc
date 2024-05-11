---
layout: home

hero:
  name: "仅记API"
  text: "仅记App的官方文档"
  tagline: onlywrite的一切
  image:
    src: /logo-all.png
    alt: onlywrite
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: 高速
    details: 使用Gin+Gorm开发，高速响应
  - title: 开放
    details: 支持所有数据的导入导出
  - title: RESTFUL 风格
    details: 采用RESTFUL风格设计，简单易用
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #fd9620 26%, #ab7c44);
  --vp-home-hero-image-background-image: linear-gradient(30deg, #fa9943, #eeecec);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>