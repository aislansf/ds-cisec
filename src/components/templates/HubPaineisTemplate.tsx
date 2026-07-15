import { useState } from "react";
import {
  BarChart3, FileText, Users, Shield, Landmark, BookOpen,
  GraduationCap, Building2, Scale, PieChart, ClipboardList,
  TrendingUp, Search, X, Moon, Sun, Menu
} from "lucide-react";
import { ComponentPreview } from "@/components/DSComponents";
import { cisecCor as logoCisecCompleta2, cisecWhite as cisecLogoWhite } from "@/assets/cisec";
import hubThumb1 from "@/assets/hub-thumb-1.jpg";
import hubThumb2 from "@/assets/hub-thumb-2.jpg";
import hubThumb3 from "@/assets/hub-thumb-3.jpg";
import hubThumb4 from "@/assets/hub-thumb-4.jpg";

interface PainelCard {
  id: string;
  sigla: string;
  siglaCor: string;
  titulo: string;
  descricao: string;
  icon: React.ReactNode;
  imagem?: string;
}

const paineis: PainelCard[] = [
  {
    id: "vigilancia-epidemiologica",
    sigla: "NUVEP",
    siglaCor: "bg-cisec-blue",
    titulo: "Vigilância Epidemiológica",
    descricao: "Painel de monitoramento de agravos, surtos e doenças de notificação compulsória no Ceará.",
    icon: <ClipboardList size={32} />,
    imagem: hubThumb1,
  },
  {
    id: "ouvidoria-sus",
    sigla: "OUVSUS",
    siglaCor: "bg-cisec-orange",
    titulo: "Ouvidoria do SUS",
    descricao: "Manifestações dos usuários do SUS no Ceará: reclamações, sugestões e elogios sobre o cuidado em saúde.",
    icon: <Users size={32} />,
    imagem: hubThumb2,
  },
  {
    id: "boletins-epidemiologicos",
    sigla: "BOLET",
    siglaCor: "bg-cisec-orange",
    titulo: "Boletins Epidemiológicos",
    descricao: "Publicação e acompanhamento de boletins epidemiológicos periódicos produzidos pelo CISEC.",
    icon: <FileText size={32} />,
    imagem: hubThumb3,
  },
  {
    id: "gestores-municipais",
    sigla: "COSEMS",
    siglaCor: "bg-cisec-blue",
    titulo: "Cadastro — Gestores Municipais de Saúde",
    descricao: "Acompanhamento dos secretários municipais de saúde e interlocutores dos 184 municípios cearenses.",
    icon: <Building2 size={32} />,
    imagem: hubThumb4,
  },
  {
    id: "saude-digital",
    sigla: "NUTIC",
    siglaCor: "bg-cisec-blue",
    titulo: "Saúde Digital — PDTIC",
    descricao: "Plano Diretor de Tecnologia da Informação e Comunicação aplicado aos sistemas de saúde do Ceará.",
    icon: <BarChart3 size={32} />,
    imagem: hubThumb1,
  },
  {
    id: "rede-atencao",
    sigla: "RAS",
    siglaCor: "bg-cisec-blue",
    titulo: "Rede de Atenção à Saúde",
    descricao: "Acompanhamento da Rede de Atenção à Saúde do SUS-CE: unidades, regionais e fluxos assistenciais.",
    icon: <Landmark size={32} />,
    imagem: hubThumb2,
  },
  {
    id: "cobertura-vacinal",
    sigla: "IMUNI",
    siglaCor: "bg-success",
    titulo: "Cobertura Vacinal",
    descricao: "Cobertura das vacinas do calendário do PNI por município e regional de saúde do Ceará.",
    icon: <TrendingUp size={32} />,
    imagem: hubThumb3,
  },
  {
    id: "financiamento-sus",
    sigla: "FES",
    siglaCor: "bg-success",
    titulo: "Financiamento do SUS",
    descricao: "Execução orçamentária e financeira do Fundo Estadual de Saúde e transferências fundo a fundo.",
    icon: <PieChart size={32} />,
    imagem: hubThumb4,
  },
  {
    id: "prestacao-contas-sus",
    sigla: "SARGSUS",
    siglaCor: "bg-success",
    titulo: "Prestação de Contas — SUS",
    descricao: "Monitoramento transparente dos relatórios de gestão e prestação de contas do SUS estadual.",
    icon: <Scale size={32} />,
    imagem: hubThumb1,
  },
  {
    id: "educacao-saude",
    sigla: "ESP-CE",
    siglaCor: "bg-cisec-orange",
    titulo: "Educação Permanente em Saúde",
    descricao: "Formação e qualificação de profissionais do SUS pela Escola de Saúde Pública do Ceará (ESP-CE).",
    icon: <GraduationCap size={32} />,
    imagem: hubThumb2,
  },
  {
    id: "auditoria-sus",
    sigla: "DENASUS",
    siglaCor: "bg-cisec-orange",
    titulo: "Auditoria do SUS",
    descricao: "Componente estadual de auditoria do SUS: apuração de irregularidades e recomendações à gestão.",
    icon: <Shield size={32} />,
    imagem: hubThumb3,
  },
  {
    id: "atencao-primaria",
    sigla: "APS",
    siglaCor: "bg-cisec-orange",
    titulo: "Atenção Primária à Saúde",
    descricao: "Cobertura e desempenho da APS/Estratégia Saúde da Família nos municípios cearenses.",
    icon: <BookOpen size={32} />,
    imagem: hubThumb4,
  },
];

