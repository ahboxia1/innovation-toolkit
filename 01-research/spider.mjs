import { chromium } from "playwright";
import fs from "fs";
import path from "path";

// 用法：
//   node spider.mjs --url https://xxx.com          爬指定网站
//   node spider.mjs --url https://xxx.com --login   用Chrome登录态（能爬需要登录的页面）
//   node spider.mjs --url https://xxx.com --out E:/output  指定输出目录
//   node spider.mjs --url https://xxx.com --depth 3        爬取深度（默认2）

const args = process.argv.slice(2);
const USE_LOGIN = args.includes("--login");
const BASE = args[args.indexOf("--url") + 1];
const OUT_DIR = args[args.indexOf("--out") + 1] || "./research-output";
const MAX_DEPTH = parseInt(args[args.indexOf("--depth") + 1]) || 2;
const MAX_PAGES = 30;

if (!BASE) {
  console.log("用法: node spider.mjs --url https://目标网站.com [--login] [--out 输出目录] [--depth 爬取深度]");
  process.exit(1);
}

async function extractPage(page, url) {
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(2000);

  return await page.evaluate(() => {
    const main = document.querySelector("#app") || document.querySelector("main") || document.querySelector("body");
    const sections = [];
    const seen = new Set();

    main.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach((h) => {
      const t = h.textContent.trim();
      if (t) sections.push({ type: "heading", level: parseInt(h.tagName[1]), text: t });
    });

    main.querySelectorAll("p,li").forEach((el) => {
      const t = el.textContent.trim();
      if (t.length < 2 || t.length > 2000) return;
      if (el.closest("h1,h2,h3,h4,h5,h6")) return;
      const key = t.substring(0, 60);
      if (seen.has(key)) return;
      seen.add(key);
      sections.push({ type: "text", text: t });
    });

    const links = [];
    const baseHost = location.hostname;
    document.querySelectorAll("a[href]").forEach((a) => {
      try {
        const href = new URL(a.getAttribute("href"), location.href).href;
        if (new URL(href).hostname === baseHost) {
          links.push({ href, text: a.textContent.trim() });
        }
      } catch {}
    });

    return { sections, links };
  });
}

function toMarkdown(label, url, data) {
  let md = `# ${label}\n\n> 来源：${url}\n\n`;
  for (const s of data.sections) {
    if (s.type === "heading") md += `${"#".repeat(s.level)} ${s.text}\n\n`;
    else md += `- ${s.text}\n`;
  }
  return md;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  let context;
  if (USE_LOGIN) {
    console.log("using Chrome profile (login mode)");
    context = await chromium.launchPersistentContext(
      "C:/Users/" + process.env.USERNAME + "/AppData/Local/Google/Chrome/User Data",
      { channel: "chrome", headless: false, viewport: { width: 1920, height: 1080 } }
    );
  } else {
    const browser = await chromium.launch({ headless: true });
    context = await browser.newContext({
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/136.0.0.0 Safari/537.36",
      viewport: { width: 1920, height: 1080 },
    });
  }

  const allResults = [];
  const visited = new Set();
  const queue = [{ url: BASE, label: new URL(BASE).hostname, depth: 0 }];
  visited.add(BASE);

  while (queue.length > 0 && allResults.length < MAX_PAGES) {
    const { url, label, depth } = queue.shift();
    console.log(`crawling [${depth}]: ${label} (${url})`);

    const page = await context.newPage();
    try {
      const data = await extractPage(page, url);
      if (data.sections.length === 0) { await page.close(); continue; }

      const md = toMarkdown(label, url, data);
      const safeName = new URL(url).pathname.replace(/[/]/g, "_").replace(/^_|_$/g, "") || "index";
      const filename = safeName + ".md";
      fs.writeFileSync(path.join(OUT_DIR, filename), md, "utf-8");
      allResults.push({ label, url, data, filename });

      if (depth < MAX_DEPTH) {
        for (const link of data.links) {
          if (!visited.has(link.href)) {
            visited.add(link.href);
            queue.push({ url: link.href, label: link.text || link.href, depth: depth + 1 });
          }
        }
      }
    } catch (err) {
      console.log(`  SKIP: ${err.message}`);
    }
    await page.close();
  }

  await context.close();

  // summary
  let summary = `# ${new URL(BASE).hostname} - 研究素材汇总\n\n`;
  summary += `> 爬取时间：${new Date().toISOString()}\n> 来源：${BASE}\n> 总页面数：${allResults.length}\n\n`;
  summary += `## 页面索引\n\n| 页面 | URL | 文件 |\n|------|-----|------|\n`;
  for (const r of allResults) summary += `| ${r.label} | ${r.url} | ${r.filename} |\n`;

  fs.writeFileSync(path.join(OUT_DIR, "00-summary.md"), summary, "utf-8");
  console.log(`\ndone! ${allResults.length} pages saved to ${OUT_DIR}`);
}

main().catch(console.error);
