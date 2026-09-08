# 王智申作品集｜项目交接文档

> 文档版本：`wzs1.0`  
> 整理日期：2026-09-07  
> 项目路径：`D:\Users\4lx\Desktop\王智申作品集`

## 1. 项目概况

这是王智申的个人视觉设计作品集网站，采用 Vite 构建，使用原生 JavaScript 与 CSS 完成页面、路由和交互动效。

当前网站包含：

- 主站首页
- 个人介绍页
- 四个作品封面位
- 项目 1「慢吞 / MANTUN」完整内页
- 项目 2「退潮 / LOWTIDE」完整内页
- 项目 3、项目 4 空白占位
- 联系方式与页脚

当前为纯静态网站，没有后台管理系统、数据库或服务端接口。

## 2. 当前视觉方向

- 主色：白、黑、红
- 字体：Manrope、IBM Plex Mono，中文使用系统中文字体
- 主站保持克制、规整的作品集排版
- 作品封面采用错位叠放图片与轻微鼠标视差
- 项目 1 首屏参考 [TOYOTA Connected Design](https://tcdesign.toyotaconnected.co.jp/) 的插画阵列和分段入场方式
- 项目 1 第二屏保留黑白地铁人流视频、中心 IP 与眨眼动画

## 3. 技术信息

| 项目 | 内容 |
| --- | --- |
| 构建工具 | Vite 7 |
| 页面技术 | HTML、原生 JavaScript、CSS |
| 字体依赖 | `@fontsource/manrope`、`@fontsource/ibm-plex-mono` |
| 路由方式 | URL Hash 路由 |
| 构建输出 | `dist/` |
| 本地预览 | `http://127.0.0.1:4173/` |

主要路由：

| 页面 | 地址 |
| --- | --- |
| 首页 | `/#top` |
| 个人介绍 | `/#about` |
| 作品列表 | `/#works` |
| 项目 1：慢吞 | `/#project/mantun` |
| 项目 2：退潮 | `/#project/lowtide` |
| 联系方式 | `/#contact` |

## 4. 目录说明

```text
王智申作品集/
├─ src/
│  ├─ main.js              # 页面结构、项目数据、Hash 路由与交互
│  ├─ styles.css           # 全站样式、响应式布局与动画
│  └─ image-sizes.json     # 项目图片宽高数据
├─ public/assets/
│  ├─ mantun-01~11.webp    # 项目 1 展示图
│  ├─ lowtide-01~14.webp   # 项目 2 展示图
│  ├─ mantun-character-clean3.png
│  ├─ mantun-wordmark.png
│  ├─ subway-crowd-user.mp4
│  ├─ mantun-cover.jpg
│  ├─ lowtide-cover.jpg
│  └─ profile-01.webp
├─ 项目1/                  # 项目 1 原始 PDF、IP、字体与视频
├─ 项目2/                  # 项目 2 原始 PDF
├─ 项目3/                  # 后续项目素材目录
├─ 项目4/                  # 后续项目素材目录
├─ dist/                   # 当前生产构建产物
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
└─ start-preview.ps1       # Windows 本地预览启动脚本
```

## 5. 页面完成状态

### 主站

- 首页几何字标、顶部导航、介绍文字与滚动引导已完成
- 文字滚动、逐字显现和导航悬停效果已完成
- 个人介绍内容已从 PDF 转为网页排版，没有直接嵌入 PDF
- 作品列表已扩展到四个位置
- 项目 1、项目 2 使用统一的错位叠放封面形式
- 项目 3、项目 4 暂时为空白占位
- 桌面端和移动端导航已完成

### 项目 1：慢吞 / MANTUN

项目 1 使用独立首屏，不影响主站首页和其他项目内页。

首屏包含：

- 白色背景和黑、红配色
- 用户提供的慢吞 IP 环绕阵列
- 中文标题「慢吞」
- 用户提供字体制作的红色透明 `MANTUN` 字标
- 中英文主题文案
- 红色幕布退场动画
- IP 分批弹入动画
- 中文标题淡入与位移动画
- 红色字标裁切展开、回弹入场动画
- `SCROLL TO STORY` 平滑下滑按钮

第二屏包含：

- 用户提供的地铁人流视频
- 黑白处理与模糊运动质感
- 用户提供的中心 IP
- CSS 眨眼动画
- 红色 `MANTUN` 标题与英文文案

第二屏之后继续展示 `mantun-02.webp` 至 `mantun-11.webp`。

### 项目 2：退潮 / LOWTIDE

- 项目介绍首屏已完成
- `lowtide-01.webp` 至 `lowtide-14.webp` 已接入
- 项目末尾可跳转到项目 1

## 6. 本地运行

### 安装依赖

```powershell
pnpm install
```

### 开发模式

```powershell
pnpm dev
```

### 生产构建

```powershell
pnpm build
```

如果终端没有配置 Node 或 pnpm，可以直接使用项目当前验证过的 Node 运行 Vite：

```powershell
& 'C:\Users\4lx\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' node_modules/vite/bin/vite.js build
```

### 查看生产预览

双击或运行：

```powershell
.\start-preview.ps1
```

然后访问：

```text
http://127.0.0.1:4173/
```

## 7. 修改内容的位置

### 修改项目名称、分类、说明或图片数量

编辑 `src/main.js` 顶部的 `projects` 数组：

```js
const projects = [
  {
    id: 'mantun',
    title: '慢吞',
    en: 'MANTUN',
    category: 'IP 形象设计 / 视觉延展',
    count: 11,
    cover: 'mantun-01.webp'
  }
];
```

### 修改项目 1 首屏

- HTML 结构：`src/main.js` 中的 `mantunEntry()`
- 地铁视频场景：`src/main.js` 中的 `mantunScene()`
- 首屏样式：`src/styles.css` 中的 `.mantun-entry` 系列
- 视频场景样式：`src/styles.css` 中的 `.mantun-scene` 系列

### 修改个人介绍

编辑 `src/main.js` 中 `#about` 对应的 `.profile-page` 内容。

### 修改联系方式

联系方式目前直接写在 `src/main.js` 中，需要同时检查：

- 个人介绍区域
- 页脚邮箱
- 电话链接
- 复制邮箱按钮

## 8. 添加项目 3 或项目 4

1. 将原始设计资料放进 `项目3/` 或 `项目4/`。
2. 将网页展示图片导出为 WebP，统一放入 `public/assets/`。
3. 使用连续文件名，例如 `project3-01.webp`、`project3-02.webp`。
4. 在 `src/image-sizes.json` 中补充每张图片的真实宽高。
5. 在 `src/main.js` 的 `projects` 数组中加入项目数据。
6. `projectSlots` 会自动用真实项目替换对应空白占位。
7. 构建后检查封面、详情页、下一项目跳转和移动端排版。

建议先将新项目图片压缩到适合网页浏览的体积，原始大尺寸 PDF 保留在项目资料目录，不要直接放进 `public/`。

## 9. 动画与无障碍处理

- 用户开启“减少动态效果”时，主要动画会停止或直接显示最终状态
- 地铁视频使用 `muted`、`autoplay`、`loop`、`playsinline`
- 作品图片包含替代文本
- 主导航与移动菜单包含语义标签
- 键盘按 `Escape` 可以关闭移动菜单
- 项目 1 的滚动按钮在减少动态效果模式下改为即时跳转

## 10. 当前验证结果

- Vite 生产构建通过
- 项目 1 首屏字标和 IP 素材加载正常
- 项目 1 入场动画能够在重新进入页面时播放
- 下滑按钮能够进入地铁视频场景
- 地铁视频可自动播放
- 主站首页不会套用项目 1 的独立样式
- 项目数量在导航和移动菜单中显示为 `04`

## 11. 交接注意事项

- 当前目录不是 Git 仓库，修改前建议先复制备份，或初始化 Git 后再继续开发。
- `项目1.pdf`、`项目2.pdf` 和 `总.pdf` 文件较大，不应直接作为网页资源加载。
- 网页中的 WebP 图片是从项目资料中导出的展示版本；原稿变化后需要重新导出并替换。
- `src/main.js` 同时承担数据、模板和交互逻辑。继续增加较多项目时，建议拆分为项目数据、页面组件和交互模块。
- 当前内容是静态写入，没有 CMS；修改文案需要编辑源码并重新构建。
- 对图片文件改名后，需要同步修改 `src/main.js` 和 `src/image-sizes.json`。
- 发布前至少检查桌面端、手机端、项目跳转、视频加载及所有资源路径。

## 12. 推荐交接检查顺序

1. 运行 `start-preview.ps1`。
2. 检查 `/#top`、`/#about`、`/#works`。
3. 从作品封面进入 `/#project/mantun`，确认首屏动画完整播放。
4. 点击 `SCROLL TO STORY`，确认视频和眨眼动画正常。
5. 检查项目 1 后续长图。
6. 检查 `/#project/lowtide` 的全部图片。
7. 缩小浏览器宽度，检查移动菜单和项目 1 首屏排版。
8. 执行生产构建，确认 `dist/` 正常生成。

