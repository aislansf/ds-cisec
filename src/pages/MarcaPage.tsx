import { PageHeader, SectionHeader } from "@/components/DSComponents";
import { SEO } from "@/components/SEO";
import { Download, FileText, BarChart3, ShieldAlert, Users } from "lucide-react";
import {
  cisecHorizontalCor,
  cisecHorizontalWhite,
  cisecCompletaLinhaCor,
  cisecCompletaCor,
  cisecCompletaLinhaWhite,
  cisecCompletaWhite,
  cisecSimboloLaranja,
  cisecSimboloPreto,
  cisecSimboloBranco,
  cisecCorSvg,
  cisecWhiteSvg,
  cisecBlackSvg,
} from "@/assets/cisec";

const CISEC_BLUE = "#1F3051";
const CISEC_ORANGE = "#FF9E20";

/* ─── Frentes de atuação (Manual, p.4) ─── */
const frentes = [
  {
    icon: BarChart3,
    title: "Decisões estratégicas",
    desc: "Subsidiar políticas públicas de saúde e apoiar a gestão com painéis dinâmicos e monitoramento epidemiológico.",
  },
  {
    icon: ShieldAlert,
    title: "Prevenção e alertas",
    desc: "Analisar padrões de doenças e agravos para promover medidas preventivas rápidas.",
  },
  {
    icon: Users,
    title: "Gestão de pessoas",
    desc: "Painéis e indicadores sobre capacitação e força de trabalho da rede pública de saúde cearense.",
  },
];

/* ─── Paleta principal (Manual, p.12) ─── */
const paletaPrincipal = [
  {
    nome: "Azul Institucional",
    hex: "#1F3051",
    rgb: "31, 48, 81",
    cmyk: "62, 41, 0, 68",
    desc: "Cor de maior presença — usada em marca, títulos e superfícies institucionais.",
  },
  {
    nome: "Laranja",
    hex: "#FF9E20",
    rgb: "255, 158, 32",
    cmyk: "0, 38, 87, 0",
    desc: "Cor de destaque — CTAs, símbolos, elementos de atenção.",
  },
  {
    nome: "Cinza",
    hex: "#606060",
    rgb: "96, 96, 96",
    cmyk: "0, 0, 0, 62",
    desc: "Cor de apoio — textos secundários, bordas, elementos neutros.",
  },
];

/* ─── Escala cromática (100 / 80 / 60 / 40 / 20) ─── */
const escalaAzul = ["#1F3051", "#4C5974", "#7983A3", "#A6AECC", "#D2D8E9"];
const escalaLaranja = ["#FF9E20", "#FFB14C", "#FFC578", "#FFD8A5", "#FFECD2"];

/* ─── Complementares (Manual, p.13) ─── */
const complementares = [
  { base: "Laranja", baseHex: "#FF9E20", comp: "Complementar", compHex: "#2081FF" },
  { base: "Azul Institucional", baseHex: "#1F3051", comp: "Complementar", compHex: "#51401F" },
];

/* ─── Cores semânticas ─── */
const semanticas = [
  { nome: "Sucesso", hex: "#2E9E5B" },
  { nome: "Alerta", hex: "#F4B400" },
  { nome: "Erro", hex: "#E1483F" },
  { nome: "Informação", hex: "#2081FF" },
];

/* ─── Redução mínima (Manual, p.11) ─── */
const reducaoRows = [
  { tipo: "Símbolo isolado", impressao: "8 mm de altura", digital: "24 px de altura" },
  { tipo: "Marca horizontal", impressao: "25 mm de largura", digital: "90 px de largura" },
];

/* ─── Usos indevidos (Manual, p.18) ─── */
const usosIndevidos = [
  { style: { filter: "hue-rotate(120deg) saturate(2)" }, label: "1 · Cor alterada" },
  { style: { transform: "scaleX(1.6)" }, label: "2 · Proporção distorcida" },
  { style: { transform: "rotate(-12deg)" }, label: "3 · Rotacionado" },
  { style: { filter: "opacity(0.15)" }, label: "4 · Elemento removido" },
  { style: { filter: "blur(1.5px) contrast(1.4)" }, label: "5 · Elemento modificado" },
  { style: { opacity: 0.25 }, label: "6 · Sem contraste" },
];

