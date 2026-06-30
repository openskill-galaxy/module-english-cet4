# module-english-cet4

OpenSkill Galaxy · **英语四级备考** 模块

面向准备大学英语四级考试的学生，提供词汇、语法、阅读理解、长篇阅读、翻译、写作、听力文本训练、模拟考试、错题复习和备考路线的静态学习模块。

**重要声明**：所有题目均为原创模拟练习（source_type = `curated-generated`），不使用官方真题原文，不声称题目来自官方真题，不生成侵权材料。

## 访问地址

- 线上：https://openskill-galaxy.github.io/module-english-cet4/
- 仓库：https://github.com/openskill-galaxy/module-english-cet4
- 总入口站：https://openskill-galaxy.github.io/

## 技术栈

Vite + React + TypeScript + Tailwind CSS + React Router + Zustand + Fuse.js + 静态 JSON + GitHub Actions Pages。无后端、无数据库、不调用 AI API。

## 数据规模

| 数据集 | 数量 |
|---|---|
| courses | 14 |
| lessons | 185 |
| knowledge-points | 820 |
| questions | 3500（7 题型：single=1200, multiple=300, judge=300, fill=500, short=400, case_analysis=500, reading=300） |
| cases | 240 |
| exams | 105 |
| routes | 31 |
| glossary | 1240 |
| faqs | 220 |
| tags | 2101 |
| search-index | 6219 |

## 题型说明

支持 7 种题型（含四级特色的 `reading` 阅读理解题型，所有阅读短文均为原创模拟材料）：
- single_choice（单选）：1200 道
- multiple_choice（多选）：300 道
- true_false（判断）：300 道
- fill_blank（填空）：500 道
- short_answer（简答）：400 道
- case_analysis（案例分析）：500 道
- reading（阅读理解）：300 道

## 本地开发

```bash
npm install
npm run dev      # 开发服务器
npm run build    # 生产构建
npm run preview  # 预览构建
node scripts/validate-data.mjs  # 静态数据校验
```

## 部署

推送到 main 分支后，GitHub Actions 自动构建并部署到 GitHub Pages（项目站点，base = `/module-english-cet4/`）。部署前会执行 `validate-data.mjs` 校验静态数据完整性。

## License

MIT
