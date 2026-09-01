import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

test("exports a GitHub Pages-ready static site", async () => {
  await access(new URL("out/index.html", projectRoot));
  const html = await readFile(new URL("out/index.html", projectRoot), "utf8");

  assert.match(html, /戴育凭/);
  assert.match(html, /凌陽科技/);
  assert.match(html, /AUTOMOTIVE IC/);
  assert.match(html, /SITE RESCUE/);
  assert.match(html, /LOCAL DOCUMENT CONVERTER/);
  assert.match(html, /github\.com\/cam11505\/website_trans/);
  assert.match(html, /github\.com\/cam11505\/local-document-converter/);
  assert.doesNotMatch(html, /0928|台南市|gmail\.com|求職條件|自傳/);
});

test("keeps resume content separate and privacy-safe", async () => {
  const profile = await readFile(new URL("data/profile.ts", projectRoot), "utf8");
  const workflow = await readFile(
    new URL(".github/workflows/deploy-pages.yml", projectRoot),
    "utf8",
  );

  assert.match(profile, /SUNPLUS/);
  assert.match(profile, /國立虎尾科技大學/);
  assert.match(profile, /website_trans/);
  assert.match(profile, /local-document-converter/);
  assert.doesNotMatch(profile, /手機|電話|地址|E-mail|email/i);
  assert.match(workflow, /actions\/deploy-pages/);
  assert.match(workflow, /path: out/);
});
