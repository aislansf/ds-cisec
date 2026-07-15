#!/usr/bin/env node
/**
 * Fails the build if occurrences of "CISEC-CE" or "Cisec-CE" appear
 * outside allowed URLs/domains.
 *
 * Allowed contexts (ignored):
 *   - The domain "cisec-ce.dscreator.com.br" (canonical URLs, sitemap, robots, SEO).
 *   - This checker script itself.
 */
import { readFileSync, statSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = process.cwd();
const IGNORE_DIRS = new Set([
  "node_modules",
  ".git",
  "dist",
  "build",
  ".next",
  ".vercel",
  ".cache",
  "coverage",
  "playwright-report",
  ".turbo",
]);
const IGNORE_FILES = new Set([
  "scripts/check-legacy-cisec-ce.mjs",
]);

// Regex matches "CISEC-CE" or "Cisec-CE" (case-sensitive on the C/c prefix,
// but not the lowercase domain form "cisec-ce" which is allowed in URLs).
const PATTERN = /(?:CISEC-CE|Cisec-CE)/g;

// Allowlist: the canonical domain uses lowercase "cisec-ce", so it is not
// caught by the pattern above. We still guard against future variants inside
// this specific host and any absolute URL containing it.
const ALLOWED_SUBSTRINGS = ["cisec-ce.dscreator.com.br"];

const TEXT_EXT = new Set([
  ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs",
  ".html", ".css", ".scss", ".md", ".mdx",
  ".json", ".txt", ".xml", ".yml", ".yaml", ".svg",
]);

function walk(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") && entry.name !== ".env.example") {
      if (IGNORE_DIRS.has(entry.name)) continue;
    }
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      walk(full, out);
    } else if (entry.isFile()) {
      const dot = entry.name.lastIndexOf(".");
      const ext = dot >= 0 ? entry.name.slice(dot) : "";
      if (TEXT_EXT.has(ext)) out.push(full);
    }
  }
  return out;
}

const offenders = [];
for (const file of walk(ROOT)) {
  const rel = relative(ROOT, file).split(sep).join("/");
  if (IGNORE_FILES.has(rel)) continue;
  let content;
  try { content = readFileSync(file, "utf8"); } catch { continue; }
  if (!PATTERN.test(content)) continue;
  PATTERN.lastIndex = 0;
  const lines = content.split(/\r?\n/);
  lines.forEach((line, i) => {
    if (!/(?:CISEC-CE|Cisec-CE)/.test(line)) return;
    if (ALLOWED_SUBSTRINGS.some((s) => line.includes(s))) return;
    offenders.push({ file: rel, line: i + 1, text: line.trim() });
  });
}

if (offenders.length > 0) {
  console.error("\n\u274c Legacy brand check failed: found forbidden \"CISEC-CE\"/\"Cisec-CE\" occurrences.\n");
  for (const o of offenders) {
    console.error(`  ${o.file}:${o.line}: ${o.text}`);
  }
  console.error(`\nTotal: ${offenders.length} occurrence(s). Use \"CISEC\"/\"Cisec\" instead.`);
  console.error(`Allowed exceptions: ${ALLOWED_SUBSTRINGS.join(", ")}\n`);
  process.exit(1);
}

console.log("\u2705 check:legacy-cisec-ce — no forbidden \"CISEC-CE\"/\"Cisec-CE\" occurrences.");