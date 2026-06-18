# JAYDEN × CELINE 今天吃什么？

一个专为手机设计的马来西亚美食、奶茶与甜点选择转盘。项目只使用原生 HTML、CSS 和 JavaScript，不需要安装依赖或连接数据库。

## 换成情侣合照

将照片命名为 `couple-photo.jpg`，放在 `index.html` 同一目录即可。建议使用横向 4:3 照片；其他比例也会自动居中裁切。若没有照片，页面会显示 `J ♥ C` 的彩色占位封面。

## 本地预览

最简单的方法是直接双击 `index.html`。也可以在本目录启动静态服务器：

```powershell
python -m http.server 8000
```

然后浏览 `http://localhost:8000`。

## 修改菜单

所有食物都集中在 `app.js` 顶部的 `MENU_ITEMS` 数组。每项包含：

```js
{ name: "Nasi Lemak", category: "本地美食", emoji: "🍚" }
```

分类名称应使用页面现有分类之一。全部模式会从完整菜单池公平抽取，并在转盘上显示 24 个当轮候选；单个分类会显示该分类全部项目。

## 发布到 GitHub Pages

1. 在 GitHub 新建一个公开仓库，例如 `jayden-celine-food-wheel`。
2. 将本目录内的 `index.html`、`styles.css`、`app.js` 和 `README.md` 上传到仓库根目录。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**。
5. Branch 选择 `main`，目录选择 `/ (root)`，然后点击 **Save**。
6. 等待约 1–3 分钟，GitHub 会显示可分享链接，通常为：

   `https://你的用户名.github.io/jayden-celine-food-wheel/`

项目使用相对路径，不需要为 GitHub Pages 修改资源地址。

## 功能清单

- 78 个马来西亚常见餐饮、奶茶与甜点选项
- 八种分类筛选与全部选项
- 防止旋转期间重复点击
- 结果与转盘顶部指针一致
- 重抽、确认和彩纸动画
- 手机、平板及桌面响应式布局
- 支持减少动态效果的系统设置
