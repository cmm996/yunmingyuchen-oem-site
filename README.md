# 云明宇琛 OEM/ODM 渠道招商官网

这是一个使用 Next.js、TypeScript 和 Tailwind CSS 开发的中文单页官网，用于展示东方草本温养产品 OEM/ODM 合作服务。

## 项目定位

- 面向养生馆、美容院 / SPA、社群团长、TikTok Shop 商家、跨境电商卖家、华人渠道商和自有品牌创业者
- 展示艾草温养贴、艾草足浴包、草本眼贴 / 眼膜等产品方向
- 支持产品资料、样品方案、包装定制、渠道素材和合作表单
- 页面文案采用合规、稳健、长期主义的表达方式

## 目录结构

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  ActionButton.tsx
  AudienceCard.tsx
  CapabilityCard.tsx
  ContactForm.tsx
  ProcessTimeline.tsx
  ProductCard.tsx
  SectionHeading.tsx
  SiteHeader.tsx
  SupportList.tsx
public/
  images/
```

## 本地运行

```bash
npm install
npm run dev
```

启动后访问：

```text
http://localhost:3000
```

## 常用命令

```bash
npm run build
npm run start
npm run lint
```

## 后续替换内容

- `public/images/` 中的图片可替换为正式产品图、样品图、包装图和环境图
- 首页内容集中在 `app/page.tsx`
- 复用组件集中在 `components/`
- 表单当前为前端静态反馈，正式上线时可接入邮箱、企业微信或表单系统
