# 戴育凭｜Engineering Portfolio

以「半導體工程控制台 × 汽車電子儀表」為視覺語言的單頁個人履歷網站。內容聚焦工作經驗、技術能力與學歷，已排除電話、地址、求職條件與自傳。

## 內容在哪裡編輯

- `data/profile.ts`：姓名、現職、工作經驗、學歷與技能。
- `app/page.tsx`：頁面結構與互動。
- `app/globals.css`：色彩、排版、響應式與動態效果。
- `app/layout.tsx`：SEO 與社群分享資訊。

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

靜態網站輸出在 `out/`，可直接放上任何靜態網站服務。

## Figma 設計稿

可編輯桌面版設計稿：<https://www.figma.com/design/pUO9FBtIvFqqG3VcmcdzQc>

Figma 與網站使用相同的工程控制台視覺語言、內容層級與設計色票；網站原始碼仍是最終內容來源。

## GitHub Pages

推送到 GitHub 的 `main` 分支後，`.github/workflows/deploy-pages.yml` 會自動建置與發布。第一次使用時，請到 GitHub repository 的 **Settings → Pages**，將 Source 設成 **GitHub Actions**。

如果 repository 名稱不是 `<帳號>.github.io`，網站也會自動套用正確的子路徑。
