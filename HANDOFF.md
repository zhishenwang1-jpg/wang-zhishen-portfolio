# 王智申作品集交接给 B

## 技术栈与启动

原生 JavaScript（ES Modules）、HTML、CSS、Vite 7；不是 React。字体通过 @fontsource/manrope 与 @fontsource/ibm-plex-mono 安装，无后端或环境变量要求。

安装 Node.js 24 LTS（含 npm），解压后用 Codex 打开包含本文件的整个项目根目录，在该目录终端执行：

```sh
npm install -g pnpm@11.19.0
pnpm install --frozen-lockfile
pnpm dev --port 4173 --strictPort
```

打开 http://127.0.0.1:4173/ 。按 Ctrl+C 停止服务。如端口被占用，先停止旧服务或更换端口。

生产验证：`pnpm build`，然后 `pnpm preview --port 4173 --strictPort`。Windows 也可在安装依赖后运行 `powershell -ExecutionPolicy Bypass -File ./start-preview.ps1`（先构建再预览）。不要直接双击 index.html。

## 当前功能

- 首页、个人介绍、作品列表、菜单、联系方式与邮箱复制。
- 项目一慢吞：角色首屏、地铁视频、11 页内容、自定义光标与音符拖尾、横向角色滚动尾页。
- 项目二退潮：14 页作品、美式复古配色、动态牛皮纸噪点背景。
- 项目三把今天交给旋律：12 页作品、五线谱首屏、旋转节点和音符动效、概念段与编号展示。
- NEXT 顺序为项目一 → 项目二 → 项目三 → 项目一。项目四仍是占位。
- 包含移动端样式、减少动态效果适配；仍建议在 B 的设备上目视复核。

## 重要文件

- `src/main.js`：页面模板、项目数据、hash 路由与交互。
- `src/styles.css`：全站及三个项目的样式、动画。
- `src/image-sizes.json`：作品图尺寸。
- `public/assets/`：网页使用的所有图片与视频。
- `index.html`、`package.json`、`pnpm-lock.yaml`、`pnpm-workspace.yaml`：入口及依赖配置。
- `项目1/` 至 `项目4/`、`总.pdf`、`个人介绍.pdf`：原始设计素材（含空的项目四目录）。
- `wzs1.0.md`：历史记录，以当前源码为准。

## 开发注意

网站通过 `#project/mantun`、`#project/lowtide`、`#project/melody` 路由。资源使用 `/assets/`，默认部署在域名根目录；子目录部署需另行配置。请保留中文内容与各项目独立风格，修改样式时注意 body 项目类名作用域。

交接未修改页面设计或业务逻辑。仅完善包管理器/Node 声明、esbuild 安装许可与可迁移启动脚本。运行资源没有依赖本机外部文件或软链接；系统中文字体会因电脑不同而有细微差异。字体包通过锁文件安装，本包不附 node_modules。首次安装需联网。

ZIP 包含源码、配置、全部运行资源和原始素材，不含 node_modules、dist/build、tmp、缓存或历史部署 ZIP。构建产物可随时重新生成。原始 PDF 较大，请预留至少 6 GB 空间用于解压和安装。
