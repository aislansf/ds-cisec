#!/usr/bin/env node
/**
 * Verifica ocorrências legadas de "fnde" / "Fnde" / "FNDE" no projeto.
 * Gera um relatório em reports/fnde-report.txt e falha o processo
 * (exit 1) caso encontre qualquer ocorrência.
 */
import { readdirSync, statSync, readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const IGNORED_DIRS = new Set([
  "node_modules", "dist", "build", ".git", ".next", ".vite",
  "coverage", "reports", ".lovable",
]);
const IGNORED_FILES = new Set([
  "package-lock.json", "bun.lockb", "yarn.lock", "pnpm-lock.yaml",
  "check-legacy-brand.mjs", "fnde-report.txt",
]);
const ALLOWED_EXT = /\.(tsx?|jsx?|mjs|cjs|css|scss|html|json|md|svg|yml|yaml)$/i;
const PATTERN = /fnde/gi;

const hits = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (IGNORED_DIRS.has(entry) || IGNORED_FILES.has(entry)) continue;
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) walk(full);
    else if (ALLOWED_EXT.test(entry)) scan(full);
  }
}

function scan(file) {
  const content = readFileSync(file, "utf8");
  const lines = content.split("\n");
  lines.forEach((line, i) => {
    const matches = line.match(PATTERN);
    if (matches) {
      hits.push({
        file: relative(ROOT, file),
        line: i + 1,
        text: line.trim().slice(0, 200),
        matches: matches.length,
      });
    }
  });
}

walk(ROOT);

mkdirSync(join(ROOT, "reports"), { recursive: true });
const reportPath = join(ROOT, "reports", "fnde-report.txt");

const header = `Relatório de varredura "FNDE"\nGerado em: ${new Date().toISOString()}\nTotal de ocorrências: ${hits.length}\n${"=".repeat(60)}\n\n`;
const body = hits.length
  ? hits.map(h => `${h.file}:${h.line}  (${h.matches}x)\n  ${h.text}`).join("\n\n")
  : "Nenhuma ocorrência de 'fnde' encontrada. ✔";

writeFileSync(reportPath, header + body, "utf8");

if (hits.length > 0) {
  console.error(`❌ Encontradas ${hits.length} ocorrência(s) de "fnde". Veja ${relative(ROOT, reportPath)}`);
  for (const h of hits.slice(0, 20)) {
    console.error(`  ${h.file}:${h.line} → ${h.text}`);
  }
  if (hits.length > 20) console.error(`  ...e mais ${hits.length - 20}`);
  process.exit(1);
}

console.log(`✅ Nenhuma ocorrência de "fnde" encontrada. Relatório: ${relative(ROOT, reportPath)}`);