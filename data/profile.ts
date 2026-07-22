export const profile = {
  name: "戴育凭",
  englishName: "YU-PING DAI",
  role: "FAE ENGINEER",
  focus: "AUTOMOTIVE IC",
  company: "凌陽科技 SUNPLUS",
  location: "TAIWAN / UTC+8",
  intro:
    "站在車用 IC、嵌入式系統與客戶現場的交界，將模糊問題收斂為可驗證的訊號、根因與解法。",
  metrics: [
    { value: "14+", label: "YEARS IN EMBEDDED & IC" },
    { value: "04", label: "CORE PLATFORM DOMAINS" },
    { value: "02", label: "ENGINEERING DEGREES" },
  ],
} as const;

export const experiences = [
  {
    index: "01",
    company: "凌陽科技 SUNPLUS",
    role: "FAE 工程師",
    team: "車用 IC 部門",
    period: "CURRENT / PRESENT",
    current: true,
    summary:
      "支援車用 IC 導入與客戶端技術問題分析，在客戶需求、系統現象與內部研發之間建立清楚的技術脈絡。",
    signals: [
      "Automotive IC",
      "Customer issue triage",
      "Technical enablement",
      "Cross-team alignment",
    ],
  },
  {
    index: "02",
    company: "聯詠科技",
    role: "高級工程師 / FAE",
    team: "IC 設計相關",
    period: "2017.02 起",
    current: false,
    summary:
      "處理 IC SDK application、middleware driver 與 open-source cross compiler 議題，並進行效能與記憶體空間檢查。",
    signals: ["IC SDK", "Middleware", "Cross compiler", "Performance"],
  },
  {
    index: "03",
    company: "智原科技",
    role: "高級工程師",
    team: "IC 設計相關",
    period: "2015.12 — 2017.01",
    current: false,
    summary:
      "支援客戶端 SDK 與 driver 整合議題，將系統現象拆解為可重現、可量測與可交付的工程問題。",
    signals: ["SDK support", "Driver integration", "Debugging", "Root cause"],
  },
  {
    index: "04",
    company: "明泰科技",
    role: "軟體工程師",
    team: "多媒體與網路平台",
    period: "2012.09 — 2015.11",
    current: false,
    summary:
      "參與 NAS 與 IP STB 平台開發，涵蓋韌體升級、RAID 工具、媒體播放、WebKit API、Wi-Fi Display 與量產測試。",
    signals: ["NAS / Marvell", "IP STB", "Media player", "Manufacturing test"],
  },
] as const;

export const education = [
  {
    degree: "資訊工程系 · 碩士",
    school: "國立虎尾科技大學",
    period: "2009.07 — 2011.06",
    code: "M.S. / CSIE",
  },
  {
    degree: "資訊工程系 · 學士",
    school: "長榮大學",
    period: "2005.09 — 2009.06",
    code: "B.S. / CSIE",
  },
] as const;

export const capabilities = [
  {
    label: "SYSTEMS",
    items: ["Embedded Linux", "IC SDK", "Middleware", "Device drivers"],
  },
  {
    label: "PLATFORMS",
    items: ["Automotive IC", "NAS", "IP STB", "Media systems"],
  },
  {
    label: "ENGINEERING",
    items: ["Issue triage", "Root-cause analysis", "Performance", "Memory"],
  },
  {
    label: "TOOLCHAIN",
    items: ["Linux", "C", "JavaScript", "make / vim"],
  },
] as const;