/* ── Card com ícone (original) ── */
function FlipCard({ card }: { card: PainelCard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-[280px] perspective-1000"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl border border-border bg-card shadow-sm overflow-hidden flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex-1 bg-gradient-to-br from-muted/60 to-muted/30 flex items-center justify-center text-muted-foreground/40">
            {card.icon}
          </div>
          <div className="relative px-4 pb-4 pt-2">
            <span className={`absolute -top-3 right-4 text-[10px] font-bold text-white px-2.5 py-0.5 rounded ${card.siglaCor}`}>
              {card.sigla}
            </span>
            <h4 className="font-semibold text-sm text-foreground leading-tight mt-1">{card.titulo}</h4>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{card.descricao}</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl border border-cisec-blue bg-cisec-blue text-white overflow-hidden flex flex-col items-center justify-center p-6 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="mb-3 opacity-80">{card.icon}</div>
          <h4 className="font-semibold text-sm mb-2">{card.titulo}</h4>
          <p className="text-xs opacity-80 mb-4 line-clamp-3">{card.descricao}</p>
          <button className="bg-white text-cisec-blue font-semibold text-xs px-5 py-2 rounded-lg hover:bg-white/90 transition-colors">
            Acessar Painel
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Card com imagem (nova variação) ── */
function FlipCardImage({ card }: { card: PainelCard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-[300px]"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front — imagem */}
        <div
          className="absolute inset-0 rounded-xl border border-border bg-card shadow-sm overflow-hidden flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-[170px] overflow-hidden">
            <img
              src={card.imagem}
              alt={card.titulo}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative px-4 pb-4 pt-2 flex-1 flex flex-col justify-center">
            <span className={`absolute -top-3 right-4 text-[10px] font-bold text-white px-2.5 py-0.5 rounded ${card.siglaCor}`}>
              {card.sigla}
            </span>
            <h4 className="font-semibold text-sm text-foreground leading-tight mt-1">{card.titulo}</h4>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{card.descricao}</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl border border-cisec-blue bg-cisec-blue text-white overflow-hidden flex flex-col items-center justify-center p-6 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="mb-3 opacity-80">{card.icon}</div>
          <h4 className="font-semibold text-sm mb-2">{card.titulo}</h4>
          <p className="text-xs opacity-80 mb-4 line-clamp-3">{card.descricao}</p>
          <button className="bg-white text-cisec-blue font-semibold text-xs px-5 py-2 rounded-lg hover:bg-white/90 transition-colors">
            Acessar Painel
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Hub original (ícones) ── */
function HubPaineisPreview() {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filtered = searchTerm
    ? paineis.filter(
        (p) =>
          p.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.sigla.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : paineis;

  return (
    <div className={`rounded-xl border border-border overflow-hidden ${darkMode ? "dark bg-[#1a1a2e]" : "bg-background"}`}>
      {/* Header — Marca completa · Classificação de conteúdo */}
      <div className="font-sans">
        <header className="bg-[#1F3051] text-white">
          <div className="flex items-center gap-3 px-4 py-2.5 min-h-[44px]">
            <button className="p-1 rounded text-white hover:bg-white/10 transition-colors" aria-label="Abrir menu">
              <Menu size={18} />
            </button>
            <img src={cisecLogoWhite} alt="CISEC" className="h-6 w-auto" />
            <span className="opacity-40 text-sm">|</span>
            <span className="font-semibold text-sm">CISEC</span>
            <span className="text-sm opacity-80">Hub de Painéis · Inteligência em Saúde</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-auto p-1.5 rounded text-white hover:bg-white/10 transition-colors"
              aria-label={darkMode ? "Modo claro" : "Modo escuro"}
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </header>
        <div className="bg-[#FF9E20] text-[#082841] px-4 py-1 text-[10px]">
          Conteúdo <strong>INTERNO/TODOS</strong>
        </div>
      </div>

      {/* Search */}
      <div className="flex justify-center py-4 px-4">
        <div className="relative w-full max-w-md">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar painel..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-muted/50 text-foreground text-xs rounded-lg pl-9 pr-9 py-2.5 border border-border focus:outline-none focus:ring-1 focus:ring-cisec-blue placeholder:text-muted-foreground"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="px-4 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((card) => (
          <FlipCard key={card.id} card={card} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-muted-foreground text-sm">
            Nenhum painel encontrado para "{searchTerm}"
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-border py-4 px-4 text-center">
        <div className="flex items-center justify-center gap-3">
          <img src={logoCisecCompleta2} alt="CISEC" className="h-5 opacity-60" />
        </div>
        <p className="text-[10px] text-muted-foreground mt-1"></p>
      </div>
    </div>
  );
}

/* ── Hub com imagens ── */
function HubPaineisImagePreview() {
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const filtered = searchTerm
    ? paineis.filter(
        (p) =>
          p.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.sigla.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : paineis;

  return (
    <div className={`rounded-xl border border-border overflow-hidden ${darkMode ? "dark bg-[#1a1a2e]" : "bg-background"}`}>
      {/* Header — Marca completa · Classificação de conteúdo */}
      <div className="font-sans">
        <header className="bg-[#1F3051] text-white">
          <div className="flex items-center gap-3 px-4 py-2.5 min-h-[44px]">
            <button className="p-1 rounded text-white hover:bg-white/10 transition-colors" aria-label="Abrir menu">
              <Menu size={18} />
            </button>
            <img src={cisecLogoWhite} alt="CISEC" className="h-6 w-auto" />
            <span className="opacity-40 text-sm">|</span>
            <span className="font-semibold text-sm">CISEC</span>
            <span className="text-sm opacity-80">Hub de Painéis · Inteligência em Saúde</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-auto p-1.5 rounded text-white hover:bg-white/10 transition-colors"
              aria-label={darkMode ? "Modo claro" : "Modo escuro"}
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </header>
        <div className="bg-[#FF9E20] text-[#082841] px-4 py-1 text-[10px]">
          Conteúdo <strong>INTERNO/TODOS</strong>
        </div>
      </div>

      {/* Search */}
      <div className="flex justify-center py-4 px-4">
        <div className="relative w-full max-w-md">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar painel..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-muted/50 text-foreground text-xs rounded-lg pl-9 pr-9 py-2.5 border border-border focus:outline-none focus:ring-1 focus:ring-cisec-blue placeholder:text-muted-foreground"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X size={12} />
            </button>
          )}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="px-4 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((card) => (
          <FlipCardImage key={card.id} card={card} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-muted-foreground text-sm">
            Nenhum painel encontrado para "{searchTerm}"
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-border py-4 px-4 text-center">
        <div className="flex items-center justify-center gap-3">
          <img src={logoCisecCompleta2} alt="CISEC" className="h-5 opacity-60" />
        </div>
        <p className="text-[10px] text-muted-foreground mt-1"></p>
      </div>
    </div>
  );
}

export function HubPaineisImageSection() {
  return (
    <ComponentPreview
      title="Hub de Painéis — Modelo com Imagens"
      description="Variação do Hub de Painéis com imagens ilustrativas de cada dashboard na parte frontal dos cards. O efeito flip revela a descrição e o botão de acesso."
      whenToUse={[
        "Quando cada painel possui uma prévia visual ou thumbnail do dashboard",
        "Portais que priorizam identificação visual rápida dos painéis",
        "Catálogos de relatórios ou dashboards com captura de tela",
      ]}
      accessibility={[
        "Imagens possuem alt text descritivo",
        "Efeito flip mantém acessibilidade via teclado",
        "Contraste adequado em ambos os modos",
      ]}
    >
      <HubPaineisImagePreview />
    </ComponentPreview>
  );
}

export default function HubPaineisSection() {
  return (
    <ComponentPreview
      title="Hub de Painéis Gerenciais"
      description="Layout de portal com cards de painéis institucionais. Ao passar o mouse, o card faz um efeito de flip revelando a descrição e o botão de acesso ao painel."
      whenToUse={[
        "Portais de acesso centralizado a múltiplos sistemas ou dashboards",
        "Hubs de painéis gerenciais ou analíticos",
        "Páginas de catálogo de serviços ou ferramentas internas",
      ]}
      accessibility={[
        "Cards possuem foco acessível via teclado",
        "Busca integrada com feedback visual",
        "Contraste adequado em ambos os modos claro e escuro",
      ]}
    >
      <HubPaineisPreview />
    </ComponentPreview>
  );
}