/* ─── Downloads ─── */
const downloads = [
  { label: "Marca horizontal · Cor (PNG)", url: cisecHorizontalCor, file: "cisec-horizontal-cor.png" },
  { label: "Marca horizontal · Branco (PNG)", url: cisecHorizontalWhite, file: "cisec-horizontal-white.png" },
  { label: "Marca completa com linha · Cor (PNG)", url: cisecCompletaLinhaCor, file: "cisec-completa-linha-cor.png" },
  { label: "Marca completa · Cor (PNG)", url: cisecCompletaCor, file: "cisec-completa-cor.png" },
  { label: "Símbolo · Laranja (PNG)", url: cisecSimboloLaranja, file: "cisec-simbolo-laranja.png" },
  { label: "Símbolo · Branco (PNG)", url: cisecSimboloBranco, file: "cisec-simbolo-branco.png" },
  { label: "Símbolo · Preto (PNG)", url: cisecSimboloPreto, file: "cisec-simbolo-preto.png" },
  { label: "Marca · Cor (SVG)", url: cisecCorSvg, file: "cisec-cor.svg" },
  { label: "Marca · Branco (SVG)", url: cisecWhiteSvg, file: "cisec-white.svg" },
  { label: "Marca · Preto (SVG)", url: cisecBlackSvg, file: "cisec-black.svg" },
];

function LogoFrame({
  src,
  alt,
  bg = "bg-white",
  className = "",
  imgClassName = "h-20",
  style,
}: {
  src: string;
  alt: string;
  bg?: string;
  className?: string;
  imgClassName?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`border border-border rounded-lg overflow-hidden ${bg} flex items-center justify-center p-6 ${className}`}
      style={style}
    >
      <img src={src} alt={alt} loading="lazy" className={`w-auto ${imgClassName} object-contain`} />
    </div>
  );
}

function Swatch({ hex, label, textDark = false }: { hex: string; label?: string; textDark?: boolean }) {
  return (
    <div
      className="rounded-md h-16 flex items-end p-2 border border-border/40"
      style={{ backgroundColor: hex, color: textDark ? "#1F3051" : "#fff" }}
    >
      <span className="text-[10px] font-semibold tracking-wide">{label ?? hex}</span>
    </div>
  );
}

