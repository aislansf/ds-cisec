# Design System CISEC

Site de documentação do Design System CISEC: fundamentos (cores, tipografia, grid), tokens, componentes, templates de telas, marca, conteúdo e acessibilidade, seguindo o Manual de Marca CISEC v4/2026.

Produção: <https://cisec-ce.dscreator.com.br/>

## Stack

- [Vite 5](https://vitejs.dev/) + [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- React Router, Recharts / Chart.js
- Testes: [Vitest](https://vitest.dev/) + Testing Library; checagens de runtime com [Playwright](https://playwright.dev/)

## Pré-requisitos

- **Node.js 20+**
- **npm** (o projeto usa `package-lock.json`)

Não há variáveis de ambiente obrigatórias para rodar o projeto.

## Passo a passo

```bash
git clone https://github.com/aislansf/ds-cisec.git
cd ds-cisec
npm ci --legacy-peer-deps
npm run dev
```

O servidor de desenvolvimento sobe em <http://localhost:8080>.

> `--legacy-peer-deps` evita conflitos de peer dependencies entre pacotes do ecossistema shadcn/Radix.

### Build de produção

```bash
npm run build
npm run preview
```

O `build` roda, nesta ordem, antes do `vite build`:

1. `typecheck`: `tsc --noEmit`
2. `check:legacy-cisec-ce`: bloqueia a grafia legada com sufixo "-CE" no nome da marca (use apenas "CISEC"; o domínio é exceção)
3. `check:legacy-typography`: bloqueia regressões de `<p>` sem os tokens tipográficos `.ds-body*` (compara com `reports/legacy-typography-baseline.json`)
4. `check:homepage-h1`: garante que os `<h1>` da Home usam o Azul Institucional `#1F3051`

O Vite também interrompe o build se algum arquivo em `src/assets` tiver 0 bytes.

A saída fica em `dist/`.

## Scripts

| Script | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (porta 8080) |
| `npm run build` | Checagens + build de produção |
| `npm run build:dev` | Mesmo que `build`, em modo development |
| `npm run preview` | Serve o `dist/` localmente |
| `npm run lint` | ESLint |
| `npm run typecheck` | Checagem de tipos |
| `npm test` | Todos os testes (Vitest) |
| `npm run test:tokens` | Valida os tokens documentados contra `src/index.css` |
| `npm run test:sidebar` | Regressão visual do menu lateral em 320px |
| `npm run test:smoke` | Smoke HTTP da URL pública (`SMOKE_URL` ou argumento) |
| `npm run test:smoke:render` | Smoke HTTP + renderização no Chromium |
| `npm run check:homepage-h1:computed` | Cores computadas dos títulos da Home publicada (`CHECK_URL`) |
| `npm run check:homepage-interactive` | Tipografia e cores dos botões/links da Home publicada (`CHECK_URL`) |

Os scripts que abrem navegador (`test:smoke:render`, `check:homepage-*:computed`, `check:homepage-interactive`) precisam do Chromium do Playwright:

```bash
npx playwright install chromium
```

## Estrutura

```
public/            Arquivos estáticos (favicon, sitemap, robots, HTMLs do Farol para Power BI)
scripts/           Checagens de marca/tipografia e smoke tests usados no build e na validação do deploy
reports/           Relatórios e baseline gerados pelas checagens
src/
  assets/          Logos e símbolos CISEC (SVG) e mapeamento em cisec.ts
  components/      Layout, seções do DS, componentes de BI, templates e ui/ (shadcn)
  data/            Tokens, dados de exemplo e testes de sincronia de tokens
  pages/           Uma página por rota (Home, Fundamentos, Tokens, Componentes, Templates...)
  index.css        Tokens CSS (paleta CISEC, tipografia, temas claro/escuro)
tailwind.config.ts Tokens expostos como classes Tailwind (ex.: bg-cisec-blue-50)
```

## Identidade visual

Definida em `src/index.css` e `tailwind.config.ts`:

- **Cores:** Azul Institucional `#1F3051`, Laranja `#FF9E20`, Cinza `#606060`, com escalas tonais de 20% a 100%
- **Tipografia:** Montserrat (primária) e Lora (secundária/editorial), via Google Fonts

## Deploy

O deploy é manual; não há publicação automática a cada push.

1. Gere o build:

   ```bash
   npm run build
   ```

2. Crie `dist/.htaccess` para que as rotas do SPA (ex.: `/fundamentos`) funcionem ao acessar ou recarregar a página diretamente (servidor Apache):

   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

3. Envie o conteúdo de `dist/` para o diretório público do servidor (ex.: via FTP).

4. Valide a publicação:

   ```bash
   npm run test:smoke:render -- https://cisec-ce.dscreator.com.br/
   ```
