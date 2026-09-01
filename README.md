# 戴育凭｜Engineering Portfolio

以「半導體工程控制台 × 汽車電子儀表」為視覺語言的單頁個人履歷網站。內容聚焦工作經驗、個人工程專案、技術能力與學歷，已排除電話、地址、求職條件與自傳。

## 內容在哪裡編輯

- `data/profile.ts`：姓名、現職、工作經驗、工程專案、學歷與技能。
- `app/page.tsx`：頁面結構與互動。
- `app/globals.css`：主視覺、排版、響應式與動態效果。
- `app/projects.css`：PROJECTS / ENGINEERING WORK 專案卡與響應式樣式。
- `app/layout.tsx`：SEO 與社群分享資訊。

## PROJECTS / ENGINEERING WORK

作品集專案使用一致的 case-study 結構呈現：

```text
Problem -> Engineering approach -> Stack -> Result -> GitHub
```

目前包含：

- **Site Rescue (`website_trans`)**：platform-neutral、CLI-first、local-first 的網站救援與靜態遷移工具。
- **Local Document Converter**：以 `DocumentIR` 為中介層的 local-first 文件轉換 pipeline。

專案內容仍集中維護在 `data/profile.ts`，頁面只負責渲染，避免履歷文字散落在 React component 中。

## 在 VS Code 預覽

需要 Node.js 22 與 pnpm。

```bash
pnpm install
pnpm dev
```

開啟 `http://127.0.0.1:3000`。

## 驗證與建置

```bash
pnpm lint
pnpm test
```

靜態網站輸出在 `out/`，可直接放上任何靜態網站服務。測試也會確認兩個公開工程專案與 GitHub repository 連結有被輸出，同時避免電話、地址與 email 等資訊出現在公開網站。

## Figma 設計稿

可編輯桌面版設計稿：<https://www.figma.com/design/pUO9FBtIvFqqG3VcmcdzQc>

Figma 與網站使用相同的工程控制台視覺語言、內容層級與設計色票；網站原始碼仍是最終內容來源。

## GitHub Pages

推送到 GitHub 的 `main` 分支後，`.github/workflows/deploy-pages.yml` 會自動建置與發布。第一次使用時，請到 GitHub repository 的 **Settings → Pages**，將 Source 設成 **GitHub Actions**。

如果 repository 名稱不是 `<帳號>.github.io`，網站也會自動套用正確的子路徑。
