## Tipografia oficial detectada em sebrae.com.br

Inspecionando o site institucional em runtime, os `@font-face` carregados e os `computed styles` revelam duas famílias:

| Papel | Família | Pesos disponíveis | Origem |
|---|---|---|---|
| **Primária** (corpo, H1/H3, UI, botões, links) | **Figtree** | 300–900 (variable) | Google Fonts (open-source) |
| **Secundária** (display, H2 e títulos de impacto) | **Campuni** | 700 (Bold) | Fonte proprietária Sebrae (CDN AEM) |

Hoje o projeto usa Poppins/Roboto/Gotham. Vou substituir pelos padrões oficiais.

## O que será alterado

### 1. `src/index.css`
- Trocar o `@import` do Roboto pelo da família **Figtree** no Google Fonts (`wght@300..900`).
- Como **Campuni** é proprietária e não está no Google Fonts, manter referência com fallback elegante: `'Campuni', 'Figtree', sans-serif`. Adicionar um comentário explicando que o arquivo `.woff2` oficial deve ser hospedado em `/public/fonts/campuni-bold.woff2` quando disponibilizado pelo Sebrae, com `@font-face` já preparado (comentado/condicional).
- Atualizar `body { font-family: 'Figtree', ... }` e `h1..h6 { font-family: 'Campuni', 'Figtree', ... }`.

### 2. `tailwind.config.ts`
Atualizar `fontFamily`:
```ts
sans:    ["Figtree", "system-ui", "sans-serif"],   // primária
heading: ["Campuni", "Figtree", "sans-serif"],     // secundária / display
display: ["Campuni", "Figtree", "sans-serif"],     // alias
```
Remover o alias legado `poppins`.

### 3. `src/pages/FundamentosPage.tsx` — seção Tipografia
Reescrever a seção para apresentar claramente as duas famílias:

- **Cartão "Fonte Primária – Figtree"**: amostra A–Z / a–z / 0–9, pesos 300/400/500/600/700/900, uso recomendado (corpo, UI, H1/H3), link para Google Fonts.
- **Cartão "Fonte Secundária – Campuni"**: amostra Bold, uso recomendado (H2/títulos de impacto, hero, números destacados), nota de que é fonte proprietária Sebrae com fallback para Figtree.
- Atualizar a descrição da seção e o `CodeBlock` final para refletir o novo `@import` e os tokens (`font-sans`, `font-heading`).

### 4. Ajustes pontuais
- Substituir referências a "Poppins" no texto da página por "Figtree / Campuni".
- Garantir que componentes que usam `font-poppins` continuem funcionando via alias (ou migrar para `font-sans`).

## Não muda
- Cores, escala de tamanhos (`text-xs`…`text-7xl`), pesos numéricos, line-heights ou demais tokens — apenas a família tipográfica e a documentação correspondente.
