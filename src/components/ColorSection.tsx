import { useState, useCallback } from "react";
import { Check, Copy, Droplets, Palette, SwatchBook, Layers } from "lucide-react";
import { CodeBlock } from "@/components/DSComponents";

/* ------------------------------------------------------------------ */
/*  Helper: copy to clipboard with visual feedback                     */
/* ------------------------------------------------------------------ */
function CopyHex({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [value]);

  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-foreground bg-muted/60 hover:bg-muted px-1.5 py-0.5 rounded transition-colors"
      title={`Copiar ${value}`}
      aria-label={`Copiar código hexadecimal ${value}`}
    >
      {copied ? <Check size={10} className="text-success" /> : <Copy size={10} />}
      {value}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/*  Color swatch card                                                  */
/* ------------------------------------------------------------------ */
interface ColorSwatchProps {
  name: string;
  hex: string;
  darkHex?: string;
  token: string;
  description?: string;
  large?: boolean;
}

function ColorSwatch({ name, hex, darkHex, token, description, large }: ColorSwatchProps) {
  return (
    <div className="group">
      <div
        className={`${large ? "h-24" : "h-16"} rounded-lg border border-border mb-2 transition-transform group-hover:scale-[1.02]`}
        style={{ backgroundColor: hex }}
      />
      <p className="text-sm font-semibold text-foreground">{name}</p>
      <div className="flex flex-wrap items-center gap-1.5 mt-1">
        <CopyHex value={hex} />
        {darkHex && (
          <span className="text-[10px] text-muted-foreground">
            Dark: <CopyHex value={darkHex} />
          </span>
        )}
      </div>
      <p className="text-[10px] text-muted-foreground mt-0.5 font-mono">var(--{token})</p>
      {description && <p className="text-[10px] text-muted-foreground mt-0.5">{description}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Gradient card                                                      */
/* ------------------------------------------------------------------ */
interface GradientCardProps {
  name: string;
  css: string;
  colors: string[];
  description: string;
}

function GradientCard({ name, css, colors, description }: GradientCardProps) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [css]);

  return (
    <div className="group">
      <div
        className="h-20 rounded-lg border border-border mb-2 transition-transform group-hover:scale-[1.02]"
        style={{ background: css }}
      />
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-foreground">{name}</p>
        <button
          onClick={copy}
          className="inline-flex items-center gap-1 text-[10px] text-muted-foreground hover:text-foreground bg-muted/60 hover:bg-muted px-1.5 py-0.5 rounded transition-colors"
          title="Copiar CSS do gradiente"
          aria-label={`Copiar CSS do gradiente ${name}`}
        >
          {copied ? <Check size={10} className="text-success" /> : <Copy size={10} />}
          Copiar CSS
        </button>
      </div>
      <div className="flex flex-wrap gap-1 mt-1">
        {colors.map(c => <CopyHex key={c} value={c} />)}
      </div>
      <p className="text-[10px] text-muted-foreground mt-1">{description}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                        */
/* ------------------------------------------------------------------ */
export default function ColorSection() {
  return (
    <>
      {/* ===== PALETA PRINCIPAL ===== */}
      <div className="cisec-card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Palette size={18} className="text-primary" />
          <h4 className="text-sm font-semibold">Paleta principal — Identidade CISEC</h4>
        </div>
        <p className="text-xs text-muted-foreground mb-4">
          Três cores oficiais formam o núcleo cromático do CISEC:
          <strong> Laranja CISEC #FF9E20</strong> (primária, energia e ação),
          <strong> Azul Noite CISEC #1F3051</strong> (secundária, confiança institucional) e
          <strong> Grafite CISEC #606060</strong> (neutra, tipografia e estrutura).
          A partir delas são construídas todas as escalas, cores de apoio,
          complementares, semânticas, superfícies e gradientes do sistema.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {[
            { name: "Laranja CISEC",      hex: "#FF9E20", token: "cisec-orange", description: "Primária · CTAs, links, foco" },
            { name: "Azul Noite CISEC",   hex: "#1F3051", token: "cisec-navy",   description: "Secundária · headers, títulos" },
            { name: "Grafite CISEC",      hex: "#606060", token: "cisec-graphite", description: "Neutra · corpo de texto" },
            { name: "Âmbar Suave",        hex: "#FFC94D", token: "cisec-amber",  description: "Apoio · highlights quentes" },
            { name: "Azul Aço",           hex: "#354F80", token: "cisec-steel",  description: "Apoio · superfícies frias" },
          ].map((c) => (
            <ColorSwatch key={c.hex} name={c.name} hex={c.hex} token={c.token} description={c.description} large />
          ))}
        </div>

        {/* Escala do laranja (primário) */}
        <h4 className="text-sm font-semibold mb-1">Escala cromática · Laranja CISEC (Primário)</h4>
        <p className="text-xs text-muted-foreground mb-3">
          Escala 50–950 derivada de <strong>#FF9E20</strong> (~32°). Use 50–200 para superfícies e
          badges, 300–500 para componentes e brand, 500 como cor primária padrão, 600–800 para hover,
          pressed e texto sobre fundo claro, e 900–950 para dark mode.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-11 gap-2 mb-6">
          {[
            { name: "50",  hex: "#FFF7EC", token: "orange-50"  },
            { name: "100", hex: "#FFEDD1", token: "orange-100" },
            { name: "200", hex: "#FFD9A3", token: "orange-200" },
            { name: "300", hex: "#FFC170", token: "orange-300" },
            { name: "400", hex: "#FFB040", token: "orange-400" },
            { name: "500", hex: "#FF9E20", token: "orange-500" },
            { name: "600", hex: "#E5851A", token: "orange-600" },
            { name: "700", hex: "#B86612", token: "orange-700" },
            { name: "800", hex: "#85480B", token: "orange-800" },
            { name: "900", hex: "#4D2905", token: "orange-900" },
            { name: "950", hex: "#2A1602", token: "orange-950" },
          ].map(c => (
            <div key={c.token} className="text-center">
              <div className="h-12 rounded-lg border border-border mb-1" style={{ backgroundColor: c.hex }} />
              <p className="text-[10px] font-semibold">{c.name}</p>
              <CopyHex value={c.hex} />
            </div>
          ))}
        </div>

        {/* Escala do azul noite (secundário) */}
        <h4 className="text-sm font-semibold mb-1">Escala cromática · Azul Noite CISEC (Secundário)</h4>
        <p className="text-xs text-muted-foreground mb-3">
          Escala 50–950 derivada de <strong>#1F3051</strong> (~217°). Sustenta headers, títulos,
          ações secundárias e superfícies profundas no dark mode.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-11 gap-2 mb-6">
          {[
            { name: "50",  hex: "#EEF2F8", token: "navy-50"  },
            { name: "100", hex: "#D6DFEC", token: "navy-100" },
            { name: "200", hex: "#ADBED9", token: "navy-200" },
            { name: "300", hex: "#7F97BF", token: "navy-300" },
            { name: "400", hex: "#526FA0", token: "navy-400" },
            { name: "500", hex: "#354F80", token: "navy-500" },
            { name: "600", hex: "#263E68", token: "navy-600" },
            { name: "700", hex: "#1F3051", token: "navy-700" },
            { name: "800", hex: "#17233C", token: "navy-800" },
            { name: "900", hex: "#0F1727", token: "navy-900" },
            { name: "950", hex: "#070B14", token: "navy-950" },
          ].map(c => (
            <div key={c.token} className="text-center">
              <div className="h-12 rounded-lg border border-border mb-1" style={{ backgroundColor: c.hex }} />
              <p className="text-[10px] font-semibold">{c.name}</p>
              <CopyHex value={c.hex} />
            </div>
          ))}
        </div>

        {/* Escala do grafite (neutra) */}
        <h4 className="text-sm font-semibold mb-1">Escala cromática · Grafite CISEC (Neutra)</h4>
        <p className="text-xs text-muted-foreground mb-3">
          Escala 50–950 derivada de <strong>#606060</strong>. Base tipográfica e estrutural do sistema:
          bordas, textos secundários, divisores, superfícies neutras e overlays.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-11 gap-2">
          {[
            { name: "50",  hex: "#FAFAFA", token: "gray-50"  },
            { name: "100", hex: "#F0F0F0", token: "gray-100" },
            { name: "200", hex: "#E0E0E0", token: "gray-200" },
            { name: "300", hex: "#C7C7C7", token: "gray-300" },
            { name: "400", hex: "#A3A3A3", token: "gray-400" },
            { name: "500", hex: "#808080", token: "gray-500" },
            { name: "600", hex: "#606060", token: "gray-600" },
            { name: "700", hex: "#4D4D4D", token: "gray-700" },
            { name: "800", hex: "#333333", token: "gray-800" },
            { name: "900", hex: "#1A1A1A", token: "gray-900" },
            { name: "950", hex: "#0D0D0D", token: "gray-950" },
          ].map(c => (
            <div key={c.token} className="text-center">
              <div className="h-12 rounded-lg border border-border mb-1" style={{ backgroundColor: c.hex }} />
              <p className="text-[10px] font-semibold">{c.name}</p>
              <CopyHex value={c.hex} />
            </div>
          ))}
        </div>
      </div>

      {/* ===== CORES COMPLEMENTARES ===== */}
      <div className="cisec-card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <SwatchBook size={18} className="text-primary" />
          <h4 className="text-sm font-semibold">Cores Complementares — Acentos institucionais</h4>
        </div>
        <p className="text-xs text-muted-foreground mb-4">
          Análogos ao Laranja CISEC e contrapontos ao Azul Noite. Uso em CTAs alternativos,
          categorias de dataviz, ilustrações e destaques editoriais.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { name: "Âmbar Solar",       hex: "#FFC94D", token: "amber",     usage: "Highlights, badges" },
            { name: "Terracota",         hex: "#D9432A", token: "terracota", usage: "Alertas quentes, contraste" },
            { name: "Verde Sertão",      hex: "#4E8C6A", token: "green",     usage: "Sucessos, indicadores positivos" },
            { name: "Turquesa Litoral",  hex: "#2E9BAB", token: "teal",      usage: "Dataviz frio, links de apoio" },
            { name: "Púrpura Crepúsculo",hex: "#6B4C93", token: "purple",    usage: "Categorias editoriais" },
            { name: "Areia Deserto",     hex: "#E8D3B0", token: "sand",      usage: "Fundos quentes, cards suaves" },
          ].map(c => (
            <div key={c.token} className="text-center">
              <div className="h-14 rounded-lg border border-border mb-1" style={{ backgroundColor: c.hex }} />
              <p className="text-xs font-semibold">{c.name}</p>
              <p className="text-[10px] text-muted-foreground">{c.usage}</p>
              <CopyHex value={c.hex} />
            </div>
          ))}
        </div>
      </div>

      {/* ===== CORES SEMÂNTICAS ===== */}
      <div className="cisec-card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Layers size={18} className="text-primary" />
          <h4 className="text-sm font-semibold">Cores semânticas (feedback)</h4>
        </div>
        <p className="text-xs text-muted-foreground mb-4">
          Derivadas da paleta CISEC e ajustadas para contraste AA. Cada cor possui par “base + fundo”
          para garantir legibilidade entre texto e fundo em modo claro e escuro.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "Success",
              hex: "#3E8F5F",
              darkHex: "#5EBF83",
              bgHex: "#E4F3EA",
              darkBgHex: "#0F2A1A",
              fgHex: "#FFFFFF",
              token: "success",
              desc: "Confirmações, ações concluídas, validações positivas. Deriva do Verde Sertão.",
            },
            {
              name: "Warning",
              hex: "#E5851A",
              darkHex: "#FFB040",
              bgHex: "#FFF1D6",
              darkBgHex: "#4D2905",
              fgHex: "#4D2905",
              token: "warning",
              desc: "Alertas e atenção necessária. Deriva do Laranja CISEC (orange-600).",
            },
            {
              name: "Danger",
              hex: "#C93A2C",
              darkHex: "#F26A5C",
              bgHex: "#FBE3E0",
              darkBgHex: "#3B0F0A",
              fgHex: "#FFFFFF",
              token: "danger",
              desc: "Erros, falhas, ações destrutivas. Deriva da Terracota.",
            },
            {
              name: "Info",
              hex: "#354F80",
              darkHex: "#7F97BF",
              bgHex: "#EEF2F8",
              darkBgHex: "#17233C",
              fgHex: "#FFFFFF",
              token: "info",
              desc: "Informações contextuais e dicas. Deriva do Azul Noite CISEC (navy-500).",
            },
          ].map(c => (
            <div key={c.token} className="border border-border rounded-lg overflow-hidden">
              <div className="h-12" style={{ backgroundColor: c.hex }} />
              <div className="h-8" style={{ backgroundColor: c.bgHex }} />
              <div className="p-3">
                <p className="text-sm font-semibold mb-1">{c.name}</p>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">Base</span>
                    <CopyHex value={c.hex} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">Dark</span>
                    <CopyHex value={c.darkHex} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">Fundo (light)</span>
                    <CopyHex value={c.bgHex} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted-foreground">Fundo (dark)</span>
                    <CopyHex value={c.darkBgHex} />
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground mt-2">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SUPERFÍCIES ===== */}
      <div className="cisec-card mb-6">
        <h4 className="text-sm font-semibold mb-3">Superfícies e fundos</h4>
        <p className="text-xs text-muted-foreground mb-4">
          Superfícies neutras com leve tinta do Azul Noite CISEC, garantindo coerência cromática
          entre modo claro e escuro.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Background", hex: "#FAFAFA", darkHex: "#0F1727", token: "background", cls: "bg-background border" },
            { label: "Card",       hex: "#FFFFFF", darkHex: "#17233C", token: "card",       cls: "bg-card border" },
            { label: "Muted",      hex: "#F0F0F0", darkHex: "#1F3051", token: "muted",      cls: "bg-muted" },
            { label: "Accent",     hex: "#FFF7EC", darkHex: "#263E68", token: "accent",     cls: "bg-accent" },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className={`h-14 rounded-lg mb-1 ${s.cls} border-border`} />
              <p className="text-xs font-semibold">{s.label}</p>
              <div className="mt-1 space-y-0.5">
                <div className="flex justify-center gap-1">
                  <span className="text-[9px] text-muted-foreground">L:</span>
                  <CopyHex value={s.hex} />
                </div>
                <div className="flex justify-center gap-1">
                  <span className="text-[9px] text-muted-foreground">D:</span>
                  <CopyHex value={s.darkHex} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== GRADIENTES ===== */}
      <div className="cisec-card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Droplets size={18} className="text-primary" />
          <h4 className="text-sm font-semibold">Gradientes do sistema</h4>
        </div>
        <p className="text-xs text-muted-foreground mb-4">
          Combinações construídas a partir do Laranja CISEC, Azul Noite e Grafite. Use em headers,
          hero sections, cards de destaque, campanhas e dataviz. Clique para copiar o CSS.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <GradientCard
            name="Primary — Laranja CISEC"
            css="linear-gradient(135deg, #FF9E20 0%, #B86612 100%)"
            colors={["#FF9E20", "#B86612"]}
            description="Botões premium, hover de cards, hero institucional."
          />
          <GradientCard
            name="Secondary — Azul Noite"
            css="linear-gradient(135deg, #354F80 0%, #0F1727 100%)"
            colors={["#354F80", "#0F1727"]}
            description="Headers institucionais, splash, telas de autenticação."
          />
          <GradientCard
            name="Institucional CISEC"
            css="linear-gradient(135deg, #1F3051 0%, #FF9E20 100%)"
            colors={["#1F3051", "#FF9E20"]}
            description="Assinatura da marca — combinação primária × secundária."
          />
          <GradientCard
            name="Pôr do Sol CISEC"
            css="linear-gradient(120deg, #FFC94D 0%, #FF9E20 50%, #D9432A 100%)"
            colors={["#FFC94D", "#FF9E20", "#D9432A"]}
            description="Campanhas, banners de evento, comunicação calorosa."
          />
          <GradientCard
            name="Aço & Turquesa"
            css="linear-gradient(120deg, #354F80 0%, #2E9BAB 100%)"
            colors={["#354F80", "#2E9BAB"]}
            description="Dashboards frios, indicadores de dados e monitoramento."
          />
          <GradientCard
            name="Grafite Fade"
            css="linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)"
            colors={["#FAFAFA", "#FFFFFF"]}
            description="Fundos de seção e separação suave de áreas. Modo claro."
          />
          <GradientCard
            name="Noite Profunda"
            css="linear-gradient(180deg, #17233C 0%, #070B14 100%)"
            colors={["#17233C", "#070B14"]}
            description="Superfícies e hero sections em dark mode."
          />
        </div>
      </div>

      {/* ===== UTILIZAÇÃO SISTÊMICA ===== */}
      <div className="cisec-card mb-6">
        <h4 className="text-sm font-semibold mb-4">Utilização sistêmica das cores</h4>
        <p className="text-xs text-muted-foreground mb-3">
          Distribuição recomendada <strong>60-30-10</strong>:
          <span className="text-foreground"> 60% neutros</span> (Grafite 50–200 + Background/Card) para superfícies,
          <span className="text-foreground"> 30% institucional</span> (Azul Noite 500–800) para navegação,
          headers e texto de contraste, <span className="text-foreground">10% primário/acentos</span>
          (Laranja CISEC + complementares + gradientes)
          para destaques pontuais.
        </p>
        <ul className="text-xs text-muted-foreground list-disc pl-5 mb-4 space-y-1">
          <li><strong>Botão primário:</strong> <code className="bg-muted px-1 rounded">orange-500</code> fundo, texto <code className="bg-muted px-1 rounded">navy-900</code> · hover <code className="bg-muted px-1 rounded">orange-600</code> · pressed <code className="bg-muted px-1 rounded">orange-700</code>.</li>
          <li><strong>Botão secundário:</strong> fundo <code className="bg-muted px-1 rounded">navy-700</code>, texto branco · hover <code className="bg-muted px-1 rounded">navy-600</code> · outline <code className="bg-muted px-1 rounded">navy-700</code> com hover <code className="bg-muted px-1 rounded">navy-50</code>.</li>
          <li><strong>CTA promocional:</strong> gradiente <em>Primary — Laranja CISEC</em> ou <em>Institucional CISEC</em>.</li>
          <li><strong>Links:</strong> <code className="bg-muted px-1 rounded">orange-700</code> · hover <code className="bg-muted px-1 rounded">orange-800</code> · visited <code className="bg-muted px-1 rounded">navy-700</code>.</li>
          <li><strong>Dark mode:</strong> background <code className="bg-muted px-1 rounded">navy-950</code>, surface <code className="bg-muted px-1 rounded">navy-800</code>, primary mantém <code className="bg-muted px-1 rounded">orange-500</code>.</li>
          <li><strong>Dataviz (sequência fixa):</strong> #FF9E20 → #1F3051 → #2E9BAB → #4E8C6A → #6B4C93 → #D9432A → #FFC94D → #606060.</li>
          <li><strong>Acessibilidade:</strong> texto sobre <code className="bg-muted px-1 rounded">orange-500</code> use <code className="bg-muted px-1 rounded">navy-900</code> (AA ≥ 4.5:1). Texto branco somente sobre <code className="bg-muted px-1 rounded">orange-700</code>+ ou <code className="bg-muted px-1 rounded">navy-500</code>+.</li>
        </ul>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-3 font-semibold">Contexto</th>
                <th className="text-left py-2 pr-3 font-semibold">Token CSS</th>
                <th className="text-left py-2 pr-3 font-semibold">Hex (Light)</th>
                <th className="text-left py-2 pr-3 font-semibold">Hex (Dark)</th>
                <th className="text-left py-2 font-semibold">Onde usar</th>
              </tr>
            </thead>
            <tbody>
              {[
                { ctx: "Fundo da página",   token: "--background",         light: "#FAFAFA", dark: "#0F1727", use: "Body, fundo geral" },
                { ctx: "Cards e painéis",   token: "--card",               light: "#FFFFFF", dark: "#17233C", use: "Cards, modais, drawers" },
                { ctx: "Texto principal",   token: "--foreground",         light: "#1A1A1A", dark: "#F0F0F0", use: "Títulos e corpo" },
                { ctx: "Texto secundário",  token: "--muted-foreground",   light: "#606060", dark: "#A3A3A3", use: "Labels, descrições" },
                { ctx: "Ação primária",     token: "--primary",            light: "#FF9E20", dark: "#FF9E20", use: "CTAs, links, foco" },
                { ctx: "Ação secundária",   token: "--secondary",          light: "#1F3051", dark: "#354F80", use: "Headers, ações de apoio" },
                { ctx: "Acento quente",     token: "--accent-terracota",   light: "#D9432A", dark: "#F26A5C", use: "CTAs alternativos, alertas" },
                { ctx: "Bordas",            token: "--border",             light: "#E0E0E0", dark: "#263E68", use: "Divisores, inputs" },
                { ctx: "Fundo muted",       token: "--muted",              light: "#F0F0F0", dark: "#1F3051", use: "Áreas de destaque sutil" },
                { ctx: "Sucesso",           token: "--success",            light: "#3E8F5F", dark: "#5EBF83", use: "Confirmações, validações" },
                { ctx: "Alerta",            token: "--warning",            light: "#E5851A", dark: "#FFB040", use: "Avisos, atenção" },
                { ctx: "Erro",              token: "--danger",             light: "#C93A2C", dark: "#F26A5C", use: "Erros, exclusões" },
                { ctx: "Informação",        token: "--info",               light: "#354F80", dark: "#7F97BF", use: "Dicas, informações" },
              ].map(row => (
                <tr key={row.token} className="border-b border-border last:border-0">
                  <td className="py-2 pr-3 font-medium">{row.ctx}</td>
                  <td className="py-2 pr-3">
                    <code className="bg-muted px-1 py-0.5 rounded text-[10px]">{row.token}</code>
                  </td>
                  <td className="py-2 pr-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded border border-border shrink-0" style={{ backgroundColor: row.light }} />
                      <CopyHex value={row.light} />
                    </div>
                  </td>
                  <td className="py-2 pr-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded border border-border shrink-0" style={{ backgroundColor: row.dark }} />
                      <CopyHex value={row.dark} />
                    </div>
                  </td>
                  <td className="py-2 text-muted-foreground">{row.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== CÓDIGO DE EXEMPLO ===== */}
      <CodeBlock
        title="Uso dos tokens de cor no CSS"
        language="css"
        code={`/* Sempre use tokens CSS — nunca hex diretamente */
.card {
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  border: 1px solid hsl(var(--border));
}

.btn-primary {
  background-color: hsl(var(--primary));       /* #FF9E20 — Laranja CISEC */
  color: hsl(var(--primary-foreground));        /* #1F3051 — Azul Noite */
}

.btn-primary:hover  { background-color: #E5851A; }  /* orange-600 */
.btn-primary:active { background-color: #B86612; }  /* orange-700 */

.btn-secondary {
  background-color: hsl(var(--secondary));      /* #1F3051 — Azul Noite */
  color: hsl(var(--secondary-foreground));      /* #FFFFFF */
}

/* Gradientes do sistema */
.hero-banner   { background: linear-gradient(135deg, #FF9E20 0%, #B86612 100%); }
.brand-deep    { background: linear-gradient(135deg, #354F80 0%, #0F1727 100%); }
.cisec-sunset  { background: linear-gradient(120deg, #FFC94D 0%, #FF9E20 50%, #D9432A 100%); }
.institucional { background: linear-gradient(135deg, #1F3051 0%, #FF9E20 100%); }

/* Feedback semântico */
.alert-success {
  background-color: hsl(var(--success-bg));
  color: hsl(var(--success));
  border-left: 3px solid hsl(var(--success));
}`}
      />

      <CodeBlock
        title="Uso dos tokens de cor no Tailwind"
        language="tsx"
        code={`{/* Botões usando tokens — se adaptam ao tema automaticamente */}
<button className="bg-primary text-primary-foreground">Ação principal</button>
<button className="bg-secondary text-secondary-foreground">Ação secundária</button>

{/* Feedback */}
<div className="bg-success/10 text-success border-l-3 border-success p-4">
  Operação concluída com sucesso.
</div>

{/* Gradientes no Tailwind */}
<div className="bg-gradient-to-r from-[#1F3051] via-[#354F80] to-[#FF9E20]">
  Banner institucional
</div>

{/* Nunca faça isso ❌ */}
<div className="bg-[#FF9E20] text-white">Evite hex direto</div>

{/* Faça isso ✅ */}
<div className="bg-primary text-primary-foreground">Use tokens</div>`}
      />
    </>
  );
}
