# 主站 tangzhihong.com Backlog

## 已知死链（站点重做时漏迁，遗留至今）

### [P3] privacy.html 404
- **现象**：主站 footer "Privacy" 链接 + footer-legal "隐私政策" 链接都指向 `privacy.html`，但主站根目录没有这个文件
- **影响**：用户点击跳到 GitHub Pages 默认 404 页
- **修法选项**：
  - A. 真的写一份 privacy.html
  - B. footer 删掉这两个链接（如果暂时不需要隐私政策页）
  - C. 链接改指向某个外部隐私政策（如 Notion 公开页）
- **何时修**：未定，等隐私政策需求明确再决策

### [P3] blog/ 路径 404
- **现象**：footer "Blog" 链接指向相对路径 `blog/`，但主站根目录没有这个目录
- **影响**：同上，跳 404 页
- **修法**：footer 删掉，或真的搭 blog

### [P3] pricing/ 路径 404
- **现象**：footer "Pricing" 链接指向相对路径 `pricing/`，但主站根目录没有这个目录
- **影响**：同上
- **修法**：footer 删掉（产品都免费，pricing 页面无意义），或写一个简单页面说明"完全免费"

## 历史回归 bug（已修）

### [已修 2026-05-05] tangzhihong.com/voicebee/ 404
- 站点重做时丢弃了 voicebee/ 子目录，导致 footer 和 product tile 死链
- 修复：3 处链接改为 voicebee.tangzhihong.com 子域 (commit b109aa5)