export default function MarcaPage() {
  return (
    <div>
      <SEO
        title="Marca CISEC — Design System"
        description="Diretrizes oficiais da marca CISEC — símbolo, versões, paleta, tipografia e aplicações — conforme o Manual de Marca CISEC (ESP/CE), versão 4/2026."
        path="/marca"
      />
      <PageHeader
        badge="Manual de Marca · v4/2026"
        title="Marca CISEC"
        description="Diretrizes oficiais da marca do Centro de Inteligência em Saúde do Estado do Ceará (CISEC/ESP-CE): símbolo, versões, área de proteção, paleta, tipografia, aplicações e usos indevidos."
      />

      {/* 1. Sobre o CISEC */}
      <SectionHeader
        id="sobre-cisec"
        badge="Contexto institucional"
        title="Sobre o CISEC"
        description="O CISEC-CE é o Centro de Inteligência em Saúde do Estado do Ceará. Vinculado à Escola de Saúde Pública do Ceará (ESP/CE), atua como um hub centralizado para capturar, processar e analisar dados de saúde, transformando-os em informações estratégicas para gestores públicos, profissionais de saúde e a sociedade."
      />
      <div className="cisec-card mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {frentes.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="rounded-lg border border-border bg-muted/30 p-4">
                <div className="w-10 h-10 rounded-lg bg-card-icon text-card-icon-foreground flex items-center justify-center mb-3">
                  <Icon size={20} />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">{f.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. O Símbolo */}
      <SectionHeader
        id="simbolo"
        badge="Conceito"
        title="O Símbolo"
        description="Representa a inteligência em saúde: um pulso de dados (a linha em movimento) conectado a pontos de informação (os blocos), traduzindo a ideia de captar, cruzar e transformar dados de saúde em conhecimento estratégico."
      />
      <div className="cisec-card mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <LogoFrame src={cisecSimboloPreto} alt="Símbolo CISEC em azul institucional." imgClassName="h-24" />
            <p className="text-xs font-semibold text-foreground">Positivo</p>
            <p className="text-xs text-muted-foreground">Uso padrão sobre fundos claros.</p>
          </div>
          <div className="space-y-2">
            <LogoFrame
              src={cisecSimboloBranco}
              alt="Símbolo CISEC em branco sobre azul."
              bg=""
              imgClassName="h-24"
              style={{ backgroundColor: CISEC_BLUE }}
            />
            <p className="text-xs font-semibold text-foreground">Negativo</p>
            <p className="text-xs text-muted-foreground">Badge azul institucional — avatares e favicons.</p>
          </div>
          <div className="space-y-2">
            <LogoFrame
              src={cisecSimboloLaranja}
              alt="Símbolo CISEC em laranja sobre badge azul."
              bg=""
              imgClassName="h-24"
              style={{ backgroundColor: CISEC_BLUE }}
            />
            <p className="text-xs font-semibold text-foreground">Cromático · Azul + Laranja</p>
            <p className="text-xs text-muted-foreground">Badge azul com símbolo em laranja.</p>
          </div>
          <div className="space-y-2">
            <LogoFrame
              src={cisecSimboloBranco}
              alt="Símbolo CISEC em branco sobre badge laranja."
              bg=""
              imgClassName="h-24"
              style={{ backgroundColor: CISEC_ORANGE, borderRadius: 24 }}
            />
            <p className="text-xs font-semibold text-foreground">Cromático · Laranja + Branco</p>
            <p className="text-xs text-muted-foreground">Badge de cantos arredondados em laranja.</p>
          </div>
        </div>
      </div>

      {/* 3. Marca Horizontal */}
      <SectionHeader
        id="marca-horizontal"
        badge="Assinatura principal"
        title="Marca Horizontal"
        description="Símbolo + logotipo CISEC — assinatura principal, recomendada para a maioria das aplicações."
      />
      <div className="cisec-card mb-8">
        <LogoFrame src={cisecHorizontalCor} alt="Marca horizontal CISEC positivo." imgClassName="h-24" />
        <p className="text-xs text-muted-foreground leading-relaxed mt-3">
          Versão padrão sobre fundos claros. Use os arquivos oficiais — o logotipo é desenhado com traços próprios e não deve ser recriado com fontes de sistema.
        </p>
      </div>

      {/* 4. Versões alternativas */}
      <SectionHeader
        id="versoes-alternativas"
        badge="Cores e composição"
        title="Versões Alternativas"
        description="Para garantir legibilidade em qualquer contexto, a marca possui versões alternativas de cor."
      />
      <div className="cisec-card mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <LogoFrame
              src={cisecHorizontalWhite}
              alt="Marca CISEC em negativo sobre preto."
              bg=""
              imgClassName="h-16"
              style={{ backgroundColor: "#111" }}
            />
            <p className="text-xs font-semibold text-foreground">Negativo · sobre preto</p>
            <p className="text-xs text-muted-foreground">Fundos escuros ou fotográficos.</p>
          </div>
          <div className="space-y-2">
            <LogoFrame
              src={cisecHorizontalWhite}
              alt="Marca CISEC cromática sobre azul institucional."
              bg=""
              imgClassName="h-16"
              style={{ backgroundColor: CISEC_BLUE }}
            />
            <p className="text-xs font-semibold text-foreground">Negativo cromático · sobre azul</p>
            <p className="text-xs text-muted-foreground">Símbolo em laranja, logotipo em branco.</p>
          </div>
          <div className="space-y-2">
            <LogoFrame
              src={cisecHorizontalWhite}
              alt="Marca CISEC negativo sobre laranja."
              bg=""
              imgClassName="h-16"
              style={{ backgroundColor: CISEC_ORANGE }}
            />
            <p className="text-xs font-semibold text-foreground">Negativo · sobre laranja</p>
            <p className="text-xs text-muted-foreground">Aplicação sobre o laranja institucional.</p>
          </div>
          <div className="space-y-2">
            <LogoFrame src={cisecHorizontalCor} alt="Marca CISEC cromática sobre branco." imgClassName="h-16" />
            <p className="text-xs font-semibold text-foreground">Cromática · sobre claro</p>
            <p className="text-xs text-muted-foreground">Símbolo em laranja, logotipo em azul institucional.</p>
          </div>
        </div>
      </div>

      {/* 5. Versões compostas */}
      <SectionHeader
        id="versoes-compostas"
        badge="Com nome institucional"
        title="Versões Compostas"
        description="Versões que incluem o nome institucional por extenso — indicadas para relatórios, ofícios e publicações técnicas em públicos que ainda não conhecem bem o CISEC."
      />
      <div className="cisec-card mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <LogoFrame src={cisecCompletaLinhaCor} alt="Marca CISEC completa com linha divisória." imgClassName="h-24" />
            <p className="text-xs font-semibold text-foreground">Cromática completa · com linha</p>
            <p className="text-xs text-muted-foreground">Relatórios, ofícios e publicações técnicas — nome por extenso separado por linha divisória.</p>
          </div>
          <div className="space-y-2">
            <LogoFrame src={cisecCompletaCor} alt="Marca CISEC completa compacta." imgClassName="h-24" />
            <p className="text-xs font-semibold text-foreground">Cromática compacta · sem linha</p>
            <p className="text-xs text-muted-foreground">Versão compacta, para uso do dia a dia.</p>
          </div>
          <div className="space-y-2">
            <LogoFrame
              src={cisecCompletaWhite}
              alt="Marca CISEC completa em negativo sobre preto."
              bg=""
              imgClassName="h-24"
              style={{ backgroundColor: "#111" }}
            />
            <p className="text-xs font-semibold text-foreground">Completa · negativo</p>
            <p className="text-xs text-muted-foreground">Uso direto sobre preto ou imagens escuras.</p>
          </div>
          <div className="space-y-2">
            <LogoFrame
              src={cisecCompletaLinhaWhite}
              alt="Marca CISEC completa sobre azul institucional."
              bg=""
              imgClassName="h-24"
              style={{ backgroundColor: CISEC_BLUE }}
            />
            <p className="text-xs font-semibold text-foreground">Completa · sobre azul</p>
            <p className="text-xs text-muted-foreground">Cromática aplicada sobre o azul institucional.</p>
          </div>
        </div>
      </div>

      {/* 6. Área de proteção & redução mínima */}
      <SectionHeader
        id="protecao-reducao"
        badge="Espaço livre e tamanho mínimo"
        title="Área de Proteção e Redução Mínima"
        description="Preservam a legibilidade e a integridade visual da marca. Nenhum outro elemento — texto, imagem ou grafismo — deve invadir sua área de proteção."
      />
      <div className="cisec-card mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-6">
          <div className="border border-border rounded-lg bg-white p-8 flex items-center justify-center">
            <div className="relative inline-block border-2 border-dashed border-primary/60 p-8">
              <img src={cisecHorizontalCor} alt="Marca CISEC com marcação da área de proteção." className="h-16 w-auto" />
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-2 text-[10px] font-bold uppercase tracking-wider text-primary">X</span>
              <span className="absolute -left-3 top-1/2 -translate-y-1/2 bg-background px-2 text-[10px] font-bold uppercase tracking-wider text-primary">X</span>
            </div>
          </div>
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">Regra</p>
            <p className="font-heading text-2xl font-bold text-foreground mb-2">X = altura do símbolo</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Use a altura do símbolo (&ldquo;X&rdquo;) como margem mínima livre ao redor de toda a assinatura. Vale para todas as versões da marca.
            </p>
          </div>
        </div>

        <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Redução mínima</h4>
        <div className="overflow-x-auto mb-3">
          <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
            <thead className="bg-muted">
              <tr className="text-left">
                <th className="px-3 py-2 font-semibold">Elemento</th>
                <th className="px-3 py-2 font-semibold">Impressão</th>
                <th className="px-3 py-2 font-semibold">Digital</th>
              </tr>
            </thead>
            <tbody className="bg-background">
              {reducaoRows.map((r) => (
                <tr key={r.tipo} className="border-t border-border">
                  <td className="px-3 py-2 text-xs">{r.tipo}</td>
                  <td className="px-3 py-2 font-semibold">{r.impressao}</td>
                  <td className="px-3 py-2 font-semibold">{r.digital}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Abaixo desses limites, priorize sempre o <strong>símbolo isolado</strong> — ele mantém a leitura mesmo em tamanhos muito reduzidos (favicons, avatares e ícones de aplicativo).
        </p>
      </div>

      {/* 7. Paleta de cores */}
      <SectionHeader
        id="paleta"
        badge="Cores oficiais"
        title="Paleta de Cores"
        description="Combina o azul institucional — cor de maior presença — com o laranja de destaque e o cinza de apoio para textos e elementos secundários."
      />
      <div className="cisec-card mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {paletaPrincipal.map((c) => (
            <div key={c.hex} className="rounded-lg border border-border overflow-hidden">
              <div className="h-24" style={{ backgroundColor: c.hex }} />
              <div className="p-3 space-y-1">
                <p className="text-sm font-semibold text-foreground">{c.nome}</p>
                <p className="text-xs text-muted-foreground">{c.desc}</p>
                <div className="text-[11px] font-mono text-muted-foreground pt-2 space-y-0.5">
                  <div>HEX <span className="text-foreground">{c.hex}</span></div>
                  <div>RGB <span className="text-foreground">{c.rgb}</span></div>
                  <div>CMYK <span className="text-foreground">{c.cmyk}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Escala cromática</h4>
        <p className="text-xs text-muted-foreground mb-3">
          Tons derivados das cores principais para gráficos, tabelas e elementos de apoio — sempre com a cor 100% predominando na marca.
        </p>
        <div className="space-y-3 mb-6">
          <div>
            <p className="text-xs font-semibold text-foreground mb-1.5">Azul Institucional</p>
            <div className="grid grid-cols-5 gap-2">
              {escalaAzul.map((hex, i) => (
                <Swatch key={hex} hex={hex} label={`${100 - i * 20}%`} textDark={i >= 3} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground mb-1.5">Laranja</p>
            <div className="grid grid-cols-5 gap-2">
              {escalaLaranja.map((hex, i) => (
                <Swatch key={hex} hex={hex} label={`${100 - i * 20}%`} textDark />
              ))}
            </div>
          </div>
        </div>

        <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Cores complementares</h4>
        <p className="text-xs text-muted-foreground mb-3">
          Uso pontual, em ilustrações e infográficos — <strong>nunca na marca</strong>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {complementares.map((c) => (
            <div key={c.baseHex} className="rounded-lg border border-border overflow-hidden grid grid-cols-2">
              <div className="p-3 flex flex-col justify-end h-24" style={{ backgroundColor: c.baseHex, color: "#fff" }}>
                <p className="text-[10px] uppercase tracking-wider opacity-80">{c.base}</p>
                <p className="text-xs font-mono">{c.baseHex}</p>
              </div>
              <div className="p-3 flex flex-col justify-end h-24" style={{ backgroundColor: c.compHex, color: "#fff" }}>
                <p className="text-[10px] uppercase tracking-wider opacity-80">{c.comp}</p>
                <p className="text-xs font-mono">{c.compHex}</p>
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Cores semânticas</h4>
        <p className="text-xs text-muted-foreground mb-3">
          Para interfaces, painéis e dashboards do CISEC — comunicam estados sem substituir as cores institucionais.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {semanticas.map((s) => (
            <div key={s.hex} className="rounded-lg border border-border overflow-hidden">
              <div className="h-16" style={{ backgroundColor: s.hex }} />
              <div className="p-2">
                <p className="text-xs font-semibold text-foreground">{s.nome}</p>
                <p className="text-[11px] font-mono text-muted-foreground">{s.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Tipografia */}
      <SectionHeader
        id="tipografia"
        badge="Montserrat + Lora"
        title="Tipografia"
        description="O logotipo CISEC é desenhado com traços próprios (blocos vetoriais) e nunca deve ser recriado com fontes de sistema — utilize sempre os arquivos oficiais."
      />
      <div className="cisec-card mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="rounded-lg border border-border bg-muted/30 p-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-primary mb-2">Primária · Montserrat</p>
            <p className="font-heading text-5xl font-bold text-foreground leading-none mb-3" style={{ fontFamily: "Montserrat" }}>
              Aa <span className="font-normal">Aa</span>
            </p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Bold · Regular</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Comunicação escrita do CISEC — documentos, apresentações e materiais digitais. Montserrat Bold para títulos e destaques; Regular para textos de apoio.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-muted/30 p-5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-primary mb-2">Secundária (sugestão) · Lora</p>
            <p className="text-4xl text-foreground leading-tight mb-3" style={{ fontFamily: "Lora, Georgia, serif", fontStyle: "italic" }}>
              &ldquo;A saúde pública é feita de dados transformados em decisão.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Serifada contemporânea, para citações, destaques editoriais e materiais institucionais formais (relatórios, publicações científicas) — sempre em conjunto com a Montserrat, nunca substituindo o logotipo ou títulos principais.
            </p>
          </div>
        </div>
        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-xs font-mono text-foreground leading-relaxed" style={{ fontFamily: "Montserrat" }}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
            abcdefghijklmnopqrstuvwxyz<br />
            0123456789 !?@#&amp;
          </p>
        </div>
      </div>

      {/* 9. Como aplicar a marca */}
      <SectionHeader
        id="aplicacao"
        badge="Regras de aplicação"
        title="Como Aplicar a Marca"
        description="Regra geral: positiva no claro, negativa no escuro. Independentemente da cor específica do fundo, fundos claros pedem a marca positiva; fundos escuros pedem a marca negativa."
      />
      <div className="cisec-card mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <LogoFrame src={cisecHorizontalCor} alt="Marca positiva sobre fundo claro." imgClassName="h-16" />
            <p className="text-xs font-semibold text-foreground mt-2">Fundo claro</p>
            <p className="text-xs text-muted-foreground">Use a versão positiva (cromática ou azul institucional).</p>
          </div>
          <div>
            <LogoFrame
              src={cisecHorizontalWhite}
              alt="Marca negativa sobre fundo escuro."
              bg=""
              imgClassName="h-16"
              style={{ backgroundColor: "#5B2A86" }}
            />
            <p className="text-xs font-semibold text-foreground mt-2">Fundo escuro</p>
            <p className="text-xs text-muted-foreground">Use a versão negativa (branca), com contraste suficiente.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">Documentos institucionais</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Prefira a versão <strong>cromática completa</strong>, com o nome por extenso, para reforçar a identificação do órgão em públicos que ainda não o conhecem bem.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <p className="text-[11px] font-bold uppercase tracking-wider text-primary mb-1">Parcerias · ESP/CE e Governo do Ceará</p>
            <ul className="text-xs text-muted-foreground leading-relaxed space-y-1 list-disc pl-4">
              <li>Alinhe as marcas pelo centro, respeitando a área de proteção de cada uma.</li>
              <li>O ajuste de tamanho entre marcas de proporções diferentes deve ser <strong>óptico</strong>, não literal.</li>
              <li>Em peças institucionais (marca lida primeiro): CISEC à esquerda ou centralizado.</li>
              <li>Em peças com foco no conteúdo: CISEC à direita.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 10. Usos indevidos */}
      <SectionHeader
        id="usos-indevidos"
        badge="Não faça"
        title="Usos Indevidos"
        description="Para preservar a força e o reconhecimento da marca, nunca altere cores, distorça proporções, rotacione, elimine ou modifique elementos, ou aplique sobre fundos sem contraste suficiente."
      />
      <div className="cisec-card mb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {usosIndevidos.map((u) => (
            <div key={u.label} className="space-y-2">
              <div className="relative border border-destructive/30 rounded-lg bg-white p-4 h-24 flex items-center justify-center overflow-hidden">
                <img src={cisecHorizontalCor} alt="" className="h-8 w-auto" style={u.style} />
                <span className="absolute top-1 right-1 w-5 h-5 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center text-xs font-bold">✗</span>
              </div>
              <p className="text-[11px] text-center text-muted-foreground leading-tight">{u.label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mt-4">
          Em caso de dúvida sobre uma aplicação específica, consulte a equipe de comunicação do <strong>CISEC/ESP-CE</strong> antes de publicar o material.
        </p>
      </div>

      {/* 11. Downloads */}
      <SectionHeader
        id="downloads"
        badge="Arquivos oficiais"
        title="Downloads"
        description="Sempre que possível, utilize os arquivos oficiais em vez de recriar a marca."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {downloads.map((d) => (
          <a
            key={d.file}
            href={d.url}
            download={d.file}
            target="_blank"
            rel="noreferrer"
            className="cisec-card flex items-center justify-between gap-3 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-card-icon text-card-icon-foreground flex items-center justify-center shrink-0">
                <FileText size={18} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{d.label}</p>
                <p className="text-xs text-muted-foreground truncate">{d.file}</p>
              </div>
            </div>
            <Download size={16} className="text-primary shrink-0" />
          </a>
        ))}
      </div>
    </div>
  );
}
