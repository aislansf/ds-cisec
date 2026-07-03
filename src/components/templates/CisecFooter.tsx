import { useState } from "react";
import { CodeBlock } from "@/components/DSComponents";
import { cisecWhite } from "@/assets/cisec";
import { Copy, Check } from "lucide-react";

/* ─── Props do Footer ─── */
interface CisecFooterProps {
  projectName?: string;
  version?: string;
}

/* ─── Componente Footer ─── */
export function CisecFooter({ projectName = "Nome do Projeto", version = "v1.0.0" }: CisecFooterProps) {
  return (
    <footer
      className="flex items-center justify-between px-4 sm:px-6 gap-3"
      style={{
        backgroundColor: "#2A4FDA",
        height: "48px",
        minHeight: "48px",
      }}
    >
      {/* Esquerda: Marca + Projeto */}
      <div className="flex items-center gap-2 min-w-0">
        <img
          src={cisecWhite}
          alt="CISEC"
          className="h-5 w-auto shrink-0"
        />
        <span className="text-white/60 text-sm shrink-0">|</span>
        <span className="text-white text-sm font-medium truncate">
          {projectName}
        </span>
      </div>

      {/* Direita: Versão */}
      <span className="text-white/80 text-xs font-mono shrink-0">
        {version}
      </span>
    </footer>
  );
}

/* ─── Código-fonte para copiar ─── */
const footerCode = `<!-- Footer CISEC — Modelo Institucional -->
<footer class="cisec-footer">
  <div class="cisec-footer__brand">
    <img src="/assets/cisec-white.svg" alt="CISEC" class="cisec-footer__logo" />
    <span class="cisec-footer__separator">|</span>
    <span class="cisec-footer__project">Nome do Projeto</span>
  </div>
  <span class="cisec-footer__version">v1.0.0</span>
</footer>

<style>
.cisec-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0 1.5rem;
  height: 48px;
  background-color: #2A4FDA;
  font-family: 'Figtree', system-ui, sans-serif;
}
.cisec-footer__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}
.cisec-footer__logo {
  height: 20px;
  width: auto;
  flex-shrink: 0;
}
.cisec-footer__separator {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  flex-shrink: 0;
}
.cisec-footer__project {
  color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cisec-footer__version {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  flex-shrink: 0;
}
</style>`;

/* ─── Seção de Preview + Documentação ─── */
export default function CisecFooterSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(footerCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback silencioso
    }
  };

  return (
    <div className="space-y-8">
      {/* Preview */}
      <div className="rounded-lg overflow-hidden border border-border">
        <CisecFooter projectName="Design System CISEC-CE" version="v2.4.1" />
      </div>

      {/* Variação com nome longo */}
      <div className="rounded-lg overflow-hidden border border-border">
        <CisecFooter projectName="Sistema de Gestão de Projetos e Iniciativas Estratégicas" version="v3.0.0-beta.2" />
      </div>

      {/* Código */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-foreground text-sm">Código-fonte</h4>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            aria-label={copied ? "Código copiado" : "Copiar código"}
          >
            {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
            {copied ? "Copiado" : "Copiar"}
          </button>
        </div>
        <CodeBlock code={footerCode} />
      </div>

      {/* Especificações */}
      <div className="cisec-card">
        <h4 className="font-semibold text-foreground mb-3">Especificações</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted-foreground">
          <div>
            <p className="font-semibold text-foreground mb-1">Dimensões</p>
            <ul className="space-y-1">
              <li>• Altura fixa: 48px</li>
              <li>• Padding horizontal: 16–24px</li>
              <li>• Largura: 100% (fluido)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Cores</p>
            <ul className="space-y-1">
              <li>• Fundo: #2A4FDA (Azul CISEC)</li>
              <li>• Texto: #FFFFFF</li>
              <li>• Separador: rgba(255,255,255,0.6)</li>
              <li>• Versão: rgba(255,255,255,0.8)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-foreground mb-1">Tipografia</p>
            <ul className="space-y-1">
              <li>• Projeto: Figtree 14px / 500</li>
              <li>• Versão: monospace 12px</li>
              <li>• Separador: 14px regular</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Diretrizes */}
      <div className="cisec-card">
        <h4 className="font-semibold text-foreground mb-3">Diretrizes de uso</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-muted-foreground">
          <div>
            <p className="font-semibold text-success mb-1">✓ Quando usar</p>
            <ul className="space-y-1">
              <li>• Sempre ao final da página em aplicações CISEC</li>
              <li>• Use em sistemas internos e externos</li>
              <li>• Mantenha o nome do projeto curto e legível</li>
              <li>• A versão deve seguir SemVer (v1.0.0)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-error mb-1">✗ Quando não usar</p>
            <ul className="space-y-1">
              <li>• Não altere a cor de fundo fora do padrão</li>
              <li>• Não remova o logo institucional</li>
              <li>• Não use mais de uma linha de altura</li>
              <li>• Não inclua links ou menus no footer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
